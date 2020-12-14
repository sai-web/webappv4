import React from 'react'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'

import { Menu } from '../../../components/subscription-manager/viewer/leftMenu'
import { Viewers } from '../../../components/subscription-manager/viewer/viewerRender'

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
            <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
                <Menu />
                <Viewers />
            </div>
        </Template>
    )
}

export default ViewerManager