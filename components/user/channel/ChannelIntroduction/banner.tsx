import React from 'react'

import { usePulse } from '@pulsejs/react'
import { core } from '../../../../core'

import { Trailer } from './channel.trailer'

interface DefaultBackgroundProp {
    scaleValue: number
}

const DefaultBackground: React.FC<DefaultBackgroundProp> = ({ scaleValue }) => {
    return (
        <div style={{
            height: `${((scaleValue + 1) / 2) * 270}px`,
            width: `100%`,
            backgroundColor: "#4D6FFF",
            // background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3sl20LYYXoMYEhwba0BPkuNhVYvI6BStrw&usqp=CAU)",
            // backgroundSize: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h4 style={{
                fontFamily: "Whitney",
                fontSize: "35px",
                color: "white"
            }}>
                vibe
            </h4>
        </div>
    )
}

interface OverlayProps {
    scaleValue: number
}

const Overlay: React.FC<OverlayProps> = ({ scaleValue }) => {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            backgroundColor: `rgba(0,0,0,${1 - scaleValue})`,
            position: "absolute",
            top: "0",
            left: "0"
        }}
        >

        </div>
    )
}

export const Banner: React.FC<{ scaleVal: number }> = ({ scaleVal }) => {
    const { banner, channel_trailer } = usePulse(core.channel.state.current_channel)
    const { disable_banner, disable_trailer } = usePulse(core.settings.state.settings)
    return (
        <div style={{
            width: "calc(100% - 200px)",
            height: "270px",
            overflow: "hidden",
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: "35px"
        }}>
            {
                // https://myrepublic.net/sg/content/uploads/2020/09/valorant-banner.png
                banner && !disable_banner ?
                    <div style={{
                        height: `${((scaleVal + 1) / 2) * 270}px`,
                        position: "relative"
                    }}>
                        <img src={banner!}
                            style={{
                                height: `100%`,
                                objectFit: "cover"
                            }}
                        />
                    </div> :
                    <DefaultBackground scaleValue={scaleVal} />
            }
            {
                channel_trailer && !disable_trailer ?
                    <Trailer
                        channel_trailer_link={channel_trailer}
                        scaleValue={scaleVal}
                    /> : ""
            }
            <Overlay
                scaleValue={scaleVal}
            />
        </div>
    )
}