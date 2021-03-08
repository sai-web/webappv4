import React from 'react'

const PlayListHeader: React.FC = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center"
        }}>
            <span className="material-icons"
                style={{
                    fontSize: "25px",
                    color: "silver",
                    marginLeft: "30px"
                }}
            >
                video_library
            </span>
            <h4 style={{
                fontFamily: "Whitney",
                fontSize: "20px",
                color: "silver",
                marginLeft: "5px",
                lineHeight: "0"
            }}>
                Playlists
            </h4>
        </div>
    )
}

const Content: React.FC = () => {
    return (
        <div>
            <h4 style={{
                fontFamily: "Poppins",
                color: "grey",
                fontSize: "13px",
                lineHeight: "0",
                marginLeft: "30px"
            }}>
                Playlists that you create will show up here.
            </h4>
        </div>
    )
}

export const PlayList: React.FC = () => {
    return (
        <div>
            <PlayListHeader />
            <Content />
        </div>
    )
}