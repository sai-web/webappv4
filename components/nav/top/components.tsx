import React from 'react'
import { motion } from 'framer-motion'
import { MainModeProps, PageModeProps, UserModeProps } from './interface'
import { ChannelClassificationCss, ContentClassificationCss } from '../../../utils/app/topNav'

export const PageModes: React.FC<PageModeProps> = ({ name, logo }) => {
    return (
        <motion.div className="page-mode-items" whileTap={{ scale: 0.9 }} style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer"
        }}>
            {logo}
            <h4 style={ChannelClassificationCss}>
                {name}
            </h4>
        </motion.div>
    )
}

export const MainModes: React.FC<MainModeProps> = ({ name, color, setMainProps }) => {
    return (
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