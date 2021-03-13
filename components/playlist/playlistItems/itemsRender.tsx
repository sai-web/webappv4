import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { core } from '../../../core'

import { platforms } from '../../../core/utils/platforms'
import { convertNumericTypeToPresentableString, convertPublicationDateToPresentableString } from '../../../utils/Hooks/numericEncoder'

import Router from 'next/router'
import { usePulse } from '@pulsejs/react'
import { animateTemplate, confirmNotice, lanuchMenu, MenuType } from '../../../core/utils/Events'

const ContentThumbnail: React.FC<{
    thumbnail: string,
    platformProperties: any,
    vod_id: string
}> = ({
    thumbnail,
    platformProperties,
    vod_id
}) => {
        return (
            <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "tween",
                    // bounce: 0.35
                }}
                whileTap={{
                    scale: 0.9
                }}
                style={{
                    width: "200px",
                    height: "105px",
                    display: "flex",
                    cursor: "pointer"
                }}
                onClick={() => {
                    core.vod.collections.vods.selectors.CURRENT.select(vod_id)
                }}
            >
                <div style={{
                    height: "100%",
                    width: "3px",
                    backgroundColor: platformProperties?.hex
                }}>

                </div>
                {platformProperties.wideThumb ?
                    <img src={thumbnail}
                        style={{
                            width: "calc(100% - 10px)",
                            height: "100%",
                            objectFit: "cover",
                            marginLeft: "5px"
                        }}
                    /> :
                    <div style={{
                        width: "calc(100% - 10px)",
                        height: "100%",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <img src={thumbnail}
                            style={{
                                height: "100%",
                                // objectFit: "cover",
                                marginLeft: "5px"
                            }}
                        />
                        <div style={{
                            height: "100%",
                            width: "100px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "black"
                        }}>
                            <img src={platformProperties?.logo} style={{
                                width: "50px",
                                height: "50px",
                                // borderRadius: "25px",
                                objectFit: "cover"
                            }} />
                        </div>
                    </div>
                }
            </motion.div>
        )
    }

const ContentDetails: React.FC<{ logo: string, data: string }> = ({ logo, data }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center"
        }}>
            <span className="material-icons"
                style={{
                    color: "grey",
                    fontSize: "15px"
                }}
            >
                {logo}
            </span>
            <h4 style={{
                fontFamily: "Poppins",
                color: "grey",
                fontSize: "10px",
                marginLeft: "10px"
            }}>
                {data}
            </h4>
        </div>
    )
}

const ItemCard: React.FC<{ data: any }> = ({
    data
}) => {
    const initialState = { photo: "", username: "", domain: "" }
    const [userInfo, setUserInfo] = useState<{ photo: string, username: string, domain: string }>(initialState)
    useEffect(() => {
        core.user.info({
            payload: {
                photo: true,
                domain: true,
                username: true
            },
            me: false,
            cred: data.user_id,
            type: "id"
        }, false)
            .then(data => {
                setUserInfo(data || initialState)
            })
    })
    return (
        <div style={{
            width: "100%",
            // backgroundColor: "grey",
            margin: "10px 0",
            display: "flex"
        }}>
            <ContentThumbnail
                thumbnail={data.thumbnail}
                vod_id={data.vod_id}
                platformProperties={Object.values(platforms).find(element => element.name.toLocaleLowerCase() === data.platform.toLocaleLowerCase())}
            />
            <div style={{
                width: "calc(100% - 225px)",
                // backgroundColor: "red",
                height: "105px",
                overflow: "hidden",
                paddingLeft: "10px"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    bottom: "5px"
                }}>
                    <img
                        src={userInfo.photo}
                        style={{
                            width: "25px",
                            height: "25px",
                            borderRadius: "50%"
                        }}
                    />
                    <div style={{ marginLeft: "5px" }}>
                        <h4 style={{
                            fontFamily: "Poppins",
                            fontSize: "10px",
                            color: "silver",
                            lineHeight: "0"
                        }}>
                            {userInfo.username}
                        </h4>
                        <h4 style={{
                            fontFamily: "Poppins",
                            fontSize: "7px",
                            color: "grey",
                            lineHeight: "0"
                        }}>
                            {userInfo.domain}
                        </h4>
                    </div>
                </div>
                <div style={{
                    position: "relative",
                    bottom: "30px"
                }}>
                    <h4 style={{
                        fontFamily: "Whitney",
                        fontWeight: "lighter",
                        fontSize: "20px",
                        color: "silver"
                    }}>
                        {data.title.length > 40 ? (data.title as string).slice(0, 40) + '...' : data.title}
                    </h4>
                    <div style={{
                        display: "flex",
                        position: "relative",
                        bottom: "30px",
                        width: "150px",
                        justifyContent: "space-between"
                    }}>
                        <ContentDetails
                            logo="watch_later"
                            data={convertPublicationDateToPresentableString(new Date(data.published_at))}
                        />
                        <ContentDetails
                            logo="person"
                            data={convertNumericTypeToPresentableString(data.views)}
                        />
                    </div>
                </div>
            </div>
            <div style={{
                width: "30px",
                height: "30px",
                borderRadius: "15px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
                onClick={() => {
                    core.vod.collections.vods.selectors.CURRENT.select(data.vod_id)
                    lanuchMenu.emit({
                        type: MenuType.ContentMenu,
                        display: true
                    })
                    animateTemplate.emit({
                        display: true
                    })
                }}
            >
                <i className="fa fa-ellipsis-v" style={{
                    color: "grey",
                    fontSize: "15px"
                }}></i>
            </div>
        </div>
    )
}

export const PlaylistItems: React.FC = () => {
    const playlistItems = usePulse(core.vod.collections.vods.getGroup('default'))
    useEffect(() => {
        core.vod.getPlaylist(Router.query.playlist_name as string)
    }, [])
    return (
        <div style={{
            height: "100%",
            flex: 1,
            overflowY: "scroll"
            // backgroundColor: "red"
        }} className="main-content-div">
            <div style={{
                width: "calc(100% - 10px)",
                height: "40px",
                borderRadius: "5px",
                backgroundColor: "#18181B",
                margin: "10px 10px 10px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <motion.span
                    whileTap={{
                        scale: 0.9
                    }}
                    className="material-icons"
                    style={{
                        color: "#4D6FFF",
                        fontSize: "20px",
                        margin: "0 10px",
                        cursor: "pointer"
                    }}
                    onClick={() => {
                        confirmNotice.emit({
                            show: true,
                            message: {
                                header: `Delete "${Router.query.playlist_name}"`,
                                body: "Are you sure that you want to delete this playlist. Once deleted you cannot retain it."
                            },
                            do: () => {
                                core.vod.deletePlaylist(Router.query.playlist_name as string)
                                setTimeout(() => {
                                    Router.push('/app/fav/library', '/app/fav/library', { shallow: true })
                                }, 1000)
                                return null
                            }
                        })
                        animateTemplate.emit({ display: true })
                    }}
                >
                    delete_forever
                </motion.span>
                <motion.span
                    whileTap={{
                        scale: 0.9
                    }}
                    className="material-icons"
                    style={{
                        color: "silver",
                        fontSize: "20px",
                        margin: "0 10px",
                        cursor: "pointer"
                    }}
                    onClick={() => {
                        const vod_id = core.vod.collections.vods.selectors.CURRENT.value.vod_id
                        const idArr = core.vod.collections.vods.getGroup('default').value
                        for (var id = 0; id < idArr.length; id++) {
                            if (idArr[id] === vod_id && idArr[id - 1]) {
                                core.vod.collections.vods.selectors.CURRENT.select(idArr[id - 1])
                                break
                            }
                        }
                    }}
                >
                    skip_previous
                </motion.span>
                <div style={{
                    width: "2px",
                    height: "10px",
                    backgroundColor: "grey"
                }}>

                </div>
                <motion.span
                    whileTap={{
                        scale: 0.9
                    }}
                    className="material-icons"
                    style={{
                        color: "silver",
                        fontSize: "20px",
                        margin: "0 10px",
                        cursor: "pointer"
                    }}
                    onClick={() => {
                        const vod_id = core.vod.collections.vods.selectors.CURRENT.value.vod_id
                        const idArr = core.vod.collections.vods.getGroup('default').value
                        for (var id = 0; id < idArr.length; id++) {
                            if (idArr[id] === vod_id && idArr[id + 1]) {
                                core.vod.collections.vods.selectors.CURRENT.select(idArr[id + 1])
                                break
                            }
                        }
                    }}
                >
                    skip_next
                </motion.span>
                <motion.span
                    whileTap={{
                        scale: 0.9
                    }}
                    className="material-icons"
                    style={{
                        color: "silver",
                        fontSize: "20px",
                        margin: "0 10px",
                        cursor: "pointer"
                    }}
                >
                    share
                </motion.span>
            </div>
            {
                playlistItems.map((item, index) => {
                    return (
                        <ItemCard data={item} key={`playlist-display-item-${index}`} />
                    )
                })
            }
        </div>
    )
}