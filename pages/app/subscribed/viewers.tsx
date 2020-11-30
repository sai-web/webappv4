import React from 'react'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="creators" page="viewers" url="/app/subscribed/subscription-manager" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="viewers" page="viewers" url="/app/subscribed/viewers" logo={<span className="material-icons" style={{ fontSize: "15px" }}>local_fire_department</span>} />
        </>
    )
}

function ViewerManager() {
    return (
        <Template PageMode={<Pages />} width="180px" page="Viewer Manager" >
            <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "40px", lineHeight: "0", marginLeft: "50px", position: "absolute" }}>Trending</h4>
        </Template>
    )
}

export default ViewerManager