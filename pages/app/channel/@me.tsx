import React, { useEffect, useState } from 'react'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'
import { ChannelPreview } from '../../../components/user/channel/profile'
import { ChannelDescription } from '../../../components/user/channel/description'
import { ContentFilter } from '../../../components/user/channel/filter'

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

const ChannelContent: React.FC = () => {
    return (
        <div style={{
            width: "100%",
            height: "calc(100% - 200px)",
            backgroundColor: "green"
        }}>

        </div>
    )
}

function UserChannel() {
    const [scrolled, setScroll] = useState(false)
    const ref = React.useRef<any>({})
    useEffect(() => {
        function handleScroll() {
            if (ref.current.scrollTop > 440) setScroll(true)
            else setScroll(false)
        }
        ref.current.addEventListener('scroll', handleScroll)

        return () => {
            ref.current.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <Template PageMode={<Pages />} width="320px" page="Channel" reference={ref} >
            <Banner />
            <div style={{
                width: "100%",
                height: "150%",
                backgroundColor: "#0E0E10",
                position: "absolute",
                top: "300px",
                display: "flex"
            }}>
                <div style={{
                    width: "300px",
                    height: "100%"
                }}>
                    <ChannelPreview scrolled={scrolled} />
                </div>
                <div style={{
                    width: "calc(100% - 300px)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <ChannelDescription />
                    <ContentFilter />
                    <ChannelContent />
                </div>
            </div>
        </Template>
    )
}

export default UserChannel