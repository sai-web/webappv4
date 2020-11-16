import React from 'react'

import Nav from '../../components/nav/mainNav'
import Menu from '../../components/nav/topNav'

function ViberHome() {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "#0E0E10",
            // filter: "invert(100%)"
        }}>
            <Nav />
            <Menu />
        </div>
    )
}

export default ViberHome