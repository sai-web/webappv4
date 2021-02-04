import React from 'react'
import { motion } from 'framer-motion'

interface ConnectionOptionsProps {
    name: string
    color: string
    subCount: string
    link?: string
    live?: boolean
}

export const ConnectionsOptions: React.FC<ConnectionOptionsProps> = () => {
    return (
        <div style={{
            width: "230px",
            height: "350px",
            backgroundColor: "#2F3136",
            position: "absolute",
            top: "100px",
            right: "100px",
            borderRadius: "10px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <div style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#202225",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img
                    src="https://www.decentfashion.in/wp-content/uploads/2018/02/Cool-cool-profile-pictures-300x244.jpg"
                    style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "35px",
                        objectFit: "cover",
                        cursor: "pointer"
                    }}
                />
                <h4 style={{
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    color: "white",
                    fontWeight: "lighter",
                    lineHeight: "0"
                }}>
                    Arspec101
                </h4>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    bottom: "15px"
                }}>
                    <h4 style={{
                        fontFamily: "Poppins",
                        fontSize: "10px",
                        color: "grey",
                        fontWeight: "lighter",
                        lineHeight: "0"
                    }}>
                        twitch.tv/
                    </h4>
                    <h4 style={{
                        fontFamily: "Poppins",
                        fontSize: "10px",
                        color: "silver",
                        fontWeight: "lighter",
                        lineHeight: "0"
                    }}>
                        Arspec101
                    </h4>
                </div>
                <motion.button
                    whileTap={{
                        scale: 0.9
                    }}
                    style={{
                        width: "100px",
                        height: "25px",
                        backgroundColor: "#4f3285",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "Poppins",
                        fontSize: "15px",
                        color: "whitesmoke",
                        borderWidth: "0",
                        borderRadius: "5px",
                        outline: "none",
                        position: "relative",
                        bottom: "10px",
                        cursor: "pointer"
                    }}
                >
                    subscribe
                </motion.button>
            </div>
        </div>
    )
}