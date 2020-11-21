import React from 'react'

import { PageModes } from '../../../components/nav/top/components/pageMode'
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
            <h4>Youtube</h4>
        </Template>
    )
}

export default Clips