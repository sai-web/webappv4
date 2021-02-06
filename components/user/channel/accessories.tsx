import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { creators } from '../../home/fakeData/sideNav'
import { ViewerShipType } from '../../subscription-manager/viewer/categorizing'

export const ProfilePhoto: React.FC = () => {
    return (
        <img src={creators[2].photo}
            style={{
                width: "200px",
                height: "200px",
                borderRadius: "50px",
                objectFit: "cover"
            }}
        />
    )
}

export const ChannelSubs: React.FC = () => {
    return (
        <div style={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            // marginLeft: "10px"
        }}>
            <ViewerShipType value={24} type="SUBS" />
            <ViewerShipType value={10} type="PATRONS" />
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