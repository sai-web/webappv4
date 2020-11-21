import React from 'react'
import { motion } from 'framer-motion'
import { albums } from '../../fakeData/music'

interface Props {
    albumn: {
        thumbnail: string;
        link: string;
        title: string;
        creator: string;
    }
}

export const Albumn: React.FC<Props> = ({ albumn }) => {
    return (
        <a href={albumn.link} target="_blank" style={{ textDecoration: "none" }}>
            <motion.div
                className="music-albumns"
                whileTap={{ scale: 0.9 }}
                style={{
                    width: "220px",
                    height: "300px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    margin: "5px 10px",
                    cursor: "pointer"
                }}
            >
                <img
                    src={albumn.thumbnail}
                    alt="spotify-albumn"
                    style={{
                        width: "180px",
                        boxShadow: "0 8px 24px rgba(0,0,0,.5)",
                        borderRadius: "5px"
                    }}
                />
                <h4 style={{ fontFamily: "sans-serif", fontSize: "15px", color: "white" }}>{albumn.title}</h4>
            </motion.div>
        </a>
    )
}