import React from 'react'
import { NavigationPages } from './components'

import { Filter } from './creatorFilter'

interface Props {
    page: string
}

const navigationMenu: React.FC<Props> = ({ page }) => {
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
                flexDirection: "column"
            }}
        >
            <div style={{
                width: "100%",
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly"
            }}>
                <NavigationPages
                    name="Channel"
                    logo="person"
                    link="/app/channel/@me"
                    page={page}
                />
                <NavigationPages
                    name="Favourite"
                    logo="favorite"
                    link="/app/fav/favourite"
                    page={page}
                />
                <NavigationPages
                    name="Subscription Manager"
                    logo="drag_indicator"
                    link="/app/subscribed/subscription-manager"
                    page={page}
                />
            </div>
            <Filter />
        </nav>
    )
}

export default navigationMenu