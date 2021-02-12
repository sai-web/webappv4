import React from 'react'
import { motion } from 'framer-motion'

export const AccountRemovalSettings: React.FC = () => {
    return (
        <div style={{
            width: "calc(100% - 100px)"
        }}>
            <h4 style={{
                fontFamily: "Poppins",
                fontSize: "10px",
                color: "grey"
            }}>
                ACCOUNT REMOVAL
            </h4>
            <h4 style={{
                fontFamily: "Poppins",
                fontSize: "10px",
                color: "silver"
            }}>
                You can temporarily disable your account to prevent notifications
                from being sent, and revive it later to get back on track.
            </h4>
            <div style={{
                display: "flex",
                height: "60px"
            }}>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    style={{
                        width: "120px",
                        height: "30px",
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#4D6FFF",
                        borderWidth: "0",
                        borderRadius: "5px",
                        outline: "none",
                        cursor: "pointer"
                    }}
                >
                    Disable Account
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    style={{
                        width: "120px",
                        height: "30px",
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#4D6FFF",
                        borderWidth: "0",
                        borderRadius: "5px",
                        outline: "none",
                        cursor: "pointer",
                        marginLeft: "10px"
                    }}
                >
                    Delete Account
                </motion.button>
            </div>
        </div>
    )
}