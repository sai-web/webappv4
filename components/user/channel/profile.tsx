import React from 'react'

import { creators } from '../../home/fakeData/sideNav'
import { ChannelSubs, ProfilePhoto, SubscribeButton } from './accessories'

export const ChannelPreview: React.FC = () => {
    return (
        <div style={{
            width: "300px",
            height: "300px",
            // zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <div style={{
                position: "relative",
                bottom: "100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <ProfilePhoto />
                <h4 style={{
                    fontFamily: "Whitney",
                    color: "silver",
                    fontSize: "20px",
                    lineHeight: "0"
                }}>
                    {creators[2].name}
                </h4>
                <h4 style={{
                    fontFamily: "Poppins",
                    color: "grey",
                    fontSize: "15px",
                    lineHeight: "0",
                    position: "relative",
                    bottom: "20px"
                }}>
                    {creators[2].domain}
                </h4>
                <SubscribeButton />
                <div style={{
                    width: "100%",
                    marginLeft: "15px"
                }}>
                    <ChannelSubs />
                </div>
            </div>
        </div>
    )
}