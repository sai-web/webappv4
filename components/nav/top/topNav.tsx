import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { MainModes, UserModes } from './components'

interface Props {
    pageModes: JSX.Element
    width: string
}

function extendedMenu({ pageModes, width }: Props) {
    const [MainProp, setMainProp] = useState<Array<boolean>>([false, false, false, false])

    return (
        <nav style={{
            width: "100%",
            height: "40px",
            position: "fixed",
            top: "0",
            left: "0",
            backgroundColor: "#18181B",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            userSelect: "none",
            zIndex: 1
        }}>
            <div style={{
                display: "flex",
                height: "inherit",
                width: "300px",
                margin: "0",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Link href='/app'>
                    <motion.img
                        src="/viber.png"
                        alt="app-logo"
                        whileHover={{ filter: "invert(50%)" }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                            width: "45px",
                            height: "inherit",
                            objectFit: "cover",
                            cursor: "pointer"
                        }}
                    />
                </Link>
                <MainModes name="Browse" color={MainProp[0] ? "#0071ff" : undefined} url="/app/browse" setMainProps={setMainProp} />
                <MainModes name="Live" color={MainProp[1] ? "#0071ff" : undefined} url="/app/live" setMainProps={setMainProp} />
                <MainModes name="Esports" color={MainProp[2] ? "#0071ff" : undefined} url="/app/esports" setMainProps={setMainProp} />
                <MainModes name="Music" color={MainProp[3] ? "#0071ff" : undefined} url="/app/music" setMainProps={setMainProp} />
            </div>
            <div style={{
                display: "flex",
                height: "inherit",
                width,
                margin: "0",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                {pageModes}
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