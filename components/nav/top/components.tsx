import React from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { MainModeProps, PageModeProps, UserModeProps } from './interface'
import { ChannelClassificationCss, ContentClassificationCss } from '../../../utils/app/topNav'

export const PageModes: React.FC<PageModeProps> = ({ name, logo, color, pos, setPageModes }) => {
    return (
        <motion.div
            className="page-mode-items"
            whileTap={{ scale: 0.9 }}
            style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                color
            }}
            onClick={() => setPageModes(state => {
                state = state.map((mode, index) => {
                    return pos === index
                })
                return state
            })}
        >
            {logo}
            <h4 style={ChannelClassificationCss}>
                {name}
            </h4>
        </motion.div>
    )
}

export const MainModes: React.FC<MainModeProps> = ({ name, color, url, setMainProps }) => {
    return (
        <Link href={url}>
            <motion.h4
                className="main-mode-items"
                style={{ ...ContentClassificationCss, color }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMainProps([
                    name === "Browse",
                    name === "Live",
                    name === "Esports",
                    name === "Music"
                ])}
            >
                {name}
            </motion.h4>
        </Link>
    )
}

export const UserModes: React.FC<UserModeProps> = ({ name }) => {
    return (
        <motion.span
            className="material-icons user-mode-items"
            style={{
                fontSize: "15px",
                cursor: "pointer"
            }}
            whileTap={{ scale: 0.9 }}
        >
            {name}
        </motion.span>
    )
}