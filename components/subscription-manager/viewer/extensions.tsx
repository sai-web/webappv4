import React from 'react'
import { motion } from 'framer-motion'

interface ExtensionProps {
    icon: JSX.Element
    title: string
    subTitle: string
    color: string
}

export const Extension: React.FC<ExtensionProps> = ({ icon, title, subTitle, color }) => {
    return (
        <motion.div
            whileTap={{
                scale: 0.9
            }}
            style={{
                width: "100%",
                height: "55px",
                borderRadius: "5px",
                backgroundColor: "#1A1A1C",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                cursor: "pointer"
            }}
        >
            <div style={{
                backgroundColor: color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "30px"
            }}>
                {icon}
            </div>
            <div style={{ marginLeft: "10px" }}>
                <h4 style={{
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    color: "white",
                    lineHeight: "0",
                    position: "relative",
                    top: "7px"
                }}>
                    {title}
                </h4>
                <h4 style={{
                    fontFamily: "Poppins",
                    fontSize: "10px",
                    color: "grey",
                    position: "relative",
                    bottom: "7px"
                }}>
                    {subTitle}
                </h4>
            </div>
        </motion.div>
    )
}