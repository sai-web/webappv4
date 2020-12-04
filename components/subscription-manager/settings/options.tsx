import React from 'react'
import { motion } from 'framer-motion'

export const Options: React.FC = () => {
    return (
        <div style={{
            width: "calc(100% - 10px)",
            height: "35px",
            backgroundColor: "#242429",
            margin: "10px 5px",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly"
        }}>
            <motion.span
                className="material-icons subscribed-channel-filters"
                style={{ fontSize: "17px", cursor: "pointer", color: false ? "grey" : undefined }}
                whileTap={{ scale: 0.9 }}
            >
                library_add
            </motion.span>
            <motion.span
                className="material-icons subscribed-channel-filters"
                style={{ fontSize: "17px", cursor: "pointer", color: false ? "grey" : undefined }}
                whileTap={{ scale: 0.9 }}
            >
                filter_none
            </motion.span>
            <motion.span
                className="material-icons subscribed-channel-filters"
                style={{ fontSize: "17px", cursor: "pointer", color: false ? "grey" : undefined }}
                whileTap={{ scale: 0.9 }}
            >
                share
            </motion.span>
        </div>
    )
}