import React from 'react'

interface stream {
    thumbnail: string;
    title: string;
    link: string;
}

interface Props {
    streams: stream[]
}

export const YoutubeStreams: React.FC<Props> = ({ streams }) => {
    return (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                margin: "20px"
            }}>
                <i className="fa fa-youtube-play" style={{
                    fontSize: "50px",
                    color: "white"
                }}></i>
                <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "40px", lineHeight: "0", marginLeft: "10px", }}>Youtube</h4>
            </div>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                // backgroundColor: "green",
                marginLeft: "50px",
                position: "relative",
                bottom: "20px"
            }}>
                {
                    streams.map((stream, index) => {
                        return (
                            <div key={index} style={{ margin: "0 10px" }}>
                                <img
                                    src={stream.thumbnail}
                                    alt="youtube-stream"
                                    style={{
                                        width: "200px",
                                        height: "100px",
                                        objectFit: "cover"
                                    }}
                                />
                                <h4 style={{
                                    fontFamily: "Roboto Condensed",
                                    color: "white",
                                    fontWeight: "lighter",
                                    lineHeight: "0",
                                    position: "relative",
                                    bottom: "5px"
                                }}>{stream.title.length > 30 ? stream.title.slice(0, 30) + '...' : stream.title}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}