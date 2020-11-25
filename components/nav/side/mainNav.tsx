import React from 'react'
import { NavigationPages } from './components'

import { Filter } from './creatorFilter'

function navigationMenu() {
    return (
        <nav
            style={{
                width: "200px",
                height: "calc(100% - 40px)",
                position: "fixed",
                top: "40px",
                left: "0",
                backgroundColor: "#1F1F23",
                display: "flex",
                flexDirection: "column",
                userSelect: "none"
            }}
        >
            <div style={{
                width: "100%",
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly"
            }}>
                <NavigationPages name="Channel" logo="person" link="/app/channel/@me" />
                <NavigationPages name="Favourite" logo="favorite" link="/app/fav/favourite" />
                <NavigationPages name="Subscription Manager" logo="drag_indicator" link="/app/subscribed/subscription-manager" />
            </div>
            <Filter />
        </nav>
    )
}

export default navigationMenu