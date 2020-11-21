import React from 'react'

import { Games } from '../../../components/home/esports/streams/games'
import { PageModes } from '../../../components/nav/top/components/pageMode'
import { Overlay } from '../../../components/home/esports/streams/overlay'
import { StreamSet } from '../../../components/home/esports/streams/StreamSet'
import Template from '../../../components/app/template'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Live" page="Live" url="/app/esports/live" logo={<i className="fa fa-bullseye" style={{ fontSize: "13px" }}></i>} />
            <PageModes name="Clips" page="Live" url="/app/esports/clips" logo={<span className="material-icons" style={{ fontSize: "15px" }}>insert_link</span>} />
        </>
    )
}

function Esports() {
    return (
        <Template PageMode={<Pages />} width="150px" page="Esports" >
            <div style={{
                width: "100%",
                height: "200px",
                overflow: "hidden"
            }}
                className="main-content-div"
            >
                <Overlay />
            </div>
            <Games />
            <StreamSet />
        </Template>
    )
}

export default Esports