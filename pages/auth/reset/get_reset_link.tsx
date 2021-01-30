import React, { useState, useRef, useEffect } from 'react'
import { createInput, closeOnOutwardClick } from '../../../utils/auth'
import { SuccessfullResetRequestSent } from '../../../components/auth/successfulPasswordReset'

import { core } from '../../../core'

import { motion } from 'framer-motion'
import Router from 'next/router'


export default function GetResetLink() {
    const [selectedEmail, setSelectEmail] = useState<boolean>(false)
    const [successfullRequest, setRequestState] = useState<boolean>(false)

    const EmailRef = useRef<any>()

    const [email, setEmail] = useState<string>("")
    const [filled, setFilled] = useState<boolean>(false)

    closeOnOutwardClick(EmailRef, setSelectEmail)

    useEffect(() => {
        if (email.length > 0) setFilled(true)
        else setFilled(false)
    }, [email])

    return (
        <div style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url('https://cdn.statically.io/img/i.pinimg.com/736x/17/06/b6/1706b65720ee6671eaa6bf5db59a4d3a.jpg')`,
            // filter: "invert(100%)"
        }}>
            {
                successfullRequest ?
                    <SuccessfullResetRequestSent /> :
                    <div style={{
                        width: "400px",
                        height: "300px",
                        borderRadius: "10px",
                        backgroundColor: "#1B1E20",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative"
                    }}>
                        <div style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: "#313339",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            left: "10px",
                            top: "10px",
                            cursor: "pointer"
                        }}
                            onClick={() => Router.back()}
                        >
                            <span className="material-icons" style={{ color: "grey" }}>
                                keyboard_arrow_left
                            </span>
                        </div>
                        <h2 style={{
                            fontFamily: "Roboto Condensed",
                            color: "whitesmoke",
                            // lineHeight: "0",
                            margin: "20px 0 0"
                        }}>
                            Get Reset Link
                        </h2>
                        <h4 style={{
                            fontFamily: "Roboto Condensed",
                            color: "grey",
                            fontSize: "15px",
                            fontWeight: "lighter",
                            width: "80%"
                        }}>
                            you will receive an email with the reset link that will redirect you to a page where you can set your custom password.
                        </h4>
                        {createInput('Email', EmailRef, selectedEmail, setSelectEmail, setEmail)}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            style={{
                                width: "calc(100% - 60px)",
                                height: "40px",
                                backgroundColor: "#4B6DFF",
                                fontFamily: "Roboto Condensed",
                                fontSize: "17px",
                                color: "white",
                                borderWidth: "0",
                                borderRadius: "20px",
                                marginTop: "15px",
                                outline: "none",
                                opacity: filled ? "1" : "0.5"
                            }}
                            disabled={filled ? true : false}
                            onClick={() => {
                                if (filled) {
                                    core.auth.sendResetPasscodeLink(email)
                                        .then(emailSent => {
                                            if (emailSent) setRequestState(true)
                                        })
                                }
                            }}
                        >
                            send reset link
                        </motion.button>
                    </div>
            }
        </div>
    )
}