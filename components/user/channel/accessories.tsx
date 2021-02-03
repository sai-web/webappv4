import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { creators } from '../../home/fakeData/sideNav'
import { ViewerShipType } from '../../subscription-manager/viewer/categorizing'

export const ProfilePhoto: React.FC = () => {
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

export const ChannelSubs: React.FC = () => {
    return (
        <div style={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            <ViewerShipType value={24} type="SUBS" />
            <ViewerShipType value={10} type="PATRONS" />
            <ViewerShipType value={4} type="STREAKS" />
        </div>
    )
}

export const SubscribeButton: React.FC<{ overlay?: boolean }> = ({ overlay = false }) => {
    const [notification, setNotificationStatus] = useState(false)
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "30px"
        }}>
            <motion.button
                whileTap={{
                    scale: "0.9"
                }}
                style={{
                    width: "100px",
                    height: "25px",
                    fontSize: "13px",
                    fontFamily: "Poppins",
                    color: "silver",
                    backgroundColor: overlay ? "rgba(0,0,0,0.5)" : "#242429",
                    borderRadius: "10px",
                    borderWidth: "0",
                    outline: "none",
                    marginBottom: "20px",
                    cursor: "pointer"
                }}
            >
                subscribe
            </motion.button>
            <span
                className="material-icons"
                style={{
                    color: "grey",
                    fontSize: "15px",
                    marginBottom: "20px",
                    marginLeft: "10px",
                    cursor: "pointer"
                }}
                onClick={() => setNotificationStatus(prev => (!prev))}
            >
                {notification ? "notifications_active" : "notifications_off"}
            </span>
        </div>
    )
}