import React from 'react'
import { motion } from 'framer-motion'

import Link from 'next/link'

interface filterProps {
    name: string
}

export const Filters: React.FC<filterProps> = ({ name }) => {
    return (
        <Link href={`/app/recommended/${name}`}>
            <motion.div
                whileTap={{ scale: 0.9 }}
                style={{
                    height: "20px",
                    backgroundColor: "#373737",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10px",
                    padding: "0 5px",
                    borderRadius: "10px",
                    cursor: "pointer"
                }}
            >
                <h4 style={{
                    lineHeight: "0",
                    fontFamily: "sans-serif",
                    color: "silver",
                    fontWeight: "lighter",
                    fontSize: "10px"
                }}>{name}</h4>
            </motion.div>
        </Link>
    )
}