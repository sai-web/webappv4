import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { contentPreview } from '../../../core/utils/Events'
import { useEvent } from '@pulsejs/react'

import { closeOnOutwardClick } from '../../../utils/auth/index'
import { animateTemplate } from '../../../core/utils/Events'

import { InputArea } from './accessories'

const ChatSection: React.FC = () => {
    return (
        <div style={{
            backgroundColor: "#1F1F23",
            width: "250px",
            height: "100%",
            position: "absolute",
            right: "0"
        }}>
            <div style={{
                // backgroundColor: "red",
                height: "50px",
                width: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgb(36, 36, 41)"
            }}>
                <img src="https://www.decentfashion.in/wp-content/uploads/2018/02/Cool-cool-profile-pictures-300x244.jpg"
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "15px",
                        objectFit: "cover",
                        marginLeft: "10px"
                    }}
                />
                <h4 style={{
                    fontFamily: "Whitney",
                    color: "silver",
                    fontSize: "20px",
                    lineHeight: "0",
                    marginLeft: "10px"
                }}>
                    AR
                </h4>
                <h4 style={{
                    fontFamily: "Poppins",
                    color: "grey",
                    fontSize: "15px",
                    lineHeight: "0",
                    // position: "relative",
                    // bottom: "20px"
                }}>
                    /ar
                </h4>
            </div>
            <div style={{
                // backgroundColor: "black",
                width: "calc(100% - 10px)",
                height: "calc(100% - 90px)",
                position: "absolute",
                top: "50px",
                right: "5px"
            }}>

            </div>
            <InputArea
                cols={28}
                rows={1}
                size={15}
                placeholder="write a comment..."
            />
        </div>
    )
}

const AdvancedOptionButtons: React.FC<{
    color: string,
    element: JSX.Element
}> = ({ color, element }) => {
    return (
        <motion.button
            whileTap={{
                scale: 0.9
            }}
            style={{
                display: "flex",
                backgroundColor: color,
                borderRadius: "5px",
                width: "90px",
                height: "25px",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: "0",
                outline: "none",
                cursor: "pointer"
            }}
        >
            {element}
        </motion.button>
    )
}

const AdvancedOptionsSection: React.FC = () => {
    return (
        <div style={{
            display: "flex",
            width: "calc(100% -  20px)",
            justifyContent: "space-evenly"
        }}>
            <AdvancedOptionButtons color="#242429" element={
                <>
                    <span className="material-icons"
                        style={{
                            color: "grey",
                            fontSize: "18px"
                        }}
                    >
                        cast_connected
                    </span>
                    <h4 style={{
                        fontFamily: "Roboto Condensed",
                        fontSize: "18px",
                        color: "silver",
                        fontWeight: "lighter",
                        marginLeft: "5px"
                    }}>
                        cast
                    </h4>
                </>
            } />
            <AdvancedOptionButtons color="#242429" element={
                <>
                    <span className="material-icons"
                        style={{
                            color: "grey",
                            fontSize: "18px"
                        }}
                    >
                        ios_share
                    </span>
                    <h4 style={{
                        fontFamily: "Roboto Condensed",
                        fontSize: "18px",
                        color: "silver",
                        fontWeight: "lighter",
                        marginLeft: "5px"
                    }}>
                        share
                    </h4>
                </>
            } />
            <AdvancedOptionButtons color="#c4302b" element={
                <>
                    <i className="fa fa-youtube-play" style={{ color: "silver", fontSize: "20px" }}></i>
                    <h4 style={{
                        fontFamily: "Roboto Condensed",
                        fontSize: "18px",
                        color: "silver",
                        fontWeight: "lighter",
                        marginLeft: "5px"
                    }}>
                        open
                    </h4>
                </>
            } />
        </div>
    )
}

const displayVariants = {
    visible: {
        scale: 1,
        opacity: 1
    },
    hidden: {
        scale: 0,
        opacity: 0
    }
}

export const ContentPreviewOptions: React.FC<{ display: boolean, reference: React.MutableRefObject<any> }> = ({ display, reference }) => {
    const [showPreview, setShowPreview] = useState<boolean>(false)
    const [renderCount, setRenderCount] = useState<number>(0)
    useEffect(() => {
        if (!display) {
            setTimeout(() => setShowPreview(false), 400)
        } else setShowPreview(true)
    }, [display])
    useEffect(() => {
        if (renderCount < 2) setRenderCount(prev => (prev + 1))
    })
    closeOnOutwardClick((value: boolean) => {
        contentPreview.emit({ show: value })
    }, [reference])
    return (
        <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            display: showPreview ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            // backgroundColor: "red"
        }}>
            {renderCount > 0 ?
                <motion.div
                    initial={display ? "hidden" : "visible"}
                    animate={display ? "visible" : "hidden"}
                    transition={{
                        type: "spring",
                        damping: 10
                    }}
                    variants={displayVariants}
                    style={{
                        width: "700px",
                        height: "500px",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        position: "relative",
                        backgroundColor: "#18181B"
                    }}
                    ref={reference}
                >
                    <div style={{
                        width: "450px",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <iframe
                            src="https://www.youtube.com/embed/KdtPNRzuKrk"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen={true}
                            width="400px"
                            height="225px"
                            style={{
                                marginTop: "20px"
                            }}
                        >

                        </iframe>
                        <h4 style={{
                            fontFamily: "Whitney",
                            fontSize: "15px",
                            color: "grey",
                            width: "400px"
                        }}>
                            Social Networking building face mash.com, Mark Zuckerburg autobiography
                    </h4>
                        <AdvancedOptionsSection />
                    </div>
                    <ChatSection />
                </motion.div> : ""
            }
        </div>
    )
}