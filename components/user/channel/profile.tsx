import React from 'react'
import { motion } from 'framer-motion'

import { creators } from '../../home/fakeData/sideNav'
import { ViewerShipType } from '../../subscription-manager/viewer/categorizing'

const ProfilePhoto: React.FC = () => {
    return (
        <img src={creators[2].photo}
            style={{
                width: "200px",
                height: "200px",
                borderRadius: "50px",
                objectFit: "cover"
            }}
        />
    )
}

const ChannelSubs: React.FC = () => {
    return (
        <div style={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            <ViewerShipType value={24} type="subscribers" />
            <ViewerShipType value={10} type="patrons" />
            <ViewerShipType value={4} type="streaks" />
        </div>
    )
}

const ScrolledChannelPreview: React.FC = () => {
    return (
        <motion.div
            initial={{ y: "-40px" }}
            animate={{ y: "0" }}
            transition={{
                duration: 0.2,
                type: "tween"
            }}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100% ",
                height: "50px",
                backgroundColor: "#1B1B1B"
            }}
        >
            <div style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px"
            }}>
                <img src={creators[2].photo}
                    style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        objectFit: "cover"
                    }}
                />
                <h4 style={{ fontFamily: "Poppins", color: "silver", fontSize: "20px", lineHeight: "0", marginLeft: "10px" }}>{creators[2].name}</h4>
                <h4 style={{ fontFamily: "Poppins", color: "grey", fontSize: "15px", lineHeight: "0" }}>{creators[2].domain}</h4>
            </div>
            <div style={{ width: "350px", display: "flex", alignItems: "center" }}>
                <ChannelSubs />
                <CheerButton />
            </div>
        </motion.div>
    )
}

const CheerButton: React.FC = () => {
    return (
        <button style={{
            width: "100px",
            height: "40px",
            backgroundColor: "#4D6FFF",
            borderRadius: "5px",
            borderWidth: "0",
            fontFamily: "Poppins",
            color: "white",
            fontSize: "15px",
            outline: "none",
            margin: "10px"
        }}>
            Cheer
        </button>
    )
}

export const ChannelPreview: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
    return (
        <div style={{
            width: scrolled ? "calc(100% - 200px)" : "300px",
            height: scrolled ? "50px" : "300px",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: scrolled ? "fixed" : "sticky",
            top: scrolled ? "40px" : "-100px"
        }}>
            {scrolled ?
                <ScrolledChannelPreview /> :
                <div style={{ position: "relative", bottom: "100px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <ProfilePhoto />
                    <h4 style={{ fontFamily: "Poppins", color: "silver", fontSize: "20px", lineHeight: "0" }}>{creators[2].name}</h4>
                    <h4 style={{ fontFamily: "Poppins", color: "grey", fontSize: "15px", lineHeight: "0", position: "relative", bottom: "15px" }}>{creators[2].domain}</h4>
                    <ChannelSubs />
                    <CheerButton />
                </div>
            }
        </div>
    )
}