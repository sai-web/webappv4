import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { SubscribeButton } from './accessories'
import { creators } from '../../home/fakeData/sideNav'

var DisplayVariants = {
    hidden: { y: -50 },
    visible: { y: 0 }
}

export const ScrolledChannelPreview: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
    const [firstDisplay, setFirstDisplay] = useState<number>(0)
    useEffect(() => {
        setFirstDisplay(prev => (prev + 1))
    }, [])
    return (
        <motion.div
            initial={scrolled ? "hidden" : firstDisplay > 0 ? "visible" : "hidden"}
            animate={scrolled ? "visible" : "hidden"}
            transition={{
                duration: 0.2,
                type: "tween"
            }}
            variants={DisplayVariants}
            style={{
                width: "calc(100% - 200px)",
                height: "50px",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#4D6FFF",
                position: "fixed",
                top: "40px"
            }}
        >
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100% ",
                height: "50px",
                backgroundColor: "rgba(0,0,0,0.7)"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10px"
                }}>
                    <img src={creators[2].photo}
                        style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            objectFit: "cover"
                        }}
                    />
                    <h4 style={{ fontFamily: "Poppins", color: "silver", fontSize: "20px", lineHeight: "0", marginLeft: "10px" }}>{creators[2].name}</h4>
                    <h4 style={{ fontFamily: "Poppins", color: "grey", fontSize: "15px", lineHeight: "0" }}>{creators[2].domain}</h4>
                </div>
                <div style={{
                    marginRight: "30px",
                    marginTop: "20px"
                }}>
                    <SubscribeButton overlay />
                </div>
            </div>
        </motion.div>
    )
}