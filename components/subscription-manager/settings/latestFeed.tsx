import React from 'react'
import { creators } from '../../home/fakeData/sideNav'
import { albums } from '../../home/fakeData/music'

const ChannelDescription: React.FC = () => {
    return (
        <div style={{
            width: "100%",
            height: "50%",
            backgroundColor: "#292B2F",
            display: "flex",
            alignItems: "center"
        }}>
            <img
                src={creators[1].photo}
                alt="latest-feed-creator"
                style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginLeft: "10px"
                }}
            />
            <div style={{
                marginLeft: "10px"
            }}>
                <h4 style={{
                    fontFamily: "Roboto Condensed",
                    fontWeight: "lighter",
                    color: "white",
                    fontSize: "15px",
                    lineHeight: "0"
                }}>
                    {creators[1].name.length > 15 ? creators[1].name.slice(0, 15) + '...' : creators[1].name}
                </h4>
                <h4 style={{
                    fontFamily: "sans-serif",
                    color: "grey",
                    fontSize: "10px",
                    lineHeight: "0",
                    position: "relative",
                    bottom: "5px"
                }}>
                    {creators[1].domain}
                </h4>
            </div>
        </div>
    )
}

const ContentDescription: React.FC = () => {
    return (
        <div style={{
            width: "100%",
            height: "50%",
            backgroundColor: "#2F3136",
            display: "flex",
            alignItems: "center"
        }}>
            <img
                src={albums[0].thumbnail}
                alt="latest-feed-thumbnail"
                style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "5px",
                    marginLeft: "10px"
                }}
            />
            <div style={{
                width: "130px",
                height: "50px",
                marginLeft: "10px"
            }}>
                <h4 style={{
                    fontFamily: "Roboto Condensed",
                    fontWeight: "lighter",
                    color: "white",
                    fontSize: "15px"
                }}>
                    {albums[0].title}
                </h4>
            </div>
        </div>
    )
}

export const LatestFeed: React.FC = () => {
    return (
        <div style={{
            width: "calc(100% - 10px)",
            height: "120px",
            borderRadius: "5px",
            overflow: "hidden"
        }}>
            <ChannelDescription />
            <ContentDescription />
        </div>
    )
}