import React from "react"
import { motion } from 'framer-motion'

import { albumnSet } from '../fakeData/music'
import { AlbumnCard } from './albumnSetCards'

export const AlbumnSet = () => {
    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px"
        }}>
            <div style={{
                width: "calc(100% - 150px)",
                height: "500px",
                display: "flex",
                alignItems: "center"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}>
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
                            src={albumnSet[0].thumbnail}
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
                            <h4 style={{ fontFamily: "sans-serif", color: "white", fontSize: "20px" }}>{albumnSet[0].title}</h4>
                        </div>
                    </motion.div>
                    <div style={{
                        flex: "1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap"
                    }}>
                        <AlbumnCard thumbnail={albumnSet[1].thumbnail} title={albumnSet[1].title} />
                        <AlbumnCard thumbnail={albumnSet[2].thumbnail} title={albumnSet[2].title} />
                        <AlbumnCard thumbnail={albumnSet[3].thumbnail} title={albumnSet[3].title} />
                        <AlbumnCard thumbnail={albumnSet[4].thumbnail} title={albumnSet[4].title} />
                    </div>
                </div>
            </div>
        </div>
    )
}