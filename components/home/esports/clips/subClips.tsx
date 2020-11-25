import React from 'react'
import { motion } from 'framer-motion'

interface Clip {
    thumbnail: string;
    title: string;
}

interface Props {
    clips: Clip[]
}

export const SubClips: React.FC<Props> = ({ clips }) => {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "50px",
            marginLeft: "10px"
        }}>
            {
                clips.map((clip, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                width: "200px",
                                margin: "5px"
                            }}
                        >
                            <motion.img
                                src={clip.thumbnail}
                                alt="sub-clips"
                                style={{
                                    width: "200px",
                                    cursor: "pointer"
                                }}
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.35
                                }}
                                whileTap={{ scale: 0.9 }}
                            />
                            <h4 style={{
                                fontFamily: "Roboto Condensed",
                                fontWeight: "lighter",
                                color: "white",
                                fontSize: "13px",
                                position: "relative",
                                bottom: "10px"
                            }}>
                                {clip.title.length > 50 ? clip.title.slice(0, 50) + '...' : clip.title}
                            </h4>
                        </div>
                    )
                })
            }
        </div>
    )
}