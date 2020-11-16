import React from "react";

import Nav from '../nav/side/mainNav'
import Menu from '../nav/top/topNav'

interface Props {
    children: React.ReactNode
}

const template: React.FC<Props> = function ({ children }) {
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
            {children}
            <Nav />
            <Menu />
        </div>
    )
}

export default template