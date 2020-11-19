import React, { useState } from 'react'

import { music } from '../../components/home/fakeData/music'

import { PageModes } from '../../components/nav/top/components'
import { Overlay } from '../../components/home/music/overlay'
import { AllTracks } from '../../components/home/music/tracks'
import Template from '../../components/app/template'

const Pages: React.FC<{ PageArr: Array<boolean>, setPageMode: React.Dispatch<React.SetStateAction<Array<boolean>>> }> = ({ PageArr, setPageMode }: { PageArr: Array<boolean>, setPageMode: React.Dispatch<React.SetStateAction<Array<boolean>>> }) => {
    return (
        <>
            <PageModes name="Tracks" color={PageArr[0] ? "grey" : undefined} setPageModes={setPageMode} pos={0} logo={<span className="material-icons" style={{ fontSize: "15px" }}>track_changes</span>} />
            <PageModes name="Albums" color={PageArr[1] ? "grey" : undefined} setPageModes={setPageMode} pos={1} logo={<span className="material-icons" style={{ fontSize: "15px" }}>album</span>} />
        </>
    )
}

function Music() {
    const [Modes, setPageMode] = useState<Array<boolean>>([false, false])
    return (
        <Template PageMode={<Pages PageArr={Modes} setPageMode={setPageMode} />} width="170px" >
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