import React from 'react'
import { motion } from 'framer-motion'

interface clip {
    thumbnail: string;
    title: string;
}

interface Props {
    clips: clip[]
}

export const TopClips: React.FC<Props> = ({ clips }) => {
    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly"
        }}>
            {
                clips.map((clip, index) => {
                    return (
                        <motion.div
                            className="top-clips"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                bounce: 0.35
                            }}
                            style={{
                                width: "450px",
                                height: "100px",
                                display: "flex",
                                alignItems: "center",
                                margin: "10px 0",
                                cursor: "pointer",
                                borderRadius: "5px"
                            }}
                            key={index}
                        >
                            <img
                                src={clip.thumbnail}
                                alt="clips"
                                style={{
                                    width: "150px",
                                    marginLeft: "10px"
                                }}
                            />
                            <h4 style={{
                                fontFamily: "sans-serif",
                                color: "white",
                                fontSize: "15px",
                                marginLeft: "10px"
                            }}>
                                {clip.title}
                            </h4>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}