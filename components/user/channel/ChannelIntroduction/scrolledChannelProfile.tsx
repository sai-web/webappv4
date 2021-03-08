import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { SubscribeButton } from '../accessories'
import { usePulse } from '@pulsejs/react'
import { core } from '../../../../core'

const ProfileElements: React.FC = () => {
    const channel = usePulse(core.channel.state.current_channel)
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100% ",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.2)"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px"
            }}>
                {channel.photo ?
                    <img
                        src={channel.photo}
                        style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            objectFit: "cover"
                        }}
                    /> :
                    <div style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        backgroundColor: "#18181B",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0 2px 2px black",
                        zIndex: 1
                    }}>
                        <svg
                            // width="5"
                            // height="5"
                            fill="silver"
                            viewBox="0 0 18 20"
                            xmlns="http://www.w3.org/2000/svg"
                            data-testid="user-icon"
                            style={{
                                width: "15px",
                                height: "15px",
                                color: "grey"
                            }}
                        >
                            <path
                                d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z"
                            >

                            </path>
                        </svg>
                    </div>
                }
                <h4 style={{
                    fontFamily: "Whitney",
                    color: "silver",
                    fontSize: "20px",
                    lineHeight: "0",
                    marginLeft: "10px"
                }}>
                    {channel.username}
                </h4>
                <h4 style={{
                    fontFamily: "Poppins",
                    color: "grey",
                    fontSize: "15px",
                    lineHeight: "0"
                }}>
                    /{channel.domain}
                </h4>
            </div>
            <div style={{
                marginRight: "30px",
                marginTop: "20px"
            }}>
                <SubscribeButton overlay />
            </div>
        </div>
    )
}

const BlurEffect: React.FC = () => {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            backgroundImage: "url(https://fsb.zobj.net/crop.php?r=-P6OqVJVtAEn3HWiU44dCF8VtpVjSmB5btM0cUHqUgbi2xFGN3YQ8q3XpEUlOG0hF6rSZas8eX_zBoKWmF3IaPifbkt6ToV-mPQB0-EwU4wUa31Iu5gWsZjCHzaoC73kj1mmSdn2oKc1q0nIrFZCkWHE_fyIsJaPkcw0jDptCxL1Kxt0me-T_Jx8Ts0)",
            zIndex: -1,
            filter: "blur(3px)",
            // opacity: "0.95"
        }}>

        </div>
    )
}

var DisplayVariants = {
    hidden: { y: -50 },
    visible: { y: 0 }
}

export const ScrolledChannelProfile: React.FC<{
    scrolled: boolean,
}> = ({ scrolled }) => {
    const [renderCount, setRenderCount] = useState<number>(0)
    useEffect(() => {
        if (renderCount < 2) setRenderCount(prev => (prev + 1))
    }, [])
    return (
        <motion.div
            initial={scrolled ? "hidden" : renderCount > 0 ? "visible" : "hidden"}
            animate={scrolled ? "visible" : "hidden"}
            transition={{
                duration: 0.2,
                type: "tween"
            }}
            variants={DisplayVariants}
            style={{
                width: "calc(100% - 200px)",
                height: "50px",
                zIndex: 1,
                position: "fixed",
                top: "40px",
                overflow: "hidden"
            }}
        >
            <div style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <BlurEffect />
                <ProfileElements />
            </div>
        </motion.div>
    )
}