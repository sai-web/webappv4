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
                        <div
                            key={index}
                            style={{
                                margin: "10px 5px"
                            }}
                        >
                            <a href={track.link} target="blank">
                                <motion.img
                                    src={track.thumbnail}
                                    alt={track.title}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        bounce: 0.35
                                    }}
                                    style={{ width: "200px" }}
                                />
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}