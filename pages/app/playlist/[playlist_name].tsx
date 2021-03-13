import React, { useEffect, useRef, useState } from 'react'

import Template from '../../../components/app/template'
import { MainPlayer } from '../../../components/playlist/mainPlayer/player'
import { PlaylistItems } from '../../../components/playlist/playlistItems/itemsRender'

const Pages: React.FC = () => {
    return (
        <></>
    )
}

function ChannelPlaylist() {
    return (
        <Template PageMode={<Pages />} width="200px" page="Playlist" >
            <div style={{
                width: "100%",
                height: "100%",
                display: "flex"
            }}>
                <MainPlayer />
                <PlaylistItems />
            </div>
        </Template>
    )
}

export default ChannelPlaylist