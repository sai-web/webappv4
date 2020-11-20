import React from 'react'
import { motion } from 'framer-motion'

interface game {
    thumbnail: string;
    name: string;
}

interface Props {
    game: game
}

export const GameCard: React.FC<Props> = ({ game }) => {
    return (
        <motion.div
            initial={{ scale: 0.9 }}
            animate={{
                scale: 1
            }}
            transition={{
                type: 'spring',
                bounce: 0.35
            }}
            whileTap={{ scale: 0.9 }}
            style={{
                width: "230px",
                height: "70px",
                backgroundColor: "#323234",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "5px",
                cursor: "pointer"
            }}
        >
            <img
                src={game.thumbnail}
                style={{ width: "35px" }}
            />
            <h4 style={{
                fontFamily: "Poppins",
                fontWeight: "lighter",
                color: "white",
                fontSize: "13px",
                width: "170px",
                paddingLeft: "10px"
            }}>
                {game.name}
            </h4>
        </motion.div>
    )
}