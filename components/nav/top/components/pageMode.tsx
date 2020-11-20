import React from 'react'

import { motion } from 'framer-motion'
import { PageModeProps } from './interface'
import { ChannelClassificationCss } from '../../../../utils/app/topNav'

export const PageModes: React.FC<PageModeProps> = ({ name, logo, page }) => {
    return (
        <motion.div
            className="page-mode-items"
            whileTap={{ scale: 0.9 }}
            style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                color: name === page ? "grey" : undefined
            }}
        >
            {logo}
            <h4 style={ChannelClassificationCss}>
                {name}
            </h4>
        </motion.div>
    )
}