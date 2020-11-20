import React from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { MainModeProps } from './interface'
import { ContentClassificationCss } from '../../../../utils/app/topNav'

export const MainModes: React.FC<MainModeProps> = ({ name, url, page }) => {
    return (
        <Link href={url}>
            <motion.h4
                className="main-mode-items"
                style={{ ...ContentClassificationCss, color: page === name ? "#0071ff" : undefined }}
                whileTap={{ scale: 0.9 }}
            >
                {name}
            </motion.h4>
        </Link>
    )
}