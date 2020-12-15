import React from 'react'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'
import { ChannelPreview } from '../../../components/user/channel/profile'
import { ChannelDescription } from '../../../components/user/channel/description'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Channel" page="Channel" url="/app/channel/@me" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Community" page="Channel" url="/app/channel/community" logo={<i className="fa fa-group" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Content" page="Channel" url="/app/channel/content" logo={<span className="material-icons" style={{ fontSize: "15px" }}>layers</span>} />
        </>
    )
}

const Banner: React.FC = () => {
    return (
        <div style={{
            width: "calc(100% - 200px)",
            height: "300px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: "35px",
            zIndex: -1
        }}>
            <img src="https://myrepublic.net/sg/content/uploads/2020/09/valorant-banner.png"
                style={{
                    height: "300px",
                    objectFit: "cover"
                }}
            />
        </div>
    )
}


function UserChannel() {
    return (
        <Template PageMode={<Pages />} width="320px" page="Channel" >
            <Banner />
            <div style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#0E0E10",
                position: "absolute",
                top: "300px",
                display: "flex"
            }}>
                <ChannelPreview />
                <ChannelDescription />
            </div>
        </Template>
    )
}

export default UserChannel