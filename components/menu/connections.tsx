import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { onMouseClick } from '../../utils/Hooks/mousePosition'
import { ConnectionsOptions } from '../../utils/app/connectionsOptions'

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

export const ConnectionMenu: React.FC<{
    display: boolean,
    domain: string,
    color: string,
    position: {
        x: number,
        y: number,
        width: number,
        height: number
    },
    reference: React.MutableRefObject<any>
}> = ({ display, domain, color, position, reference }) => {
    const { x, y } = getPosition(position, {
        width: 230,
        height: 320
    })
    // useEffect(() => {
    //     console.log(x, y)
    // }, [x, y])
    // useEffect(() => {
    //     const contentMenuParentElement = document.getElementById('content-menu-parent')
    //     if (contentMenuParentElement) {
    //         if (display) contentMenuParentElement.style.display = "flex"
    //         else setTimeout(() => contentMenuParentElement.style.display = "none", 1000)
    //     }
    // })
    return (
        <motion.div
            initial={display ? "hidden" : "visible"}
            animate={display ? "visible" : "hidden"}
            transition={{
                type: "spring",
                damping: 10
            }}
            variants={displayVariants}
            style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                zIndex: 2,
                width: "230px",
                height: "320px",
                // backgroundColor: "red",
                // display: "flex"
                // width: "100px",
                // height: "100px"
            }}
            id="connection-menu-parent"
        >
            <ConnectionsOptions
                domain={domain}
                color={color}
                live
                reference={reference}
            />
        </motion.div>
    )
}