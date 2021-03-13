import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { confirmNotice, contentPreview } from '../../core/utils/Events'
import { useEvent, usePulse } from '@pulsejs/react'

import { core } from '../../core'

import { closeOnOutwardClick } from '../../utils/auth/index'
import { animateTemplate } from '../../core/utils/Events'

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

type PreviewDetails = {
    show: boolean,
    message?: {
        header: string,
        body: string
    },
    do?: () => null
}

interface ConfirmNoticeProps {
    display: boolean
    details: PreviewDetails
    reference: React.MutableRefObject<any>
}

export const ConfirmNotice: React.FC<ConfirmNoticeProps> = ({
    display,
    details,
    reference,
}) => {
    var initialPreviewDetails: PreviewDetails = {
        show: false,
        message: {
            header: "",
            body: ""
        },
        do: () => null
    }
    const [previewDetails, setPreviewDetails] = useState<PreviewDetails>(initialPreviewDetails)
    const [renderCount, setRenderCount] = useState<number>(0)
    useEffect(() => {
        if (!display) {
            setTimeout(() => setPreviewDetails({
                show: false
            }), 400)
        } else {
            setPreviewDetails(() => {
                let newState = {
                    show: details.show,
                    message: details.message,
                    do: details.do
                }
                return newState
            })
        }
    }, [display])
    useEffect(() => {
        if (renderCount < 2) setRenderCount(prev => (prev + 1))
    })
    // useEffect(() => {
    //     console.log(previewDetails)
    // }, [previewDetails])
    closeOnOutwardClick((value: boolean) => {
        confirmNotice.emit({
            show: value,
            do: () => null,
            message: {
                body: "",
                header: ""
            }
        })
    }, [reference])
    return (
        <div style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            display: previewDetails.show ? "flex" : "none",
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
                        duration: 0.5,
                        bounce: 0.35
                    }}
                    variants={displayVariants}
                    style={{
                        width: "230px",
                        height: "170px",
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
                        width: "100%",
                        height: "120px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                        // backgroundColor: "blue"
                    }}>
                        <h4 style={{
                            fontFamily: "Poppins",
                            color: "whitesmoke",
                            fontSize: "15px",
                            lineHeight: "0",
                            paddingTop: "20px"
                        }}>
                            {details.message?.header}
                        </h4>
                        <h4 style={{
                            fontFamily: "Poppins",
                            color: "silver",
                            fontSize: "10px",
                            width: "70%",
                            textAlign: "center",
                            position: "relative",
                            bottom: "20px"
                        }}>
                            {details.message?.body}
                        </h4>
                    </div>
                    <div style={{
                        width: "100%",
                        height: "50px",
                        backgroundColor: "#1F1F23",
                        display: "flex"
                    }}>
                        <motion.div
                            style={{
                                height: "100%",
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                borderRight: "1px solid #18181B"
                            }}
                            whileTap={{
                                scale: "0.9"
                            }}
                            onClick={previewDetails.do}
                        >
                            <h4 style={{
                                color: "#4D6FFF",
                                fontSize: "15px",
                                fontFamily: "Poppins",
                                fontWeight: "lighter"
                            }}>
                                Confirm
                            </h4>
                        </motion.div>
                        <motion.div
                            style={{
                                height: "100%",
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                borderLeft: "1px solid #18181B"
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                            onClick={() => {
                                confirmNotice.emit({
                                    show: false,
                                    do: () => null,
                                    message: {
                                        header: "",
                                        body: ""
                                    }
                                })
                                animateTemplate.emit({ display: false })
                            }}
                        >
                            <h4 style={{
                                color: "silver",
                                fontSize: "15px",
                                fontFamily: "Poppins",
                                fontWeight: "lighter"
                            }}>
                                Cancel
                            </h4>
                        </motion.div>
                    </div>
                </motion.div> : ""
            }
        </div>
    )
}