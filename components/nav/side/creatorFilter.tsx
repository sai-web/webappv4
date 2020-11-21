import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { creators } from '../../../components/home/fakeData/sideNav'

interface creator {
    photo: string
    name: string
    domain: string
    type: string
}

export const Filter: React.FC = () => {
    const [[all, favorite, banned], setMode] = useState<Array<boolean>>([true, false, false])
    const [renderCreators, setRenderCreators] = useState<Array<creator>>(creators)
    return (
        <div style={{
            width: "100%",
            height: "calc(100% - 120px)"
        }}>
            <div style={{
                width: "calc(100% - 10px)",
                height: "35px",
                backgroundColor: "#242429",
                marginLeft: "5px",
                marginTop: "10px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
                <motion.i
                    className="fa fa-user subscribed-channel-filters"
                    style={{ fontSize: "15px", cursor: "pointer", color: all ? "grey" : undefined }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        setMode([true, false, false])
                        setRenderCreators(() => {
                            var newCreators = creators.filter(creator => {
                                return true
                            })
                            return newCreators
                        })
                    }}
                />
                <motion.span
                    className="material-icons subscribed-channel-filters"
                    style={{ fontSize: "17px", cursor: "pointer", color: favorite ? "grey" : undefined }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        setMode([false, true, false])
                        setRenderCreators(() => {
                            var newCreators = creators.filter(creator => {
                                return creator.type === "favourites"
                            })
                            return newCreators
                        })
                    }}
                >
                    favorite_border
                </motion.span>
                <motion.span
                    className="material-icons subscribed-channel-filters"
                    style={{ fontSize: "17px", cursor: "pointer", color: banned ? "grey" : undefined }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        setMode([false, false, true])
                        setRenderCreators(() => {
                            var newCreators = creators.filter(creator => {
                                return creator.type === "banned"
                            })
                            return newCreators
                        })
                    }}
                >
                    notifications_off
                </motion.span>
            </div>
            <div style={{
                width: "100%",
                height: "calc(100% - 35px)"
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
                                            objectFit: "cover"
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
                    <div style={{
                        height: "100px"
                    }}>
                        Discord Link
                    </div>
                </div>
            </div>
        </div>
    )
}