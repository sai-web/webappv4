import React, { useEffect, useRef, useState } from "react"
import { useEvent } from '@pulsejs/react'
import { motion } from 'framer-motion'

import { animateTemplate, lanuchMenu, MenuType, contentPreview } from '../../core/utils/Events'
import { onMouseClick } from '../../utils/Hooks/mousePosition'

import Nav from '../nav/side/mainNav'
import Menu from '../nav/top/topNav'
import { closeOnOutwardClick } from '../../utils/auth'
import { Banner } from '../user/channel/ChannelIntroduction/banner'

import { Settings } from '../settings/main'
import { PopUpMenus } from './popupMenus'
import next from "next"

type computationProps = {
    position: {
        x: number,
        y: number,
        width: number,
        height: number
    },
    references: React.MutableRefObject<any>[],
    contentPreviewDetails: contentPreviewDetails,
    showMenu: showMenuType
}

const ExpensiveComputations = React.memo(({
    position,
    references,
    contentPreviewDetails,
    showMenu
}: computationProps) => {
    return (
        <>
            <PopUpMenus
                position={position}
                references={references}
                contentPreviewDetails={contentPreviewDetails}
                showMenu={showMenu}
            />
            <Settings
                display={showMenu.Settings}
            />
        </>
    )
}, (prevProps, nextProps) => {
    return prevProps.showMenu === nextProps.showMenu && prevProps.contentPreviewDetails === nextProps.contentPreviewDetails && prevProps.position === nextProps.position
})

const ExpensivePageComputations = React.memo(({
    page,
    PageMode,
    width
}: {
    page: string,
    PageMode: JSX.Element,
    width: string
}) => {
    return (
        <>
            <Nav page={page} />
            <Menu
                pageModes={PageMode}
                width={width}
                page={page}
            />
        </>
    )
}, (prevProps, nextProps) => {
    return prevProps.PageMode === nextProps.PageMode && prevProps.page === nextProps.page && prevProps.width === nextProps.width
})

export type showMenuType = {
    ContentMenu: {
        display: boolean,
    },
    SelectPlaylistMenu: {
        display: boolean,
        position: {
            x: number,
            y: number,
            width: number,
            height: number
        }
    },
    ContextMenu: {
        display: boolean,
        position: {
            x: number,
            y: number,
            width: number,
            height: number
        }
    },
    ConnectionMenu: {
        display: boolean,
        domain: string,
        color: string
    },
    Profile: boolean,
    ChannelDropDown: boolean,
    ShareLinkComponent: boolean,
    Settings: boolean,
}

export type contentPreviewDetails = {
    show: boolean,
}

interface Props {
    PageMode: JSX.Element
    width: string
    children: React.ReactNode
    page: string
    reference?: React.RefObject<any>
    banner?: boolean
}

const templateAnimateVariant = {
    enlarged: {
        scale: 1
    },
    shrunk: {
        scale: 0.95
    }
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
        },
        SelectPlaylistMenu: {
            display: false,
            position: {
                height: 0,
                width: 0,
                x: 0,
                y: 0
            }
        },
        ContextMenu: {
            display: false,
            position: {
                height: 0,
                width: 0,
                x: 0,
                y: 0
            }
        },
        ConnectionMenu: {
            display: false,
            domain: "",
            color: ""
        },
        Profile: false,
        ChannelDropDown: false,
        ShareLinkComponent: false,
        Settings: false,
    }
    var initialContentPreviewDetails: contentPreviewDetails = {
        show: false,
    }
    const [bannerScale, setBannerScale] = useState<number>(1)
    const [templateAnimate, setTemplateAnimate] = useState<boolean>(false)
    const [showMenu, setShowMenu] = useState<showMenuType>(initialMenuState)
    const [contentPreviewDetails, setContentPreviewDetails] = useState<contentPreviewDetails>(initialContentPreviewDetails)
    const [renderCount, setRenderCount] = useState<number>(0)

    const ContentMenuRef = useRef<any>(null)
    const SelectPlaylistMenuRef = useRef<any>(null)
    const ContextMenuRef = useRef<any>(null)
    const ContentPreviewRef = useRef<any>(null)
    const ConnectionOptionsRef = useRef<any>(null)
    const shareLinkComponentRef = useRef<any>(null)

    const position = onMouseClick(showMenu)

    closeOnOutwardClick((value: boolean) => {
        animateTemplate.emit({ display: value })
    }, [
        ContentMenuRef,
        ConnectionOptionsRef,
        ContentPreviewRef,
        shareLinkComponentRef,
        ContextMenuRef,
        SelectPlaylistMenuRef
    ])

    useEvent(animateTemplate, ({ display }) => {
        setTemplateAnimate(display)
    })
    useEvent(lanuchMenu, ({
        type,
        display,
        domain,
        color,
        position
    }) => {
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
                }
            } else if (type === MenuType.ContextMenu) {
                newMenu[type] = {
                    display,
                    position: {
                        ...initialMenuState.ContextMenu.position,
                        ...position
                    }
                }
                if (prev.ContextMenu.display && !display) animateTemplate.emit({ display: false })
            } else if (type === MenuType.SelectPlaylistMenu) {
                newMenu.ContentMenu = {
                    display: false,
                }
                newMenu[type] = {
                    display,
                    position: {
                        ...initialMenuState.SelectPlaylistMenu.position,
                        ...position
                    }
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
        <motion.div
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                right: "0"
            }}
            initial={templateAnimate ? "enlarged" : renderCount > 1 ? "shrunk" : "enlarged"}
            animate={templateAnimate ? "shrunk" : "enlarged"}
            variants={templateAnimateVariant}
        >
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
                <ExpensivePageComputations
                    PageMode={PageMode}
                    page={page}
                    width={width}
                />
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
            <ExpensiveComputations
                contentPreviewDetails={contentPreviewDetails}
                position={position}
                references={[
                    ContentMenuRef,
                    ConnectionOptionsRef,
                    ContentPreviewRef,
                    shareLinkComponentRef,
                    ContextMenuRef,
                    SelectPlaylistMenuRef
                ]}
                showMenu={showMenu}
            />
        </motion.div>
    )
}

export default template