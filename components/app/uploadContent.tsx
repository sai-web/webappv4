import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

import { lanuchMenu, MenuType } from '../../core/utils/Events'

import { closeOnOutwardClick } from '../../utils/auth'

const AnimationVariants = {
    visible: {
        y: 0
    },
    hidden: {
        y: -180
    }
}

export const UploadSection: React.FC<{
    display: boolean,
    reference: React.MutableRefObject<any>
}> = ({
    display,
    reference
}) => {
        const [active, setState] = useState<boolean>(false)
        const [renderCount, setRenderCount] = useState<number>(0)
        const [displayMainDiv, setDisplayMainDiv] = useState<boolean>(display)
        const shareLinkInputRef = useRef<any>(null)
        closeOnOutwardClick(setState, [shareLinkInputRef])
        closeOnOutwardClick((value: boolean) => {
            lanuchMenu.emit({ type: MenuType.ShareLinkComponent, display: value })
        }, [reference])
        useEffect(() => {
            if (renderCount < 2) setRenderCount(prev => (prev + 1))
        })
        useEffect(() => {
            if (!display) setTimeout(() => setDisplayMainDiv(false), 300)
            else setDisplayMainDiv(true)
        }, [display])
        return (
            <div style={{
                position: "absolute",
                top: "50px",
                left: "0",
                width: "100%",
                display: displayMainDiv ? "flex" : "none",
                justifyContent: "center",
                // backgroundColor: "red"
            }}>
                <motion.div
                    initial={display ? "hidden" : renderCount > 0 ? "visible" : "hidden"}
                    animate={display ? "visible" : "hidden"}
                    variants={AnimationVariants}
                    style={{
                        width: "calc(100% - 450px)",
                        height: "130px",
                        backgroundColor: "#1F1F23",
                        borderRadius: "10px",
                        zIndex: 2,
                        transform: "translate(-50%,0)"
                    }}
                    ref={reference}
                >
                    <h4 style={{
                        fontFamily: "Whitney",
                        fontSize: "20px",
                        color: "white",
                        lineHeight: "0",
                        marginLeft: "40px"
                    }}>
                        Share Link
                </h4>
                    <input type="text"
                        style={{
                            width: "calc(100% - 100px)",
                            height: "35px",
                            backgroundColor: "#18181B",
                            position: "relative",
                            left: "50%",
                            transform: "translate(-50%,0)",
                            padding: "0 10px",
                            borderRadius: "5px",
                            color: "grey",
                            border: active ? "1px solid #4D6FFF" : "0px",
                            outline: "none"
                        }}
                        placeholder="paste the URL"
                        onClick={() => setState(true)}
                        ref={shareLinkInputRef}
                    />
                </motion.div>
            </div>
        )
    }