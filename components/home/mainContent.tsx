import React from 'react'
import { motion } from 'framer-motion'

interface content {
    title: string
    thumbnail: string
    creator: string
    link: string
}

const content: React.FC<{ mainContentData: content[] }> = ({ mainContentData }) => {
    return (
        <>
            {
                mainContentData.map((vod, index) => {
                    return (
                        <div
                            style={{
                                width: "200px",
                                height: "200px",
                                marginLeft: "10px",
                            }}
                            key={index}
                        >
                            <a href={vod.link} target="_blank">
                                <motion.img
                                    whileTap={{
                                        scale: 0.9
                                    }}
                                    initial={{
                                        scale: 0.7
                                    }}
                                    animate={{
                                        scale: 1
                                    }}
                                    transition={{
                                        type: "spring",
                                        bounce: 0.35
                                    }}
                                    src={vod.thumbnail}
                                    alt="vod-img"
                                    style={{
                                        width: "100%",
                                        height: "112px",
                                        objectFit: "cover",
                                        cursor: "pointer"
                                    }}
                                />
                            </a>
                            <h4 style={{
                                fontFamily: "Roboto Condensed",
                                fontWeight: "lighter",
                                color: "whitesmoke",
                                fontSize: "13px",
                                position: "relative",
                                bottom: "10px"
                            }}>
                                {vod.title.length > 50 ? vod.title.slice(0, 50) + '...' : vod.title}
                            </h4>
                        </div>
                    )
                })
            }
        </>
    )
}

export default content