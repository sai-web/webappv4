import React from 'react'

import { music } from '../../../components/home/fakeData/music'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import { Overlay } from '../../../components/home/music/tracks/overlay'
import { AllTracks } from '../../../components/home/music/tracks/tracks'
import Template from '../../../components/app/template'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Tracks" page="Tracks" url="/app/music/tracks" logo={<span className="material-icons" style={{ fontSize: "15px" }}>track_changes</span>} />
            <PageModes name="Albums" page="Tracks" url="/app/music/albums" logo={<span className="material-icons" style={{ fontSize: "15px" }}>album</span>} />
        </>
    )
}

function Music() {
    return (
        <Template PageMode={<Pages />} width="170px" page="Music" >
            <div style={{
                width: "100%",
                height: "200px",
                overflow: "hidden"
            }}>
                <Overlay />
            </div>
            <AllTracks tracks={music} />
        </Template>
    )
}

export default Music