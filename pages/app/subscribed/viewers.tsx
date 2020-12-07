import React from 'react'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'

import { Analytics } from '../../../components/progress-bar/'
import { ViewerShipType } from '../../../components/subscription-manager/viewer/categorizing'
import { Extension } from '../../../components/subscription-manager/viewer/extensions'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="creators" page="viewers" url="/app/subscribed/subscription-manager" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="viewers" page="viewers" url="/app/subscribed/viewers" logo={<span className="material-icons" style={{ fontSize: "15px" }}>local_fire_department</span>} />
        </>
    )
}

/*
    subscribers
    patrons
    streaks

    groups
    merch
    community

    analytics
*/

function ViewerManager() {
    return (
        <Template PageMode={<Pages />} width="180px" page="Viewer Manager" >
            <div style={{
                width: "300px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
                <div style={{
                    width: "calc(100% - 50px)",
                    height: "50px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
                    <ViewerShipType value={24} type="subscribers" />
                    <ViewerShipType value={10} type="patrons" />
                    <ViewerShipType value={4} type="streaks" />
                </div>
                <div style={{
                    width: "calc(100% - 50px)",
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly"
                }}>
                    <Extension />
                    <Extension />
                    <Extension />
                </div>
                <div style={{
                    width: "calc(100% - 50px)",
                    height: "200px",
                    borderRadius: "5px",
                    // backgroundColor: "#1A1A1C",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Analytics percentage={90} />
                </div>
            </div>
        </Template>
    )
}

export default ViewerManager