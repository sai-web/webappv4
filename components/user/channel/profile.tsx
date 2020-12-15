import React from 'react'

import { creators } from '../../home/fakeData/sideNav'
import { ViewerShipType } from '../../subscription-manager/viewer/categorizing'

const ProfilePhoto: React.FC = () => {
    return (
        <img src={creators[12].photo}
            style={{
                width: "200px",
                height: "200px",
                borderRadius: "30px",
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
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100% ",
            height: "50px",
            backgroundColor: "#1B1B1B"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px"
            }}>
                <img src={creators[12].photo}
                    style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        objectFit: "cover"
                    }}
                />
                <h4 style={{ fontFamily: "Poppins", color: "silver", fontSize: "20px", lineHeight: "0", marginLeft: "10px" }}>{creators[12].name}</h4>
                <h4 style={{ fontFamily: "Poppins", color: "grey", fontSize: "15px", lineHeight: "0" }}>{creators[12].domain}</h4>
            </div>
            <div style={{ width: "300px" }}>
                <ChannelSubs />
            </div>
        </div>
    )
}

export const ChannelPreview: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
    return (
        <div style={{
            width: scrolled ? "calc(100% - 200px)" : "300px",
            height: scrolled ? "50px" : "400px",
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
                    <h4 style={{ fontFamily: "Poppins", color: "silver", fontSize: "20px", lineHeight: "0" }}>{creators[12].name}</h4>
                    <h4 style={{ fontFamily: "Poppins", color: "grey", fontSize: "15px", lineHeight: "0", position: "relative", bottom: "15px" }}>{creators[12].domain}</h4>
                    <ChannelSubs />
                </div>
            }
        </div>
    )
}