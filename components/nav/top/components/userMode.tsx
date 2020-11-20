import React from 'react'

import { motion } from 'framer-motion'
import { UserModeProps } from './interface'

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