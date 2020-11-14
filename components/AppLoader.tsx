import React from 'react'

import { motion } from 'framer-motion'

function loader() {
    return (
        <div style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <motion.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                }}
                style={{
                    backgroundColor: "#1778f2",
                    width: "100px",
                    height: "100px",
                    borderRadius: "20%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <img
                    src="/viber.png"
                    style={{ width: "120px", height: "120px" }}
                />
            </motion.div>
        </div>
    )
}

export default loader