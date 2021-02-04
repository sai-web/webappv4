import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

import { onMouseClick } from '../../utils/Hooks/mousePosition'
import { MenuOptions } from '../../utils/app/menuOptions'

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

export const ContentMenu: React.FC<{
    display: boolean,
}> = ({ display }) => {
    const { x, y } = onMouseClick({ width: 150, height: 100 })
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
                // backgroundColor: "red",
                // display: "flex"
                // width: "100px",
                // height: "100px"
            }}
            id="content-menu-parent"
        >
            <MenuOptions options={{
                "Watch later": {
                    do: () => null,
                    color: "#18181B",
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
                    do: () => null,
                    color: "#18181B",
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
                    color: "#222226",
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
                    color: "#222226",
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
                }
            }}
            />
        </motion.div>
    )
}