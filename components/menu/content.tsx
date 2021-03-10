import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

import { core } from '../../core'

import { animateTemplate, lanuchMenu, MenuType } from '../../core/utils/Events'
import { MenuOptions } from './menuOptions'

const displayVariants = {
    visible: {
        scale: 1,
        opacity: 1
    },
    hidden: {
        scale: 0,
        opacity: 0
    }
}

function getPosition(position: {
    x: number,
    y: number,
    width: number,
    height: number
}, element: {
    width: number,
    height: number
}) {
    let coordinates = {
        x: position.x,
        y: position.y
    }

    const computationForX = position.width - (element.width + position.x)
    const computationForY = position.height - (element.height + position.y)
    if (computationForX < 0) coordinates.x = position.x + computationForX - 30
    if (computationForY < 0) coordinates.y = position.y + computationForY - 30
    return coordinates
}

interface ContentMenuProps {
    display: boolean,
    position: {
        x: number,
        y: number,
        width: number,
        height: number
    },
    reference: React.MutableRefObject<any>
}

export const ContentMenu: React.FC<ContentMenuProps> = ({
    display,
    position,
    reference
}) => {
    const { x, y } = getPosition(position, {
        width: 150,
        height: 120
    })
    return (
        <motion.div
            initial={display ? "hidden" : "visible"}
            animate={display ? "visible" : "hidden"}
            transition={{
                type: "spring",
                duration: 0.5,
                bounce: 0.35
            }}
            variants={displayVariants}
            style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                zIndex: 2,
                // backgroundColor: "red",
                // display: "flex"
                // width: "100px",
                // height: "100px"
            }}
            id="content-menu-parent"
        >
            <MenuOptions
                options={{
                    "Watch later": {
                        do: () => {
                            core.vod.addVodToPlaylist({
                                vod_id: core.vod.collections.vods.selectors.CURRENT.value.vod_id,
                                playlists: ["watch_later"]
                            })
                            lanuchMenu.emit({ type: MenuType.ContentMenu, display: false })
                            animateTemplate.emit({ display: false })
                        },
                        color: "dark",
                        logo: () => (
                            <span className="material-icons"
                                style={{
                                    color: "grey",
                                    fontSize: "15px",
                                    marginLeft: "10px"
                                }}
                            >
                                watch_later
                            </span>
                        )
                    },
                    "Add to playlist": {
                        do: () => {
                            lanuchMenu.emit({
                                display: true,
                                type: MenuType.SelectPlaylistMenu,
                                position
                            })
                        },
                        color: "dark",
                        logo: () => (
                            <span className="material-icons"
                                style={{
                                    color: "grey",
                                    fontSize: "15px",
                                    marginLeft: "10px"
                                }}
                            >
                                queue
                            </span>
                        )
                    },
                    Report: {
                        do: () => null,
                        color: "light",
                        logo: () => (
                            <span className="material-icons"
                                style={{
                                    color: "grey",
                                    fontSize: "15px",
                                    marginLeft: "10px"
                                }}
                            >
                                report
                            </span>
                        )
                    },
                    Share: {
                        do: () => null,
                        color: "light",
                        logo: () => (
                            <span className="material-icons"
                                style={{
                                    color: "grey",
                                    fontSize: "15px",
                                    marginLeft: "10px"
                                }}
                            >
                                share
                            </span>
                        )
                    },
                    Delete: {
                        do: () => {
                            core.vod.remove(core.vod.collections.vods.selectors.CURRENT.value.vod_id)
                            lanuchMenu.emit({ type: MenuType.ContentMenu, display: false })
                            animateTemplate.emit({ display: false })
                        },
                        color: "light",
                        logo: () => (
                            <span className="material-icons"
                                style={{
                                    color: "grey",
                                    fontSize: "15px",
                                    marginLeft: "10px"
                                }}
                            >
                                delete
                            </span>
                        )
                    }
                }}
                type={MenuType.ContentMenu}
                reference={reference}
            />
        </motion.div>
    )
}