import React, { useEffect, useState } from 'react'
import { core } from '../../../core'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'

import { WatchLater } from '../../../components/fav/library/watch_later'
import { PlayList } from '../../../components/fav/library/playlists'

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
                // backgroundColor: "green"
            }}>

            </div>
        </Template>
    )
}

export default ChannelPlaylist