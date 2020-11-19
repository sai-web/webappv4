import React from 'react'
import { motion } from 'framer-motion'

interface arrowProps {
    name: string
    positioning: object
    callback: () => void
}

const Arrow: React.FC<arrowProps> = ({ name, positioning, callback }) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
                scale: 0.9
            }}
            style={{
                width: "30px",
                height: "30px",
                position: "absolute",
                ...positioning,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "grey",
                borderRadius: "50%",
                cursor: "pointer"
            }}
        >
            <span
                className="material-icons"
                style={{
                    color: "whitesmoke"
                }}
                onClick={callback}//prop
            >
                {name}
            </span>
        </motion.div>
    )
}

export default Arrow