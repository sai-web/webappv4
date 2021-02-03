import React from 'react'
import { motion } from 'framer-motion'

const ConnectionCards: React.FC<{ name: string, icon: JSX.Element }> = ({ name, icon }) => {
    return (
        <motion.div
            whileTap={{
                scale: 0.9
            }}
            style={{
                height: "26px",
                backgroundColor: "#373737",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                padding: "0 5px",
                borderRadius: "13px",
                cursor: "pointer"
            }}
        >
            {icon}
            <h4 style={{
                lineHeight: "0",
                fontFamily: "sans-serif",
                color: "silver",
                fontWeight: "lighter",
                fontSize: "13px",
                marginLeft: "5px"
            }}>{name}</h4>
        </motion.div>
    )
}

const ChannelConectedAccounts: React.FC = () => {
    return (
        <div style={{
            width: "100%",
            height: "50px",
            display: "flex",
            alignItems: "center",
            overflowX: "scroll"
        }} className="main-content-div">
            <ConnectionCards
                name="twitch"
                icon={<i className="fa fa-twitch" style={{ color: "silver", fontSize: "12px" }}></i>}
            />
            <ConnectionCards
                name="youtube"
                icon={<i className="fa fa-youtube-play" style={{ color: "silver", fontSize: "12px" }}></i>}
            />
            <ConnectionCards
                name="spotify"
                icon={<i className="fa fa-spotify" style={{ color: "silver", fontSize: "12px" }}></i>}
            />
        </div>
    )
}

const ChannelInformation: React.FC = () => {
    return (
        <div style={{
            width: "100%",
            height: "calc(100% - 50px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden"
        }}>
            <h4 style={{
                fontFamily: "sans-serif",
                fontSize: "25px",
                color: "silver",
            }}>
                Programmer, Streamer and a High School Student
            </h4>
            <div style={{
                display: "flex",
                lineHeight: "0",
                position: "relative",
                bottom: "30px"
            }}>
                <h4 style={{ fontFamily: "sans-serif", fontSize: "13px", color: "grey" }}>Averages</h4>
                <h4 style={{ fontFamily: "sans-serif", fontSize: "13px", color: "#4D6FFF", marginLeft: "5px", marginRight: "5px" }}>3</h4>
                <h4 style={{ fontFamily: "sans-serif", fontSize: "13px", color: "grey" }}>posts per week</h4>
            </div>
        </div>
    )
}

export const ChannelDescription: React.FC = () => {
    return (
        <div style={{
            width: "100%",
            height: "150px"
        }}>
            <>
                <ChannelConectedAccounts />
                <ChannelInformation />
            </>
        </div>
    )
}