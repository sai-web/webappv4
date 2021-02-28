import React, { useEffect, useRef, useState } from "react"
import { useEvent } from '@pulsejs/react'
import Router from 'next/router'

import { core } from '../../core'

import { animateTemplate, lanuchMenu, MenuType, contentPreview } from '../../core/utils/Events'
import { onMouseClick } from '../../utils/Hooks/mousePosition'

import Nav from '../nav/side/mainNav'
import Menu from '../nav/top/topNav'
import { ContentMenu } from '../menu/content'
import { ConnectionMenu } from '../menu/connections'
import { ContentPreviewOptions } from '../user/accessories/content.preview/ContentPreview'
import { ChannelPreview } from '../user/channel/channelPreview'
import { ChannelSettingsDropDownMenu } from '../menu/channelSettingsDropDown'
import { ConnectionsOptions } from "../menu/connectionsOptions"
import { closeOnOutwardClick } from '../../utils/auth'
import { UploadSection } from './upload'
import { Banner } from '../user/channel/ChannelIntroduction/banner'

import { Settings } from '../settings/main'

interface PopUpProps {
    showMenu: showMenuType,
    position: {
        x: number;
        y: number;
        width: number;
        height: number;
    },
    references: React.MutableRefObject<any>[],
    contentPreviewDetails: contentPreviewDetails
}

const PopUpMenus: React.FC<PopUpProps> = ({
    showMenu,
    position,
    references,
    contentPreviewDetails
}) => {
    return (
        <>
            <ContentMenu
                display={showMenu.ContentMenu.display}
                position={position}
                reference={references[0]}
                vod_id={showMenu.ContentMenu.vod_id}
            />
            <ConnectionMenu
                display={showMenu.ConnectionMenu.display}
                domain={showMenu.ConnectionMenu.domain}
                color={showMenu.ConnectionMenu.color}
                position={position}
                reference={references[1]}
            />
            <ContentPreviewOptions
                display={contentPreviewDetails.show}
                vod_id={contentPreviewDetails.vod_id}
                reference={references[2]}
            />
            <ChannelPreview
                display={showMenu.Profile}
                position={position}
            />
            <ChannelSettingsDropDownMenu
                display={showMenu.ChannelDropDown}
            />
            <UploadSection
                display={showMenu.ShareLinkComponent}
                reference={references[3]}
            />
        </>
    )
}

export type showMenuType = {
    ContentMenu: {
        display: boolean,
        vod_id: string
    },
    ConnectionMenu: {
        display: boolean,
        domain: string,
        color: string
    },
    Profile: boolean,
    ChannelDropDown: boolean,
    ShareLinkComponent: boolean,
    Settings: boolean
}

type contentPreviewDetails = {
    show: boolean,
    vod_id: string
}

interface Props {
    PageMode: JSX.Element
    width: string
    children: React.ReactNode
    page: string
    reference?: React.RefObject<any>
    banner?: boolean
}

const template: React.FC<Props> = function ({
    PageMode,
    width,
    children,
    page,
    reference,
    banner = false
}) {
    var initialMenuState: showMenuType = {
        ContentMenu: {
            display: false,
            vod_id: ""
        },
        ConnectionMenu: {
            display: false,
            domain: "",
            color: ""
        },
        Profile: false,
        ChannelDropDown: false,
        ShareLinkComponent: false,
        Settings: false
    }
    var initialContentPreviewDetails: contentPreviewDetails = {
        show: false,
        vod_id: ''
    }
    const [bannerScale, setBannerScale] = useState<number>(1)
    const [templateAnimate, setTemplateAnimate] = useState<boolean>(false)
    const [showMenu, setShowMenu] = useState<showMenuType>(initialMenuState)
    const [contentPreviewDetails, setContentPreviewDetails] = useState<contentPreviewDetails>(initialContentPreviewDetails)
    const [renderCount, setRenderCount] = useState<number>(0)

    const ContentMenuRef = useRef<any>(null)
    const ContentPreviewRef = useRef<any>(null)
    const ConnectionOptionsRef = useRef<any>(null)
    const shareLinkComponentRef = useRef<any>(null)

    const position = onMouseClick(showMenu)

    closeOnOutwardClick((value: boolean) => {
        animateTemplate.emit({ display: value })
    }, [
        ContentMenuRef,
        ContentPreviewRef,
        ConnectionOptionsRef,
        shareLinkComponentRef
    ])

    useEvent(animateTemplate, ({ display }) => {
        setTemplateAnimate(display)
    })
    useEvent(lanuchMenu, ({ type, display, domain, color, vod_id }) => {
        setShowMenu(prev => {
            let newMenu = { ...prev }
            if (type === MenuType.ConnectionMenu) {
                if (!domain || !color) {
                    newMenu[type] = {
                        ...newMenu[type],
                        display
                    }
                } else {
                    newMenu[type] = {
                        display,
                        domain,
                        color
                    }
                }
            } else if (type === MenuType.ContentMenu) {
                newMenu[type] = {
                    display,
                    vod_id: vod_id!
                }
            } else newMenu[type] = display
            return newMenu
        })
    })
    useEvent(contentPreview, (details) => {
        setContentPreviewDetails(details)
    })
    useEffect(() => {
        function handleScrollEvent(event: any) {
            if (reference!.current) setBannerScale(scrollPos => {
                if (scrollPos < 270) return 1 - (event.target.scrollTop / 670)
                return scrollPos
            })
        }
        if (reference) reference!.current.addEventListener("scroll", handleScrollEvent)
    }, [reference])
    useEffect(() => {
        if (renderCount < 2) setRenderCount(prev => (prev + 1))
    })
    return (
        <div style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            right: "0"
        }}>
            <div
                className="main-content-div"
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    // top: "0",
                    // left: "0",
                    backgroundColor: "#0E0E10",
                    userSelect: "none",
                    overflowY: "scroll",
                    scrollbarWidth: "none",
                    scrollSnapType: "y",
                    // filter: "invert(100%)"
                }}
                ref={reference}
            >
                <div
                    style={{
                        width: "calc(100% - 200px)",
                        height: "calc(100% - 40px)",
                        position: "absolute",
                        top: "40px",
                        right: "0"
                    }}
                >
                    {banner ? <Banner scaleVal={bannerScale} /> : ""}
                    {children}
                </div>
                <Nav page={page} />
                <Menu pageModes={PageMode} width={width} page={page} />
            </div>
            {templateAnimate ?
                <div style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    zIndex: 1
                }}>

                </div> : ""
            }
            <PopUpMenus
                position={position}
                references={[
                    ContentMenuRef,
                    ConnectionOptionsRef,
                    ContentPreviewRef,
                    shareLinkComponentRef
                ]}
                contentPreviewDetails={contentPreviewDetails}
                showMenu={showMenu}
            />
            <Settings
                display={showMenu.Settings}
            />
        </div>
    )
}

export default template