import React, { useEffect, useRef, useState } from 'react'
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

interface ContextMenuProps {
    display: boolean,
    position: {
        x: number,
        y: number,
        width: number,
        height: number
    },
    reference: React.MutableRefObject<any>
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
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
            id="context-menu-parent"
        >
            <MenuOptions options={{
                "Add to playlist": {
                    do: () => null,
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
                remove: {
                    do: () => {
                        core.vod.deleteVodFromPlaylist('watch_later', core.vod.collections.vods.selectors.CURRENT.value.vod_id)
                        lanuchMenu.emit({
                            type: MenuType.ContextMenu,
                            display: false,
                            position
                        })
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
                type={MenuType.ContextMenu}
                position={position}
                reference={reference}
            />
        </motion.div>
    )
}