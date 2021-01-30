import React from 'react'
import Router from 'next/router'

export function SuccessfullResetRequestSent() {
    return (
        <div style={{
            width: "400px",
            height: "200px",
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
                Reset link was sent
            </h2>
            <h4 style={{
                fontFamily: "Roboto Condensed",
                color: "grey",
                fontSize: "15px",
                fontWeight: "lighter",
                width: "80%"
            }}>
                We've sent an email to the mail id that you've provided, after tapping on the link
                you will be redirected to a web page where you can custom set your new password. If you face
                any issues be sure to ask for help on our discord server.
            </h4>
        </div>
    )
}