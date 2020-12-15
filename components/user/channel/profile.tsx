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

export const ChannelPreview: React.FC = () => {
    return (
        <div style={{
            width: "300px",
            height: "400px",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "sticky",
            top: "40px"
        }}>
            <div style={{ position: "relative", bottom: "100px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <ProfilePhoto />
                <h4 style={{ fontFamily: "Poppins", color: "silver", fontSize: "20px", lineHeight: "0" }}>{creators[12].name}</h4>
                <h4 style={{ fontFamily: "Poppins", color: "grey", fontSize: "15px", lineHeight: "0", position: "relative", bottom: "15px" }}>{creators[12].domain}</h4>
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
            </div>
        </div>
    )
}