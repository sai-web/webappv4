import React from 'react'
import { motion } from 'framer-motion'

interface MenuOptionProperties {
    do: Function,
    color: string,
    logo: () => JSX.Element | null
}

export const MenuOptions: React.FC<{
    options: Record<string, MenuOptionProperties>,
    reference: React.MutableRefObject<any>
}> = ({ options, reference }) => {
    return (
        <motion.div
            initial={{
                scale: 0.2
            }}
            animate={{
                scale: 1
            }}
            transition={{
                type: "spring",
                damping: 10
            }}
            style={{
                width: "150px",
                position: "absolute",
                right: "10px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
            }}
            ref={reference}
        >
            {
                Object.keys(options).map((option, index) => {
                    return (
                        <motion.div
                            whileHover={{
                                backgroundColor: "#2d2d30"
                            }}
                            style={{
                                backgroundColor: options[option].color,
                                width: "100%",
                                height: "25px",
                                display: "flex",
                                alignItems: "center",
                                cursor: "pointer"
                            }}
                            key={"menu-options-" + index.toString()}
                        >
                            {options[option].logo()}
                            <h4 style={{
                                fontFamily: "Roboto Condensed",
                                fontWeight: "lighter",
                                color: "silver",
                                fontSize: "15px",
                                marginLeft: "5px"
                            }}>
                                {option}
                            </h4>
                        </motion.div>
                    )
                })
            }
        </motion.div>
    )
}