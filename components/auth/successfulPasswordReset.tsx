import React from 'react'
import Router from 'next/router'

export const SuccessfullResetRequestSent: React.FC<{ title: string, message: string }> = ({ title, message }) => {
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
                {title}
            </h2>
            <h4 style={{
                fontFamily: "Roboto Condensed",
                color: "grey",
                fontSize: "15px",
                fontWeight: "lighter",
                width: "80%"
            }}>
                {message}
            </h4>
        </div>
    )
}