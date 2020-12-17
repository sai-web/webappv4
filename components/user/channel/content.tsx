import React from 'react'
import { mainContentData } from '../../home/fakeData/home'

const ContentFilterWord: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div
            style={{
                height: "26px",
                backgroundColor: "#242429",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                padding: "0 5px",
                borderRadius: "13px",
                cursor: "pointer"
            }}
        >
            <h4 style={{
                lineHeight: "0",
                fontFamily: "sans-serif",
                color: "silver",
                fontWeight: "lighter",
                fontSize: "13px"
            }}>{name}</h4>
        </div>
    )
}

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
            <div style={{
                width: "calc(100% - 40px)",
                height: "40px",
                backgroundColor: "#18181B",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center"
            }}>
                <div style={{
                    width: "calc(100% - 260px)",
                    overflowX: "scroll",
                    display: "flex",
                    alignItems: "center"
                }} className="main-content-div">
                    <ContentFilterWord name="twitch" />
                    <ContentFilterWord name="youtube" />
                    <ContentFilterWord name="music" />
                    <ContentFilterWord name="vlogs" />
                    <ContentFilterWord name="commentary" />
                </div>
                <input
                    type="text"
                    placeholder="filter content"
                    style={{
                        width: "250px",
                        height: "20px",
                        marginRight: "10px",
                        backgroundColor: "#242429",
                        borderWidth: "0",
                        borderRadius: "5px",
                        fontFamily: "sans-serif",
                        fontSize: "12px",
                        color: "grey",
                        paddingLeft: "10px"
                    }}
                />
            </div>
            <ChannelContent />
        </div>
    )
}