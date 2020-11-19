import React from 'react'
import { motion } from 'framer-motion'

export const Overlay: React.FC = () => {
    return (
        <>
            <img
                src="https://static-cdn.jtvnw.net/categorydb-production-game-banners/26936/en-us/adc7e965-51b3-4341-94e9-0318101c46fd.png"
                alt="music-banner"
                style={{
                    width: "1400px"
                }}
            />
            <div style={{
                position: "absolute",
                top: "0",
                width: "100%",
                height: "200px",
                background: "linear-gradient(to left, rgba(14,14,16,0.8), rgba(14,14,16,1))"
            }}>
                <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "40px", lineHeight: "0", marginLeft: "50px" }}>Music</h4>
                <motion.button
                    whileTap={{
                        scale: 0.9
                    }}
                    style={{
                        width: "100px",
                        height: "30px",
                        backgroundColor: "#0071FF",
                        borderWidth: "0",
                        borderRadius: "3px",
                        color: "white",
                        marginLeft: "50px",
                        outline: "none",
                        cursor: "pointer"
                    }}
                >
                    subscribe
                </motion.button>
            </div>
        </>
    )
}