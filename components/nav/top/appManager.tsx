import React from 'react'
import { motion } from 'framer-motion'

import { MainModes } from './components/mainMode'

import Link from 'next/link'

export const AppManager: React.FC<{ page: string }> = ({ page }) => {
    return (
        <div style={{
            display: "flex",
            height: "inherit",
            width: "250px",
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
            <MainModes name="Browse" url="/app/browse/categories" page={page} />
            <MainModes name="Esports" url="/app/esports/live" page={page} />
            <MainModes name="Music" url="/app/music/tracks" page={page} />
        </div>
    )
}