import React from 'react'

const authLog: React.FC = () => {
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
            backgroundImage: `url('https://notify.me/science-dark.jpg')`,
            // filter: "invert(100%)"
        }}>
            <div style={{
                width: "350px",
                height: "200px",
                backgroundColor: "#1B1E20",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <h2 style={{
                    fontFamily: "Roboto Condensed",
                    color: "whitesmoke",
                    lineHeight: "0"
                }}>
                    Email Verification
                </h2>
                <h4 style={{
                    fontFamily: "Roboto Condensed",
                    color: "grey",
                    fontSize: "15px",
                    fontWeight: "lighter",
                    lineHeight: "1",
                    textAlign: "center"
                }}>
                    Verify your email address to proceed with the account creation
                </h4>
            </div>
        </div>
    )
}

export default authLog