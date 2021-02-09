import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { usePulse } from '@pulsejs/react'

import { core } from '../../../core'

import { creators } from '../../home/fakeData/sideNav'
import { ViewerShipType } from '../../subscription-manager/viewer/viewerShipType'

export const ProfilePhoto: React.FC = () => {
    const channel = usePulse(core.channel.state.current_channel)
    if (channel.photo) {
        return (
            <img src={core.channel.state.current_channel._value.photo}
                style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50px",
                    objectFit: "cover",
                    boxShadow: "0 5px 5px black"
                }}
            />
        )
    } else {
        return (
            <div style={{
                width: "200px",
                height: "200px",
                borderRadius: "50px",
                backgroundColor: "#18181B",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 5px 5px black",
                zIndex: 1
            }}>
                <svg
                    width="16"
                    height="16"
                    fill="silver"
                    viewBox="0 0 18 20"
                    xmlns="http://www.w3.org/2000/svg"
                    data-testid="user-icon"
                >
                    <path
                        d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z"
                    >

                    </path>
                </svg>
            </div>
        )
    }
}

export const ChannelSubs: React.FC = () => {
    const channel = usePulse(core.channel.state.current_channel)
    return (
        <div style={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            // marginLeft: "10px"
        }}>
            <ViewerShipType value={channel.viewers} type="SUBS" />
            <ViewerShipType value={channel.vods} type="POSTS" />
            <ViewerShipType value={4} type="STREAKS" />
        </div>
    )
}

export const SubscribeButton: React.FC<{ overlay?: boolean }> = ({ overlay = false }) => {
    const [notification, setNotificationStatus] = useState(false)
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "30px"
        }}>
            <motion.button
                whileTap={{
                    scale: "0.9"
                }}
                style={{
                    width: "100px",
                    height: "25px",
                    fontSize: "13px",
                    fontFamily: "Poppins",
                    color: "silver",
                    backgroundColor: overlay ? "rgba(0,0,0,0.5)" : "#242429",
                    borderRadius: "10px",
                    borderWidth: "0",
                    outline: "none",
                    marginBottom: "20px",
                    cursor: "pointer"
                }}
            >
                subscribe
            </motion.button>
            <span
                className="material-icons"
                style={{
                    color: "grey",
                    fontSize: "15px",
                    marginBottom: "20px",
                    marginLeft: "10px",
                    cursor: "pointer"
                }}
                onClick={() => setNotificationStatus(prev => (!prev))}
            >
                {notification ? "notifications_active" : "notifications_off"}
            </span>
        </div>
    )
}

function resize_text_area(textbox: any) {
    var maxrows = 5
    var txt = textbox.value as string
    var cols = textbox.cols as number

    var arraytxt = txt.split('\n')
    var rows = arraytxt.length

    for (var i = 0; i < arraytxt.length; i++) rows += (arraytxt[i].length / cols);

    if (rows > maxrows) textbox.rows = maxrows
    else textbox.rows = rows
}

export const InputArea: React.FC<{
    cols: number,
    rows: number,
    size: number,
    placeholder?: string
}> = ({ cols, rows, size, placeholder = "" }) => {
    return (
        <div style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translate(-50%,0)",
            display: "flex",
            alignItems: "flex-end"
        }}>
            <textarea
                style={{
                    // width: "calc(100% - 30px)",
                    // height: "20px",
                    borderRadius: "5px",
                    backgroundColor: "#121212",
                    borderWidth: "0",
                    fontFamily: "Roboto Condensed",
                    fontWeight: "lighter",
                    color: "grey",
                    fontSize: `${size}px`,
                    padding: "5px 10px",
                    outline: "none",
                    resize: "none"
                }}
                placeholder={placeholder}
                cols={cols}
                rows={rows}
                id="content-preview-comment-input"
                name="content-preview-comment-input"
                onKeyUp={e => resize_text_area(e.target)}
                className="main-content-div"
            >

            </textarea>
            <span className="material-icons"
                style={{
                    color: "#F6E819",
                    fontSize: "17px",
                    position: "relative",
                    bottom: "5px",
                    marginLeft: "3px"
                }}
            >
                sentiment_satisfied_alt
            </span>
        </div>
    )
}