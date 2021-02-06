import React, { useEffect, useRef, useState } from 'react'
import { lanuchMenu, MenuType, contentPreview } from '../../../core/utils/Events'
import { motion } from 'framer-motion'
import { mainContentData } from '../../home/fakeData/home'
import { animateTemplate } from '../../../core/utils/Events'

import { ContentFilter } from './filter'

const ContentThumbnail: React.FC<{ thumbnail: string }> = ({ thumbnail }) => {
    return (
        <motion.div
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
                contentPreview.emit({ show: true })
                animateTemplate.emit({ display: true })
            }}
        >
            <div style={{
                height: "100%",
                width: "3px",
                backgroundColor: "red"
            }}>

            </div>
            <img src={thumbnail}
                style={{
                    width: "calc(100% - 10px)",
                    height: "100%",
                    objectFit: "cover",
                    marginLeft: "5px"
                }}
            />
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
            <ContentThumbnail thumbnail={content.thumbnail} />
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
                    <ContentDetails logo="watch_later" data="2 hours ago" />
                    <ContentDetails logo="person" data="20" />
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
                    lanuchMenu.emit({ type: MenuType.ContentMenu, display: true })
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

const ChannelContent: React.FC = () => {
    return (
        <div style={{
            width: "calc(100% - 40px)",
            height: "460px",
            overflowY: "scroll"
        }} className="main-content-div">
            {
                mainContentData.map((content, index) => {
                    return (
                        <ContentCard content={content} key={index} />
                    )
                })
            }
        </div>
    )
}

export const Content: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "sticky",
            top: "100px"
        }}>
            <ContentFilter />
            <ChannelContent />
        </div>
    )
}