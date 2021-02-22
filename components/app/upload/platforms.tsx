import React from 'react'

export const Platforms = {
    youtube: {
        logo: <i className="fa fa-youtube-play"
            style={{
                color: "white",
                fontSize: "30px",
                marginTop: "10px"
            }}
        >

        </i>,
        name: "YouTube",
        description: "Retrieve your videos and live streams instantly",
        color: "#f02222"
    },
    twitch: {
        logo: <i className="fa fa-twitch"
            style={{
                color: "white",
                fontSize: "30px",
                marginTop: "10px"
            }}
        >

        </i>,
        name: "Twitch",
        description: "Retrieve your clips, vods and live streams instantly",
        color: "#6441a5"
    },
    spotify: {
        logo: <i className="fa fa-spotify"
            style={{
                color: "white",
                fontSize: "30px",
                marginTop: "10px"
            }}
        >

        </i>,
        name: "Spotify",
        description: "Retrieve your songs, playlists and albums instantly",
        color: "#1DB954"
    },
}