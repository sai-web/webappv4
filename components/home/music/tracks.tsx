import React from 'react'
import { motion } from 'framer-motion'

interface Track {
    thumbnail: string;
    link: string;
    title: string;
}

interface Props {
    tracks: Track[]
}

export const AllTracks: React.FC<Props> = ({ tracks }) => {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "50px"
        }}>
            {
                tracks.map((track, index) => {
                    return (
                        <motion.div
                            key={index}
                            className="spotify-tracks"
                            whileHover={{ borderRadius: "10px", scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                margin: "10px",
                                position: "relative",
                                width: "200px",
                                height: "200px",
                                overflow: "hidden"
                            }}
                        >
                            <a href={track.link} target="blank">
                                <motion.img
                                    src={track.thumbnail}
                                    alt={track.title}
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        bounce: 0.35
                                    }}
                                    style={{ width: "200px" }}
                                />
                                <div
                                    className="track-overlay"
                                    style={{
                                        backgroundColor: "rgba(0,0,0,0.5)",
                                        width: "200px",
                                        height: "200px",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        position: "absolute",
                                        top: "0"
                                    }}
                                >
                                    <h4 style={{ fontFamily: "sans-serif", color: "white", fontSize: "20px" }}>{track.title}</h4>
                                </div>
                            </a>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}