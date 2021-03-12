import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { core } from '../../core'
import { lanuchMenu, animateTemplate, MenuType } from '../../core/utils/Events'

interface playlistCardProps {
    url: string
    thumbnail: string
    vods: number
}

const PlaylistThumbnail: React.FC<playlistCardProps> = ({
    thumbnail,
    url,
    vods
}) => {
    return (
        <a href={url}>
            <motion.div
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    bounce: 0.35
                }}
                style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                    position: "relative"
                }}
            >
                <img src={thumbnail}
                    style={{
                        width: "200px",
                        height: "110px",
                        objectFit: "cover",
                        borderRadius: "5px"
                    }}
                />
                <div style={{
                    width: "60px",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.9)",
                    position: "absolute",
                    right: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    fontFamily: "Poppins",
                    color: "#4D6FFF"
                }}>
                    {vods}
                </div>
            </motion.div>
        </a>
    )
}

interface PlaylistThumbnailProps {
    data: {
        name: string,
        vods: number,
        thumbnail?: string
    }
}

export const PlaylistCard: React.FC<PlaylistThumbnailProps> = ({ data }) => {
    return (
        <div style={{
            width: "200px",
            // backgroundColor: "green"
        }}>
            <PlaylistThumbnail
                thumbnail={data.thumbnail || ""}
                url={`/app/playlist/${data.name}`}
                vods={data.vods}
            />
            <h4 style={{
                fontFamily: "Poppins",
                color: "silver",
                fontSize: "10px"
            }}>
                {data.name.length > 40 ? data.name.slice(0, 40) + '...' : data.name}
            </h4>
        </div>
    )
}