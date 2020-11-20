import React from 'react'

import { AppManager } from './appManager'
import { UserManager } from './userManager'

interface Props {
    pageModes: JSX.Element
    width: string
    page: string
}

function extendedMenu({ pageModes, width, page }: Props) {
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
            <AppManager page={page} />
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
            <UserManager />
        </nav>
    )
}

export default extendedMenu