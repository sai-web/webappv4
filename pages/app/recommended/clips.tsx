import React from 'react'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'
import { Filters } from '../../../components/home/recommended/filter'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Subscriptions" page="Recommended" url="/app/" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Trending" page="Recommended" url="/app/trending" logo={<span className="material-icons" style={{ fontSize: "15px" }}>local_fire_department</span>} />
            <PageModes name="Recommended" page="Recommended" url="/app/recommended/streams" logo={<span className="material-icons" style={{ fontSize: "15px" }}>layers</span>} />
        </>
    )
}

function RecommendedContent() {
    return (
        <Template PageMode={<Pages />} width="320px" page="home" >
            <div style={{
                width: "100%",
                height: "35px",
                backgroundColor: "#1a1a1a",
                display: "flex",
                alignItems: "center"
            }}>
                <Filters name="streams" />
                <Filters name="clips" />
                <Filters name="tracks" />
                <Filters name="albumns" />
            </div>
            <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "40px", lineHeight: "0", marginLeft: "50px", position: "absolute" }}>Recommended</h4>
        </Template>
    )
}

export default RecommendedContent