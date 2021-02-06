import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'
import { ChannelPreview } from '../../../components/user/channel/profile'
import { ChannelDescription } from '../../../components/user/channel/description'
import { Content } from '../../../components/user/channel/content'
import { Connections } from '../../../components/user/channel/connections'
import { ScrolledChannelPreview } from '../../../components/user/channel/scrolledChannelPreview'

import { onScroll } from '../../../utils/Hooks/scroll'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Channel" page="Channel" url="/app/channel/@me" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Community" page="Channel" url="/app/channel/community" logo={<i className="fa fa-group" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Content" page="Channel" url="/app/channel/content" logo={<span className="material-icons" style={{ fontSize: "15px" }}>layers</span>} />
        </>
    )
}

const AboutChannel: React.FC = () => {
    return (
        <div style={{
            width: "100%",
            paddingLeft: "10px",
            marginTop: "70px",
            position: "sticky",
            top: "110px",
            scrollSnapAlign: "start"
        }}>
            <h4 style={{ fontFamily: "Poppins", fontSize: "15px", color: "grey", lineHeight: "0" }}>About Channel</h4>
            <h4 style={{
                fontFamily: "Poppins",
                fontWeight: "lighter",
                color: "silver",
                fontSize: "13px"
            }}>
                I'm a pretty average dude with no expertise in anything, but I'm okay with it as I feel that I took a glimpse of everything.
                There are many things I've tried over the year 2020. This is when I got to know the most of myself. I've got to experiment with
                millions of new things which I feel have made me the person I am today. This is my story as the guy who learnt everything from
                the internet.
            </h4>
        </div>
    )
}

function UserChannel() {
    const { ref, scrolled } = onScroll(410)
    return (
        <Template PageMode={<Pages />} width="320px" page="Channel" reference={ref} banner>
            <div
                style={{
                    width: "100%",
                    backgroundColor: "#0E0E10",
                    position: "absolute",
                    top: "270px",
                    display: "flex"
                }}
            >
                <div style={{
                    width: "300px",
                    height: "100%"
                }}>
                    <ScrolledChannelPreview scrolled={scrolled} />
                    <ChannelPreview />
                    <AboutChannel />
                    <Connections />
                </div>
                <div style={{
                    width: "calc(100% - 300px)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "absolute",
                    right: "0"
                }}>
                    <ChannelDescription />
                    <Content scrolled={scrolled} />
                </div>
            </div>
        </Template>
    )
}

export default UserChannel