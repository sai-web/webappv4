import React from 'react'

export function Overlay() {
    return (
        <div style={{
            width: "100%",
            height: "240px",
            background: "linear-gradient(to right,#373B44,#4286f4)",
            position: "relative"
        }}>
            <img
                src="/creators-avatars.png"
                alt="creator-avatar"
                style={{
                    width: "350px",
                    position: "absolute",
                    top: "20px",
                    right: "60px"
                }}
            />
            <div style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                background: "linear-gradient(to left, rgba(14,14,16,0.6), rgba(14,14,16,1))"
            }}>
                <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "40px", lineHeight: "0", marginLeft: "50px", position: "absolute" }}>Creators</h4>
            </div>
        </div>
    )
}