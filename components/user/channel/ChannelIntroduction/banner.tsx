import React from 'react'

import { usePulse } from '@pulsejs/react'
import { core } from '../../../../core'

export const Banner: React.FC<{ scaleVal: number }> = ({ scaleVal }) => {
    const { banner, channel_trailer } = usePulse(core.channel.state.current_channel)
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
                banner ?
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
                        {
                            channel_trailer ?
                                <video
                                    // width="350"
                                    // height="200"
                                    controls
                                    src={channel_trailer}
                                    id="channel-trailer"
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%,-50%)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        opacity: `${(scaleVal + 1) / 2}`,
                                        height: `${((scaleVal + 1) / 2) * 200}px`,
                                        zIndex: 1,
                                        outline: "none"
                                        // objectFit: "cover"
                                    }}
                                >

                                </video> : ""
                        }
                    </div> :
                    <div style={{
                        height: `${((scaleVal + 1) / 2) * 270}px`,
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
            }
            <div style={{
                width: "100%",
                height: "100%",
                backgroundColor: `rgba(0,0,0,${1 - scaleVal})`,
                position: "absolute",
                top: "0",
                left: "0"
            }}
            >

            </div>
        </div>
    )
}