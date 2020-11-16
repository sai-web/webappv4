import React, { useState } from 'react'

import { MainModes, PageModes, UserModes } from './components'

function extendedMenu() {
    const [MainProp, setMainProp] = useState<Array<boolean>>([false, false, false, false])

    return (
        <nav style={{
            width: "100%",
            height: "40px",
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "#18181B",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            userSelect: "none"
        }}>
            <div style={{
                display: "flex",
                height: "inherit",
                width: "300px",
                margin: "0",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <img
                    src="/viber.png"
                    alt="app-logo"
                    style={{
                        width: "45px",
                        height: "inherit",
                        objectFit: "cover"
                    }}
                />
                <MainModes name="Browse" color={MainProp[0] ? "#0071ff" : undefined} setMainProps={setMainProp} />
                <MainModes name="Live" color={MainProp[1] ? "#0071ff" : undefined} setMainProps={setMainProp} />
                <MainModes name="Esports" color={MainProp[2] ? "#0071ff" : undefined} setMainProps={setMainProp} />
                <MainModes name="Music" color={MainProp[3] ? "#0071ff" : undefined} setMainProps={setMainProp} />
            </div>
            <div style={{
                display: "flex",
                height: "inherit",
                width: "250px",
                margin: "0",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <PageModes name="Channel" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
                <PageModes name="Community" logo={<i className="fa fa-users" style={{ fontSize: "10px" }}></i>} />
                <PageModes name="Content" logo={<span className="material-icons" style={{ fontSize: "12px" }}>bookmark</span>} />
            </div>
            <div style={{
                display: "flex",
                height: "inherit",
                width: "200px",
                margin: "0",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <UserModes name="all_inbox" />
                <UserModes name="notifications" />
                <UserModes name="add_circle_outline" />
                <img
                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    alt="profile photo"
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginRight: "10px"
                    }}
                />
            </div>
        </nav>
    )
}

export default extendedMenu