import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { core } from '../../core'
import { lanuchMenu, animateTemplate, MenuType } from '../../core/utils/Events'
import { convertPublicationDateToPresentableString, convertNumericTypeToPresentableString } from '../../utils/Hooks/numericEncoder'

interface creatorInfoProps {
    username: string
    user_id: string
}

const CreatorInfo: React.FC<creatorInfoProps> = ({ user_id, username }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center"
        }}>
            <img
                src={`http://localhost:5002/app/photo?photo=${user_id}`}
                style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    objectFit: "cover"
                }}
            />
            <h4 style={{
                fontFamily: "Poppins",
                color: "silver",
                fontSize: "12px",
                lineHeight: "0",
                marginLeft: "5px"
            }}>
                {username}
            </h4>
        </div>
    )
}

interface contentCardProps {
    url: string
    thumbnail: string
    logo: string
    vod_id: string
}

const ContentCard: React.FC<contentCardProps> = ({
    logo,
    thumbnail,
    url,
    vod_id
}) => {
    return (
        <a href={url} target="_blank">
            <motion.div
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    bounce: 0.35
                }}
                style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                    position: "relative"
                }}
                onContextMenu={e => {
                    e.preventDefault()
                    animateTemplate.emit({ display: true })
                    lanuchMenu.emit({
                        display: true,
                        type: MenuType.ContextMenu,
                        vod_id,
                        position: {
                            x: e.pageX,
                            y: e.pageY,
                            width: window.innerWidth,
                            height: window.innerHeight
                        }
                    })
                }}
            >
                <img src={thumbnail}
                    style={{
                        width: "190px",
                        height: "110px",
                        objectFit: "cover",
                        borderRadius: "5px"
                    }}
                />
                <div style={{
                    width: "60px",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    position: "absolute",
                    right: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px"
                }}>
                    <img src={logo} style={{
                        width: "40px",
                        height: "40px",
                        // borderRadius: "25px",
                        objectFit: "cover"
                    }} />
                </div>
            </motion.div>
        </a>
    )
}

interface GeneralThumbnailProps {
    data: {
        color: string,
        thumbnail: string,
        logo: string,
        url: string,
        wideThumb: boolean,
        title: string,
        views: number,
        published_at: Date,
        creator_id: string,
        vod_id: string
    }
}

export const GeneralCard: React.FC<GeneralThumbnailProps> = ({ data }) => {
    const [userInfo, setUserInfo] = useState<any>({})
    core.user.info({
        payload: {
            username: true,
            domain: true
        },
        me: false,
        cred: data.creator_id,
        type: "id"
    }, false)
        .then(data => setUserInfo(data))
    return (
        <div style={{
            width: "200px",
            // backgroundColor: "green"
        }}>
            <CreatorInfo
                user_id={data.creator_id}
                username={userInfo.username}
            />
            <ContentCard
                logo={data.logo}
                thumbnail={data.thumbnail}
                url={data.url}
                vod_id={data.vod_id}
            />
            <h4 style={{
                fontFamily: "Poppins",
                color: "silver",
                fontSize: "10px"
            }}>
                {data.title.length > 40 ? data.title.slice(0, 40) + '...' : data.title}
            </h4>
            <div style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                position: "relative",
                bottom: "10px"
            }}>
                <h4 style={{
                    fontFamily: "Whitney",
                    fontSize: "11px",
                    color: "grey",
                    lineHeight: "0"
                }}>
                    {convertPublicationDateToPresentableString(new Date(data.published_at))}
                </h4>
                <h4 style={{
                    fontFamily: "Whitney",
                    fontSize: "11px",
                    color: "#4D6FFF",
                    lineHeight: "0"
                }}>
                    {convertNumericTypeToPresentableString(data.views)} notified
                </h4>
            </div>
        </div>
    )
}