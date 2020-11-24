import React from 'react'

export const Filter = () => {
    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px"
        }}>
            <input
                type="text"
                placeholder="Search"
                style={{
                    width: "500px",
                    height: "30px",
                    borderRadius: "5px",
                    borderWidth: "0",
                    paddingLeft: "10px",
                    backgroundColor: "#464649",
                    color: "white",
                    outline: "none"
                }}
            />
            <div style={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h4 style={{
                    fontFamily: "sans-serif",
                    color: "silver",
                    fontSize: "20px",
                    lineHeight: "0"
                }}>
                    Realtime API will come out soon.
                </h4>
                <h4 style={{
                    fontFamily: "sans-serif",
                    color: "grey",
                    fontSize: "15px",
                    lineHeight: "0"
                }}>
                    This feature will be available then.
                </h4>
            </div>
        </div>
    )
}