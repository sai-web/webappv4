import React from 'react'
import { motion } from 'framer-motion'

interface AdvancedOptionsProps {
    name: string,
    logo: JSX.Element,
    description: string,
    color: string
}

export const AdvancedPostOptions: React.FC<AdvancedOptionsProps> = ({
    name,
    logo,
    description,
    color
}) => {
    return (
        <div style={{
            marginLeft: "10px"
        }}>
            <motion.div
                whileTap={{ scale: 0.9 }}
                style={{
                    width: "130px",
                    height: "170px",
                    backgroundColor: color,
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer"
                }}
            >
                {logo}
                <h4 style={{
                    fontFamily: "Whitney",
                    color: "white",
                    fontSize: "17px",
                    lineHeight: "0"
                }}>
                    {name}
                </h4>
                <h4 style={{
                    fontFamily: "Roboto Condensed",
                    color: "white",
                    fontSize: "10px",
                    fontWeight: "lighter",
                    width: "calc(100% - 10px)"
                    // lineHeight: "0"
                }}>
                    {description}
                    <br />
                        You must have your YouTube account connected in order to use this service.
                    </h4>
            </motion.div>
        </div>
    )
}