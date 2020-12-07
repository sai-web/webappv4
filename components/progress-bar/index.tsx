import React from 'react'
import { motion } from 'framer-motion'

interface AnalyticsProps {
    percentage: number
}

export const Analytics: React.FC<AnalyticsProps> = ({ percentage }) => {
    const radius = 70
    const circumference = 2 * Math.PI * radius
    const length = percentage * circumference / 100
    return (
        <div className="analytics-circle">
            <svg>
                <circle cx="70" cy="70" r="70" stroke="#191919" strokeDasharray="999, 999"></circle>
                <motion.circle
                    cx="70"
                    cy="70"
                    r="70"
                    stroke="#4D6FFF"
                    initial={{
                        strokeDasharray: `0 999`
                    }}
                    animate={{
                        strokeDasharray: `${length} 999`
                    }}
                    transition={{
                        duration: 1
                    }}
                ></motion.circle>
            </svg>
            <div className="analytics-value">
                <h2 style={{
                    fontFamily: "Poppins",
                    color: "#4D6FFF",
                    fontSize: "30px"
                }}>
                    {percentage}
                </h2>
            </div>
        </div>
    )
}