import React from 'react'

const ContentFilterWord: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div
            style={{
                height: "26px",
                backgroundColor: "#242429",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                padding: "0 5px",
                borderRadius: "13px",
                cursor: "pointer"
            }}
        >
            <h4 style={{
                lineHeight: "0",
                fontFamily: "sans-serif",
                color: "silver",
                fontWeight: "lighter",
                fontSize: "13px"
            }}>{name}</h4>
        </div>
    )
}

export const ContentFilter: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
    return (
        <div style={{
            width: "calc(100% - 40px)",
            height: "40px",
            backgroundColor: "#18181B",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            position: "sticky",
            top: scrolled ? "100px" : "40px"
        }}>
            <div style={{
                width: "calc(100% - 260px)",
                overflowX: "scroll",
                display: "flex",
                alignItems: "center"
            }} className="main-content-div">
                <ContentFilterWord name="twitch" />
                <ContentFilterWord name="youtube" />
                <ContentFilterWord name="music" />
                <ContentFilterWord name="vlogs" />
                <ContentFilterWord name="commentary" />
            </div>
            <input
                type="text"
                placeholder="filter content"
                style={{
                    width: "250px",
                    height: "20px",
                    marginRight: "10px",
                    backgroundColor: "#242429",
                    borderWidth: "0",
                    borderRadius: "5px",
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    color: "grey",
                    paddingLeft: "10px"
                }}
            />
        </div>
    )
}