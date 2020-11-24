import React from 'react'

import { clips, subClips } from '../../../components/home/fakeData/clips'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import { TopClips } from '../../../components/home/esports/clips/topClips'
import { SubClips } from '../../../components/home/esports/clips/subClips'
import Template from '../../../components/app/template'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Live" page="Clips" url="/app/esports/live" logo={<i className="fa fa-bullseye" style={{ fontSize: "13px" }}></i>} />
            <PageModes name="Clips" page="Clips" url="/app/esports/clips" logo={<span className="material-icons" style={{ fontSize: "15px" }}>insert_link</span>} />
        </>
    )
}

function Clips() {
    return (
        <Template PageMode={<Pages />} width="150px" page="Esports" >
            <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "40px", lineHeight: "0", marginLeft: "50px" }}>Clips</h4>
            <TopClips clips={clips} />
            <h4 style={{ fontFamily: "sans-serif", color: "silver", fontSize: "30px", lineHeight: "0", margin: "70px 15px 10px" }}>Recommended</h4>
            <SubClips clips={subClips} />
        </Template>
    )
}

export default Clips