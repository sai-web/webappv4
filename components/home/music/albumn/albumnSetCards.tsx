import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    thumbnail: string
    title: string
    link: string
}

export const AlbumnCard: React.FC<Props> = ({ thumbnail, title, link }) => {
    return (
        <a href={link} target="_blank">
            <motion.div
                className="spotify-tracks"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1, borderRadius: "15px" }}
                whileTap={{ scale: 0.9 }}
                transition={{
                    type: "spring",
                    duration: 0.3
                }}
                style={{
                    position: "relative",
                    width: "180px",
                    height: "180px",
                    overflow: "hidden",
                    cursor: "pointer"
                }}
            >
                <img
                    src={thumbnail}
                    alt="thumbnail"
                    style={{
                        width: "180px",
                        objectFit: "cover",
                        cursor: "pointer"
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
                    <h4 style={{ fontFamily: "sans-serif", color: "white", fontSize: "15px" }}>{title.length > 50 ? title.slice(0, 50) + '...' : title}</h4>
                </div>
            </motion.div>
        </a>
    )
}