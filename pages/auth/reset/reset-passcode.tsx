import React, { useState, useRef, useEffect } from 'react'
import { createInput, closeOnOutwardClick } from '../../../utils/auth'
import { SuccessfullResetRequestSent } from '../../../components/auth/successfulPasswordReset'

import { core } from '../../../core'
import { Error } from '../../../core/controllers/auth/events'

import { motion } from 'framer-motion'
import Router from 'next/router'


export default function ResetPasscode() {
    const [selectedPassword, setSelectPassword] = useState<boolean>(false)
    const [selectedConfirmPassword, setSelectConfirmPassword] = useState<boolean>(false)
    const [successfullRequest, setRequestState] = useState<boolean>(false)

    const PasswordRef = useRef<any>()
    const ConfirmPasswordRef = useRef<any>()

    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [filled, setFilled] = useState<boolean>(false)

    closeOnOutwardClick(PasswordRef, setSelectPassword)
    closeOnOutwardClick(ConfirmPasswordRef, setSelectConfirmPassword)

    useEffect(() => {
        if (password.length > 0 && confirmPassword.length > 0) setFilled(true)
        else setFilled(false)
    }, [password, confirmPassword])

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
                        height: "350px",
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
                            Reset Password
                        </h2>
                        <h4 style={{
                            fontFamily: "Roboto Condensed",
                            color: "grey",
                            fontSize: "15px",
                            fontWeight: "lighter",
                            width: "80%"
                        }}>
                            upon request validation, we will reset your password. Make sure that your new password is within the range of 10 to 30 characters.
                        </h4>
                        {createInput('Password', PasswordRef, selectedPassword, setSelectPassword, setPassword)}
                        {createInput('Confirm Password', ConfirmPasswordRef, selectedConfirmPassword, setSelectConfirmPassword, setConfirmPassword)}
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
                                    if (password === confirmPassword) core.auth.resetPasscode(password, Router.query.token as string)
                                    else Error.emit({ type: "Unmatched Fields", message: "your password and confirmed password dont match. Re-check them and try again." })
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