import { usePulse } from '@pulsejs/next'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { core } from '../../../core'

import { platforms } from '../../../core/utils/platforms'

import { GeneralCard } from '../../content.cards/general.cards'

interface NonWideThumbnailProps {
    data: {
        color: string,
        thumbnail: string,
        logo: string,
        url: string,
        wideThumb: boolean,
        title: string,
        views: number,
        published_at: Date,
        creator_id: string
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

const ContentPreview: React.FC<{
    data: any
}> = ({
    data
}) => {
        return (
            <div style={{ margin: "10px" }}>
                {
                    data.wideThumb ?
                        <GeneralCard
                            data={data}
                        /> :
                        <NonWideThumbnail
                            data={data}
                        />
                }
            </div>
        )
    }

const WatchLaterHeader: React.FC = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center"
        }}>
            <span className="material-icons"
                style={{
                    fontSize: "25px",
                    color: "silver",
                    marginLeft: "30px"
                }}
            >
                watch_later
            </span>
            <h4 style={{
                fontFamily: "Whitney",
                fontSize: "20px",
                color: "silver",
                marginLeft: "5px",
                lineHeight: "0"
            }}>
                Watch Later
            </h4>
        </div>
    )
}

const Content: React.FC = () => {
    const content = usePulse(core.vod.collections.playlists.getGroup('watch_later'))
        .map(element => {
            const requiredPlatform = Object.keys(platforms).find(platform => platform === (element.platform as string).toLocaleLowerCase())!
            const platform = platforms[requiredPlatform]
            return ({
                color: platform.hex,
                thumbnail: element.thumbnail,
                logo: platform.logo,
                url: element.url,
                wideThumb: platform.wideThumb,
                title: element.title,
                views: element.views,
                published_at: element.published_at,
                creator_id: element.user_id,
                vod_id: element.vod_id
            })
        })
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: content.length !== 0 ? "center" : ""
        }}>
            {
                content.length !== 0 ?
                    <div style={{
                        width: "calc(100% - 60px)",
                        display: "flex",
                        flexWrap: "wrap",
                        // backgroundColor: "green"
                    }}>
                        {
                            content.map((vod, index) => {
                                return <ContentPreview data={vod} key={`playlists-watch-list-${index}`} />
                            })
                        }
                    </div> :
                    <h4 style={{
                        fontFamily: "Poppins",
                        color: "grey",
                        fontSize: "13px",
                        lineHeight: "0",
                        marginLeft: "30px"
                    }}>
                        Content that you add to watch later will show up here.
                    </h4>
            }
        </div>
    )
}

export const WatchLater: React.FC = () => {
    return (
        <div>
            <WatchLaterHeader />
            <Content />
        </div>
    )
}