import React from 'react'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Channel" page="Content" url="/app/channel/@me" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Community" page="Content" url="/app/channel/community" logo={<i className="fa fa-group" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Content" page="Content" url="/app/channel/content" logo={<span className="material-icons" style={{ fontSize: "15px" }}>layers</span>} />
        </>
    )
}

function UserChannel() {
    return (
        <Template PageMode={<Pages />} width="320px" page="Channel" >
            <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "40px", lineHeight: "0", marginLeft: "50px", position: "absolute" }}>Trending</h4>
        </Template>
    )
}

export default UserChannel