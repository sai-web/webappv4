import React from 'react'

const Platform: React.FC<{
    name: string,
    logo: JSX.Element
}> = ({
    name,
    logo
}) => {
        return (
            <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "5px",
                backgroundColor: "#0E0E10",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // marginLeft: "10px"
            }}>
                {logo}
            </div>
        )
    }

const platforms = [
    {
        name: 'twitch',
        logo: () => (
            <i className="fa fa-twitch"
                style={{
                    fontSize: "20px",
                    color: "#6441a5"
                }}
            ></i>
        )
    },
    {
        name: 'youtube',
        logo: () => (
            <i className="fa fa-youtube-play"
                style={{
                    fontSize: "20px",
                    color: "#c4302b"
                }}
            ></i>
        )
    },
    {
        name: 'spotify',
        logo: () => (
            <i className="fa fa-spotify"
                style={{
                    fontSize: "20px",
                    color: "#1DB954"
                }}
            ></i>
        )
    },
    {
        name: 'twitter',
        logo: () => (
            <i className="fa fa-twitter"
                style={{
                    fontSize: "20px",
                    color: "#1DA1F2"
                }}
            ></i>
        )
    },
    {
        name: 'facebook',
        logo: () => (
            <i className="fa fa-facebook-f"
                style={{
                    fontSize: "20px",
                    color: "#3b5998"
                }}
            ></i>
        )
    },
    {
        name: 'instagram',
        logo: () => (
            <i className="fa fa-instagram"
                style={{
                    fontSize: "20px",
                    color: "#cd486b"
                }}
            ></i>
        )
    },
    {
        name: 'soundcloud',
        logo: () => (
            <i className="fa fa-soundcloud"
                style={{
                    fontSize: "20px",
                    color: "#ff7700"
                }}
            ></i>
        )
    },
    {
        name: 'github',
        logo: () => (
            <i className="fa fa-github"
                style={{
                    fontSize: "20px",
                    color: "#fff"
                }}
            ></i>
        )
    },
    {
        name: 'linkedin',
        logo: () => (
            <i className="fa fa-linkedin-square"
                style={{
                    fontSize: "20px",
                    color: "#0e76a8"
                }}
            ></i>
        )
    },
]

const ConnectionsDiv: React.FC = () => {
    return (
        <div style={{
            width: "calc(100% - 100px)",
            height: "80px",
            borderRadius: "5px",
            backgroundColor: "#121212",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly"
        }}>
            {platforms.map((platform, index) => {
                return (
                    <Platform
                        name={platform.name}
                        logo={platform.logo()}
                        key={`integration-platforms-${index}`}
                    />
                )
            })}
        </div>
    )
}

export const ConnectionDisplay: React.FC = () => {
    return (
        <div>
            <div style={{
                height: "100%"
            }}>
                <div style={{
                    width: "700px",
                    height: "100%",
                    position: "relative",
                    // backgroundColor: "red",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <div style={{
                        width: "calc(100% - 100px)"
                    }}>
                        <h4 style={{
                            fontFamily: "Whitney",
                            fontSize: "15px",
                            color: "silver"
                        }}>
                            Connections
                        </h4>
                    </div>
                    <ConnectionsDiv />
                </div>
            </div>
        </div>
    )
}