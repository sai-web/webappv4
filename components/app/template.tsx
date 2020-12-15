import React from "react";

import Nav from '../nav/side/mainNav'
import Menu from '../nav/top/topNav'

interface Props {
    PageMode: JSX.Element
    width: string
    children: React.ReactNode
    page: string
}

const template: React.FC<Props> = function ({ PageMode, width, children, page }) {
    return (
        <div className="main-content-div" style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "#0E0E10",
            userSelect: "none",
            overflowY: "scroll",
            scrollbarWidth: "none",
            zIndex: -2
            // filter: "invert(100%)"
        }}>
            <div style={{
                width: "calc(100% - 200px)",
                height: "calc(100% - 40px)",
                position: "absolute",
                top: "40px",
                right: "0"
            }}>
                {children}
            </div>
            <Nav page={page} />
            <Menu pageModes={PageMode} width={width} page={page} />
        </div>
    )
}

export default template