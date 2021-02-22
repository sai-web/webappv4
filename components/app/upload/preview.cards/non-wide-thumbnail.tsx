import React from 'react'
import { motion } from 'framer-motion'

interface NonWideThumbnailProps {
    data: {
        color: string,
        url: string,
        thumbnail: string,
        logo: string
    }
}

export const NonWideThumbnail: React.FC<NonWideThumbnailProps> = ({ data }) => {
    return (
        <motion.div
            whileTap={{ scale: 0.9 }}
            style={{
                display: "flex",
                alignItems: "center",
                // backgroundColor: "black",
                height: "140px",
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
            <a href={data.url} target="_blank"
                style={{
                    height: "100%",
                    width: "250px",
                    backgroundColor: "black",
                    display: "flex"
                }}
            >
                <img src={data.thumbnail}
                    style={{
                        width: "calc(100% - 100px)",
                        marginLeft: "5px",
                        height: "100%",
                        objectFit: "cover"
                    }}
                />
                <div style={{
                    height: "100%",
                    width: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <img src={data.logo} style={{
                        width: "50px",
                        height: "50px",
                        // borderRadius: "25px",
                        objectFit: "cover"
                    }} />
                </div>
            </a>
        </motion.div>
    )
}