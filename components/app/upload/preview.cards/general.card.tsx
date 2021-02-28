import React from 'react'
import { motion } from 'framer-motion'

interface GeneralThumbnailProps {
    data: {
        color: string,
        url: string,
        thumbnail: string
    }
}

export const GeneralCard: React.FC<GeneralThumbnailProps> = ({ data }) => {
    return (
        <a href={data.url} target="_blank">
            <motion.div
                whileTap={{ scale: 0.9 }}
                style={{
                    display: "flex",
                    alignItems: "center",
                    // backgroundColor: "green",
                    height: "140px",
                    // width: "270px",
                    cursor: "pointer"
                }}
            >
                <div style={{
                    width: "5px",
                    height: "100%",
                    backgroundColor: data.color,
                    marginLeft: "20px"
                }}>

                </div>
                <img src={data.thumbnail}
                    style={{
                        width: "250px",
                        marginLeft: "5px"
                    }}
                />
            </motion.div>
        </a>
    )
}