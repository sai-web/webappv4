import { usePulse } from '@pulsejs/next'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { core } from '../../../core'

import { platforms } from '../../../core/utils/platforms'

import { GeneralCard } from '../../content.cards/general.cards'
import { NonWideCard } from '../../content.cards/nonwideCard'

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
                        <NonWideCard
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
    const [content, setContent] = useState([])
    useEffect(() => {
        core.vod.routes.getPlaylist('watch_later')
            .then(data => {
                core.vod.collections.vods.reset()
                const playlistToRender = data.map((element: any) => {
                    const requiredPlatform = Object.keys(platforms).find(platform => platform === (element.platform as string).toLocaleLowerCase())!
                    const platform = platforms[requiredPlatform]
                    const item = {
                        color: platform.hex,
                        thumbnail: element.thumbnail,
                        logo: platform.logo,
                        url: element.url,
                        wideThumb: platform.wideThumb,
                        title: element.title,
                        views: element.views,
                        published_at: element.published_at,
                        creator_id: element.user_id,
                        vod_id: element.vod_id,
                        platform: platform.key
                    }
                    core.vod.collections.vods.collect(item)
                    return item
                })
                setContent(playlistToRender)
            })
    }, [])
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