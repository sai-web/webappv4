import { usePulse } from '@pulsejs/react'
import React, { useEffect } from 'react'
import { core } from '../../../core'

import { PlaylistCard } from '../../content.cards/playlistCard'

type playlistInfo = {
    name: string,
    vods: number,
    thumbnail?: string
}

const PlaylistPreview: React.FC<{ info: playlistInfo }> = ({
    info
}) => {
    return (
        <div style={{ margin: "10px" }}>
            <PlaylistCard
                data={info}
            />
        </div>
    )
}

const PlayListHeader: React.FC = () => {
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
                video_library
            </span>
            <h4 style={{
                fontFamily: "Whitney",
                fontSize: "20px",
                color: "silver",
                marginLeft: "5px",
                lineHeight: "0"
            }}>
                Playlists
            </h4>
        </div>
    )
}

const Content: React.FC = () => {
    const playlists = usePulse(core.vod.collections.playlists.getGroup('default'))
    return (
        <div>
            {
                playlists.length !== 0 ?
                    <div style={{
                        width: "calc(100% - 60px)",
                        display: "flex",
                        flexWrap: "wrap",
                        marginLeft: "30px",
                        // backgroundColor: "green"
                    }}>
                        {
                            playlists.map((playlist, index) => {
                                const playlistInfo = {
                                    name: playlist.name,
                                    vods: playlist.vods,
                                    thumbnail: playlist.thumbnail
                                }
                                return <PlaylistPreview info={playlistInfo} key={`playlist-list-${index}`} />
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
                        Playlists that you create will show up here.
                    </h4>
            }
        </div>
    )
}

export const PlayList: React.FC = () => {
    return (
        <div>
            <PlayListHeader />
            <Content />
        </div>
    )
}