import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import { useDrag, useDrop } from 'react-dnd'

import { ChannelCardProps } from './interface'
import { onHover } from './utils/hover'

export const ChannelCard: React.FC<ChannelCardProps> = ({ creator, position, moveChannel, setState }) => {
    const channelRef = useRef<any>()

    const [, DropRef] = useDrop({
        accept: 'channel-card',
        hover: (item, monitor) => {
            onHover({ channelRef, item, position, monitor, moveChannel, setState })
        }
    })
    const [, DragRef] = useDrag({
        item: {
            type: "channel-card",
            creator: creator.name,
            index: position
        }
    })
    DragRef(DropRef(channelRef))
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
            ref={channelRef}
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
