import React from "react"
import { motion } from 'framer-motion'

import { streams } from '../../fakeData/esports'
import { StreamCard } from './streamCard'

export const StreamSet = () => {
    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px"
        }}>
            <div style={{
                width: "calc(100% - 100px)",
                display: "flex",
                alignItems: "center"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}>
                    <div style={{
                        flex: "1.2",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <a href={streams[0].link} target="_blank">
                            <motion.img
                                src={streams[0].thumbnail}
                                alt="thumbnail"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.35
                                }}
                                style={{
                                    width: "500px",
                                    objectFit: "cover",
                                    cursor: "pointer"
                                }}
                            />
                        </a>
                        <h4 style={{ fontFamily: "sans-serif", color: "white", fontSize: "15px", width: "450px" }}>{streams[0].title}</h4>
                    </div>
                    <div style={{
                        flex: "1",
                        height: "300px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap"
                    }}>
                        <StreamCard src={streams[1].thumbnail} title={streams[1].title} link={streams[1].link} />
                        <StreamCard src={streams[2].thumbnail} title={streams[2].title} link={streams[2].link} />
                        <StreamCard src={streams[3].thumbnail} title={streams[3].title} link={streams[3].link} />
                        <StreamCard src={streams[4].thumbnail} title={streams[4].title} link={streams[4].link} />
                    </div>
                </div>
            </div>
        </div>
    )
}