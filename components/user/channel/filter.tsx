import React from 'react'
import { motion } from 'framer-motion'

const ContentFilterWord: React.FC<{ name: string }> = ({ name }) => {
    return (
        <motion.div
            whileTap={{
                scale: 0.9
            }}
            style={{
                height: "26px",
                backgroundColor: "#242429",
                display: "flex",
                alignItems: "center",
                marginLeft: "5px",
                marginRight: "5px",
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
        </motion.div>
    )
}

export const ContentFilter: React.FC = () => {
    return (
        <div style={{
            width: "calc(100% - 40px)",
            height: "40px",
            backgroundColor: "#18181B",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly"
        }}>
            <div style={{
                width: "calc(100% - 330px)",
                overflowX: "scroll",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                backgroundColor: "#0E0E10",
                height: "33px",
                borderRadius: "5px"
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