import React from 'react'
import { mainContentData } from '../../home/fakeData/home'

import { ContentFilter } from './filter'

const ContentThumbnail: React.FC<{ thumbnail: string }> = ({ thumbnail }) => {
    return (
        <div style={{
            width: "200px",
            height: "105px",
            display: "flex"
        }}>
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
        </div>
    )
}

const ContentCard: React.FC<{ content: any }> = ({ content }) => {
    return (
        <div style={{
            width: "100%",
            height: "110px",
            marginTop: "10px",
            display: "flex"
        }}>
            <ContentThumbnail thumbnail={content.thumbnail} />
            <div style={{
                width: "calc(100% - 220px)",
                marginLeft: "20px",
                height: "100%",
            }}>
                <h4 style={{ fontFamily: "Roboto Condensed", fontWeight: "lighter", fontSize: "20px", color: "silver" }}>{content.title}</h4>
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
            alignItems: "center"
        }}>
            <ContentFilter />
            <ChannelContent />
        </div>
    )
}