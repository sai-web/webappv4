import React from 'react'
import { motion } from 'framer-motion'

import { usePulse } from '@pulsejs/react'
import { core } from '../../../../core'

import { lanuchMenu, MenuType, animateTemplate } from '../../../../core/utils/Events'
import { compileAvgPublishTime } from '../../../../utils/Hooks/numericEncoder'
// import { mainContentData } from '../../../home/fakeData/home'

const ConnectionCards: React.FC<{ name: string, icon: JSX.Element, info: { domain: string, color: string } }> = ({ name, icon, info }) => {
    return (
        <motion.div
            whileTap={{
                scale: 0.9
            }}
            style={{
                height: "26px",
                backgroundColor: "#373737",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                padding: "0 5px",
                borderRadius: "13px",
                cursor: "pointer"
            }}
            onClick={() => {
                lanuchMenu.emit({
                    type: MenuType.ConnectionMenu,
                    display: true,
                    ...info
                })
                animateTemplate.emit({
                    display: true
                })
            }}
        >
            {icon}
            <h4 style={{
                lineHeight: "0",
                fontFamily: "Poppins",
                color: "silver",
                fontWeight: "lighter",
                fontSize: "13px",
                marginLeft: "5px"
            }}>{name}</h4>
        </motion.div>
    )
}

const ChannelConectedAccounts: React.FC = () => {
    return (
        <div style={{
            width: "100%",
            height: "50px",
            display: "flex",
            alignItems: "center",
            overflowX: "scroll"
        }} className="main-content-div">
            <ConnectionCards
                name="twitch"
                icon={<i className="fa fa-twitch" style={{ color: "silver", fontSize: "12px" }}></i>}
                info={{
                    domain: "twitch.tv/",
                    color: "#6441a5"
                }}
            />
            <ConnectionCards
                name="youtube"
                icon={<i className="fa fa-youtube-play" style={{ color: "silver", fontSize: "12px" }}></i>}
                info={{
                    domain: "youtube.com/",
                    color: "#c4302b"
                }}
            />
            <ConnectionCards
                name="spotify"
                icon={<i className="fa fa-spotify" style={{ color: "silver", fontSize: "12px" }}></i>}
                info={{
                    domain: "spotify.com/",
                    color: "#1DB954"
                }}
            />
        </div>
    )
}

const ChannelInformation: React.FC = () => {
    const { tags } = usePulse(core.channel.state.current_channel)
    const content = usePulse(core.vod.collections.vods.getGroup('default'))
    const renderTags = tags ? (tags as string).split(',') : []
    return (
        <div style={{
            width: "100%",
            height: "calc(100% - 50px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden"
        }}>
            <h4 style={{
                fontFamily: "Whitney",
                fontWeight: "lighter",
                fontSize: "25px",
                color: "silver",
            }}>
                {
                    tags?.length! > 0 ?
                        renderTags.reduce((render, tag) => {
                            if (renderTags.indexOf(tag) === 0) render += tag
                            else if (renderTags.indexOf(tag) === renderTags.length - 1) render += ' and ' + tag
                            else render += ', ' + tag
                            return render
                        }, '') :
                        "New creator on vibe.io"
                }
            </h4>
            <div style={{
                display: "flex",
                lineHeight: "0",
                position: "relative",
                bottom: "30px"
            }}>
                <h4 style={{ fontFamily: "Poppins", fontWeight: "lighter", fontSize: "13px", color: "grey" }}>Averages</h4>
                <h4 style={{ fontFamily: "Poppins", fontWeight: "lighter", fontSize: "13px", color: "#4D6FFF", marginLeft: "5px", marginRight: "5px" }}>{compileAvgPublishTime(content)}</h4>
                <h4 style={{ fontFamily: "Poppins", fontWeight: "lighter", fontSize: "13px", color: "grey" }}>posts per week</h4>
            </div>
        </div>
    )
}

export const ChannelDescription: React.FC = () => {
    return (
        <div style={{
            width: "100%",
            height: "150px"
        }}>
            <>
                <ChannelConectedAccounts />
                <ChannelInformation />
            </>
        </div>
    )
}