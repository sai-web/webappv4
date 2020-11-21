import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    thumbnail: string
    title: string
    link: string
}

export const MainCard: React.FC<Props> = ({ thumbnail, title, link }) => {
    return (
        <a href={link} target="_blank">
            <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                    type: "spring",
                    bounce: 0.35
                }}
                style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    width: "410px",
                    height: "420px",
                    overflow: "hidden",
                    borderRadius: "20px",
                    cursor: "pointer"
                }} className="spotify-tracks"
            >
                <img
                    src={thumbnail}
                    alt="thumbnail"
                    style={{
                        width: "100%",
                        objectFit: "cover",
                        cursor: "pointer",
                    }}
                />
                <div
                    className="track-overlay"
                    style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        top: "0"
                    }}
                >
                    <h4 style={{ fontFamily: "sans-serif", color: "white", fontSize: "20px" }}>{title}</h4>
                </div>
            </motion.div>
        </a>
    )
}