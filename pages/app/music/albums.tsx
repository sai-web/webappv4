import React from 'react'

import { Albumns } from '../../../components/home/music/albumn/albumnRender'
import { AlbumnSet } from '../../../components/home/music/albumn/albumnSet'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Tracks" page="Albums" url="/app/music/tracks" logo={<span className="material-icons" style={{ fontSize: "15px" }}>track_changes</span>} />
            <PageModes name="Albums" page="Albums" url="/app/music/albums" logo={<span className="material-icons" style={{ fontSize: "15px" }}>album</span>} />
        </>
    )
}

function Albums() {
    return (
        <Template PageMode={<Pages />} width="170px" page="Music" >
            <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "40px", lineHeight: "0", marginLeft: "50px" }}>Albums</h4>
            <Albumns />
            <AlbumnSet />
        </Template>
    )
}

export default Albums