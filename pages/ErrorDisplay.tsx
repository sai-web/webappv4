import React, { useState, useEffect } from 'react'
import { Error } from '../core/controllers/auth/events'
import { useEvent } from '@pulsejs/react'

import { motion } from 'framer-motion'

const ErrorDisplayVariants = {
    visible: { y: 5 },
    hidden: { y: -50 }
}

export function ErrorDisplay() {
    const [CustomError, setError] = useState<{ type: string, message: string }>({ type: "", message: "" })
    const [display, setDisplay] = useState<boolean>(false)
    const [renderError, setRenderError] = useState<number>(0)
    useEvent(Error, ({ type, message }) => {
        setError({
            type,
            message
        })
        setDisplay(true)
    })
    useEffect(() => {
        if (display) setTimeout(() => setDisplay(false), 5000)
    }, [display])
    useEffect(() => {
        setRenderError(render => (render + 1))
    }, [])
    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center"
        }}>
            <motion.div
                initial={display ? "hidden" : renderError > 0 ? "visible" : "hidden"}
                animate={display ? "visible" : "hidden"}
                style={{
                    width: "80%",
                    height: "30px",
                    backgroundColor: "#ff0033",
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    zIndex: 2
                }}
                variants={ErrorDisplayVariants}
            >
                <h4 style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                    color: "whitesmoke"
                }}>
                    {CustomError.type}
                </h4>
                <h4 style={{
                    fontFamily: "Roboto Condensed",
                    fontSize: "12px",
                    color: "white",
                    width: "80%"
                }}>
                    {CustomError.message}
                </h4>
            </motion.div>
        </div>
    )
}