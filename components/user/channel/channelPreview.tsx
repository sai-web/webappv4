import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

import { lanuchMenu, MenuType, animateTemplate } from '../../../core/utils/Events'

import { ChannelSubs, InputArea } from './accessories'
import { closeOnOutwardClick } from '../../../utils/auth'

const SubscriptionButton: React.FC = () => {
    const [notification, setNotificationStatus] = useState<boolean>(false)
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            position: "relative",
            left: "10px"
        }}>
            <motion.button
                whileTap={{
                    scale: 0.9
                }}
                style={{
                    width: "80px",
                    height: "25px",
                    borderRadius: "5px",
                    backgroundColor: "#242429",
                    fontFamily: "Poppins",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    color: "grey",
                    borderWidth: "0",
                    outline: "none",
                    cursor: "pointer"
                }}
            >
                unsubscribe
            </motion.button>
            <span
                className="material-icons"
                style={{
                    color: "grey",
                    fontSize: "15px",
                    cursor: "pointer",
                    marginLeft: "5px"
                }}
                onClick={() => setNotificationStatus(prev => (!prev))}
            >
                {notification ? "notifications_active" : "notifications_off"}
            </span>
        </div>
    )
}

const displayVariants = {
    visible: {
        scale: 1,
        opacity: 1
    },
    hidden: {
        scale: 0,
        opacity: 0
    }
}

function getPosition(position: {
    x: number,
    y: number,
    width: number,
    height: number
}, height: number) {
    let coordinates = {
        x: 205,
        y: position.y
    }

    const computationForY = position.height - (height + position.y)
    if (computationForY < 0) coordinates.y = position.y + computationForY - 50
    return coordinates
}

const ChannelPreviewOptions: React.FC = () => {
    const ChannelPreviewRef = useRef<any>(null)
    closeOnOutwardClick((value: boolean) => {
        lanuchMenu.emit({ type: MenuType.Profile, display: value })
        // animateTemplate.emit({ display: value })
    }, [ChannelPreviewRef])
    return (
        <div
            style={{
                width: "220px",
                // height: "450px",
                borderRadius: "10px",
                backgroundColor: "#202225",
                overflow: "hidden"
            }}
            ref={ChannelPreviewRef}
        >
            <div style={{
                width: "100%",
                height: "250px",
                backgroundColor: "#18181B",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <img src="https://www.decentfashion.in/wp-content/uploads/2018/02/Cool-cool-profile-pictures-300x244.jpg"
                    style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "30px",
                        objectFit: "cover",
                        marginTop: "20px"
                    }}
                />
                <h4 style={{
                    fontFamily: "Whitney",
                    color: "white",
                    fontSize: "15px",
                    lineHeight: "0"
                }}>
                    AR
                </h4>
                <h4 style={{
                    fontFamily: "Poppins",
                    color: "grey",
                    fontSize: "10px",
                    lineHeight: "0",
                    position: "relative",
                    bottom: "14px"
                }}>
                    /ar
                </h4>
                <SubscriptionButton />
                <div style={{
                    width: "calc(100% - 40px)",
                    marginTop: "10px",
                    marginLeft: "13px"
                }}>
                    <ChannelSubs />
                </div>
            </div>
            <div style={{
                width: "100%",
                height: "230px",
                // maxHeight: "200px",
                // minHeight: "80px",
                position: "relative"
                // backgroundColor: "red"
            }}>
                <div style={{
                    width: "calc(100% - 50px)",
                    // backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "25px"
                }}>
                    <i className="fa fa-twitch" style={{ color: "grey", fontSize: "20px", margin: "10px" }}></i>
                    <i className="fa fa-youtube-play" style={{ color: "grey", fontSize: "20px", margin: "10px" }}></i>
                    <i className="fa fa-spotify" style={{ color: "grey", fontSize: "20px", margin: "10px" }}></i>
                </div>
                <div style={{
                    // backgroundColor: "black",
                    width: "calc(100% - 20px)",
                    height: "165px",
                    // maxHeight: "165px",
                    position: "absolute",
                    top: "30px",
                    left: "10px"
                }}>

                </div>
                <InputArea
                    cols={25}
                    rows={1}
                    size={12}
                    placeholder={`Message @${'AR'}`}
                />
            </div>
        </div>
    )
}

export const ChannelPreview: React.FC<{
    display: boolean,
    position: {
        x: number,
        y: number,
        width: number,
        height: number
    }
}> = ({ display, position }) => {
    const { x, y } = getPosition(position, 480)
    return (
        <motion.div
            initial={display ? "hidden" : "visible"}
            animate={display ? "visible" : "hidden"}
            transition={{
                type: "spring",
                damping: 10
            }}
            variants={displayVariants}
            style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                zIndex: 2,
                // backgroundColor: "red"
            }}
            id="channel-profile-menu-parent"
        >
            <ChannelPreviewOptions />
        </motion.div>
    )
}