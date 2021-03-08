import React, { useEffect, useRef } from 'react'
import { GetServerSideProps } from 'next'
import { motion } from 'framer-motion'

import { core } from '../../../core'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'

import { ChannelIntroSection } from '../../../components/user/channel/ChannelIntroduction'
import { ChannelContentSection } from '../../../components/user/channel/ChannelContent'

import { onScroll } from '../../../utils/Hooks/scroll'
import Router from 'next/router'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes
                name="Channel"
                page="Channel"
                url="/app/channel/@me"
                logo={<i className="fa fa-user"
                    style={{ fontSize: "10px" }}></i>}
            />
            <PageModes
                name="Community"
                page="Channel"
                url="/app/channel/community"
                logo={<i className="fa fa-group"
                    style={{ fontSize: "10px" }}></i>}
            />
            <PageModes
                name="Content"
                page="Channel"
                url="/app/channel/content"
                logo={<span className="material-icons"
                    style={{ fontSize: "15px" }}>layers</span>}
            />
        </>
    )
}

function UserChannel() {
    const { ref, scrolled } = onScroll(410)
    useEffect(() => {
        if (!Router.pathname.includes('@me')) core.user.info({ me: false, domain: Router.pathname.replace('/app/channel/', '') })
        else core.channel.state.current_channel.patch(core.user.state.info._value)
    }, [])
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
                <ChannelIntroSection scrolled={scrolled} />
                <ChannelContentSection scrolled={scrolled} />
            </div>
        </Template>
    )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     if(!context.resolvedUrl.includes('@me')){

//     }
//     return {
//         props: {

//         }
//     }
// }

export default UserChannel