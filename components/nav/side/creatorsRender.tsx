import React from 'react'
import { motion } from 'framer-motion'

interface creator {
    photo: string
    name: string
    domain: string
    type: string
}

interface Props {
    renderCreators: creator[]
}

export const CreatorsRender: React.FC<Props> = ({ renderCreators }) => {
    return (
        <div style={{
            width: "100%",
            height: "calc(100% - 55px)"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                overflowY: "scroll"
            }} className="main-content-div">
                {
                    renderCreators.map((creator, index) => {
                        return (
                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                initial={{
                                    scale: 0.9
                                }}
                                animate={{
                                    scale: 1
                                }}
                                transition={{
                                    type: "spring",
                                    duration: 0.3
                                }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginLeft: "5px",
                                    width: "calc(100% - 10px)",
                                    height: "50px",
                                    cursor: "pointer",
                                    borderRadius: "5px"
                                }}
                                key={index}
                                className="creators"
                            >
                                <img
                                    src={creator.photo}
                                    alt="creator-image"
                                    style={{
                                        width: "35px",
                                        height: "35px",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                        marginLeft: "10px"
                                    }}
                                />
                                <div style={{
                                    marginLeft: "10px"
                                }}>
                                    <h4 style={{
                                        fontFamily: "Roboto Condensed",
                                        fontWeight: "lighter",
                                        color: "white",
                                        fontSize: "15px",
                                        lineHeight: "0"
                                    }}>
                                        {creator.name.length > 10 ? creator.name.slice(0, 50) + '...' : creator.name}
                                    </h4>
                                    <h4 style={{
                                        fontFamily: "sans-serif",
                                        color: "grey",
                                        fontSize: "10px",
                                        lineHeight: "0",
                                        position: "relative",
                                        bottom: "5px"
                                    }}>
                                        {creator.domain}
                                    </h4>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}