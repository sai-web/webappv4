import React, { useEffect, useState } from "react"
import { useEvent } from '@pulsejs/react'

import { animateTemplate, lanuchMenu, MenuType, contentPreview } from '../../core/utils/Events'
import { onMouseClick } from '../../utils/Hooks/mousePosition'

import Nav from '../nav/side/mainNav'
import Menu from '../nav/top/topNav'
import { ContentMenu } from '../menu/content'
import { ConnectionMenu } from '../menu/connections'
import { ContentPreviewOptions } from '../user/channel/ContentPreview'
import { ChannelPreview } from '../user/channel/channelPreview'

interface Props {
    PageMode: JSX.Element
    width: string
    children: React.ReactNode
    page: string
    reference?: React.RefObject<any>
    banner?: boolean
}

const Banner: React.FC<{ scaleVal: number }> = ({ scaleVal }) => {
    return (
        <div style={{
            width: "calc(100% - 200px)",
            height: "270px",
            overflow: "hidden",
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: "35px"
        }}>
            <img src="https://myrepublic.net/sg/content/uploads/2020/09/valorant-banner.png"
                style={{
                    height: `${((scaleVal + 1) / 2) * 270}px`,
                    objectFit: "cover"
                }}
            />
            <div style={{
                width: "100%",
                height: "100%",
                backgroundColor: `rgba(0,0,0,${1 - scaleVal})`,
                position: "absolute",
                top: "0",
                left: "0"
            }}
            >

            </div>
        </div>
    )
}

type showMenuType = {
    ContentMenu: boolean,
    ConnectionMenu: {
        display: boolean,
        domain: string,
        color: string
    },
    Profile: boolean
}

const template: React.FC<Props> = function ({ PageMode, width, children, page, reference, banner = false }) {
    var initialMenuState: showMenuType = {
        ContentMenu: false,
        ConnectionMenu: {
            display: false,
            domain: "",
            color: ""
        },
        Profile: false
    }
    const [bannerScale, setBannerScale] = useState<number>(1)
    const [templateAnimate, setTemplateAnimate] = useState<boolean>(false)
    const [showMenu, setShowMenu] = useState<showMenuType>(initialMenuState)
    const [showContentPreview, setShowContentPreview] = useState<boolean>(false)

    const position = onMouseClick()

    useEvent(animateTemplate, ({ display }) => {
        setTemplateAnimate(display)
    })
    useEvent(lanuchMenu, ({ type, display, domain, color }) => {
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
            } else newMenu[type] = display
            return newMenu
        })
    })
    useEvent(contentPreview, ({ show }) => setShowContentPreview(show))
    useEffect(() => {
        function handleScrollEvent(event: any) {
            if (reference!.current) setBannerScale(scrollPos => {
                if (scrollPos < 270) return 1 - (event.target.scrollTop / 670)
                return scrollPos
            })
        }
        if (reference) reference!.current.addEventListener("scroll", handleScrollEvent)
    }, [reference])
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
            <ContentMenu
                display={showMenu.ContentMenu}
                position={position}
            />
            <ConnectionMenu
                display={showMenu.ConnectionMenu.display}
                domain={showMenu.ConnectionMenu.domain}
                color={showMenu.ConnectionMenu.color}
                position={position}
            />
            <ContentPreviewOptions display={showContentPreview} />
            <ChannelPreview
                display={showMenu.Profile}
                position={position}
            />
        </div>
    )
}

export default template