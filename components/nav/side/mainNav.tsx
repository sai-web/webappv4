import React from 'react'
import { NavigationPages } from './components'

import { motion } from 'framer-motion'

function navigationMenu() {
    return (
        <nav style={{
            width: "200px",
            height: "calc(100% - 40px)",
            position: "absolute",
            top: "40px",
            left: "0",
            backgroundColor: "#1F1F23",
            display: "flex",
            flexDirection: "column",
            userSelect: "none"
        }}>
            <div style={{
                width: "100%",
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly"
            }}>
                <NavigationPages name="Trending" logo="local_fire_department" />
                <NavigationPages name="Favourite" logo="favorite" />
                <NavigationPages name="Subscription Manager" logo="drag_indicator" />
            </div>
            <div style={{
                width: "calc(100% - 10px)",
                height: "35px",
                backgroundColor: "#242429",
                marginLeft: "5px",
                marginTop: "10px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
                <motion.i className="fa fa-user subscribed-channel-filters" style={{ fontSize: "15px", cursor: "pointer" }} whileTap={{ scale: 0.9 }}></motion.i>
                <motion.span className="material-icons subscribed-channel-filters" style={{ fontSize: "17px", cursor: "pointer" }} whileTap={{ scale: 0.9 }}>
                    favorite_border
                </motion.span>
                <motion.span className="material-icons subscribed-channel-filters" style={{ fontSize: "17px", cursor: "pointer" }} whileTap={{ scale: 0.9 }}>
                    notifications_off
                </motion.span>
            </div>
        </nav>
    )
}

export default navigationMenu