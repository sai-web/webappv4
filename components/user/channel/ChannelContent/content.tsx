import React, { useEffect, useRef, useState } from 'react'
import { core } from '../../../../core'
import { lanuchMenu, MenuType, contentPreview } from '../../../../core/utils/Events'
import { motion } from 'framer-motion'

// import { mainContentData } from '../../../home/fakeData/home'
import { animateTemplate } from '../../../../core/utils/Events'

import { ContentFilter } from './filter'

import { platforms } from '../../../../core/utils/platforms'
import { convertNumericTypeToPresentableString, convertPublicationDateToPresentableString } from '../../../../utils/Hooks/numericEncoder'
import { usePulse } from '@pulsejs/react'

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
                    contentPreview.emit({ show: true, vod_id })
                    animateTemplate.emit({ display: true })
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

const ContentCard: React.FC<{ content: any }> = ({ content }) => {
    return (
        <div style={{
            width: "100%",
            height: "110px",
            marginTop: "10px",
            display: "flex",
            position: "relative"
        }}>
            <ContentThumbnail
                thumbnail={content.thumbnail}
                vod_id={content.vod_id}
                platformProperties={Object.values(platforms).find(element => element.name.toLocaleLowerCase() === content.platform.toLocaleLowerCase())}
            />
            <div style={{
                width: "calc(100% - 240px)",
                marginLeft: "20px",
                height: "100%",
                position: "relative",
                bottom: "20px"
            }}>
                <h4 style={{
                    fontFamily: "Whitney",
                    fontWeight: "lighter",
                    fontSize: "20px",
                    color: "silver"
                }}>
                    {content.title}
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
                        data={convertPublicationDateToPresentableString(content.published_at)}
                    />
                    <ContentDetails
                        logo="person"
                        data={convertNumericTypeToPresentableString(content.views)}
                    />
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
                    lanuchMenu.emit({ type: MenuType.ContentMenu, display: true, vod_id: content.vod_id })
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

const ChannelContent: React.FC<{
    content: any[]
}> = ({ content }) => {
    return (
        <div style={{
            width: "calc(100% - 40px)",
            height: "460px",
            overflowY: "scroll"
        }} className="main-content-div">
            {
                content.map((vod, index) => {
                    return (
                        <ContentCard content={vod} key={index} />
                    )
                })
            }
        </div>
    )
}

export const Content: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
    const content = usePulse(core.vod.collections.vods.getGroup('default'))
    const [renderingContent, setContentToRender] = useState<object[]>(content)
    useEffect(() => {
        setContentToRender(content)
    }, [content])
    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "sticky",
            top: "100px"
        }}>
            <ContentFilter
                setContent={setContentToRender}
            />
            {
                renderingContent.length === 0 ?
                    <div style={{
                        // backgroundColor: "green",
                        width: "calc(100% - 50px)",
                        height: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <h4 style={{
                            fontFamily: "Poppins",
                            color: "white",
                            fontSize: "15px",
                            fontWeight: "lighter",
                            lineHeight: "0"
                        }}>
                            Looks like there is no content yet...
                        </h4>
                        <h4 style={{
                            fontFamily: "Poppins",
                            color: "grey",
                            fontSize: "12px",
                            fontWeight: "lighter",
                            lineHeight: "0"
                        }}>
                            Start posting so that you can build an audience on our platform
                        </h4>
                        <h4 style={{
                            fontFamily: "Poppins",
                            color: "grey",
                            fontSize: "12px",
                            fontWeight: "lighter",
                            lineHeight: "0",
                            position: "relative",
                            bottom: "10px"
                        }}>
                            Posting content will earn you channel points that will help you reach a wider audience.
                        </h4>
                    </div>
                    :
                    <ChannelContent
                        content={renderingContent}
                    />
            }
        </div>
    )
}