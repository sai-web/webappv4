import React from 'react'
import { motion } from 'framer-motion'

import { useDrag } from 'react-dnd'

import { ChannelCardProps } from './interface'

export const ChannelCard: React.FC<ChannelCardProps> = ({ creator }) => {
    const [, DragRef] = useDrag({
        item: {
            type: "channel-card",
            creator: creator.name
        }
    })
    return (
        <motion.div
            whileTap={{ scale: 0.9 }}
            initial={{
                scale: 0.9
            }}
            animate={{
                scale: 1
            }}
            transition={{
                type: "spring",
                duration: 0.3
            }}
            ref={DragRef}
            style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "5px",
                width: "calc(100% - 10px)",
                height: "50px",
                cursor: "pointer",
                borderRadius: "5px"
            }}
            className="creators"
        >
            <img
                src={creator.photo}
                alt="creator-image"
                style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginLeft: "10px"
                }}
            />
            <div style={{
                marginLeft: "10px"
            }}>
                <h4 style={{
                    fontFamily: "Roboto Condensed",
                    fontWeight: "lighter",
                    color: "white",
                    fontSize: "15px",
                    lineHeight: "0"
                }}>
                    {creator.name.length > 15 ? creator.name.slice(0, 15) + '...' : creator.name}
                </h4>
                <h4 style={{
                    fontFamily: "sans-serif",
                    color: "grey",
                    fontSize: "10px",
                    lineHeight: "0",
                    position: "relative",
                    bottom: "5px"
                }}>
                    {creator.domain}
                </h4>
            </div>
        </motion.div>
    )
}