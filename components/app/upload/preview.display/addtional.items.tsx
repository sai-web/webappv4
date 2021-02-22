import React from 'react'

interface PlatformIconProps {
    details: {
        logo: string,
        name: string
    }
}

export const PlatformIcon: React.FC<PlatformIconProps> = ({
    details: {
        logo,
        name
    }
}) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            margin: "0 20px"
        }}>
            <img src={logo}
                style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    objectFit: "cover"
                }}
            />
            <div style={{
                marginLeft: "5px"
            }}>
                <h4 style={{
                    fontFamily: "Whitney",
                    fontSize: "20px",
                    color: "white",
                    lineHeight: "0"
                }}>
                    {name}
                </h4>
                <h4 style={{
                    fontFamily: "Poppins",
                    fontSize: "10px",
                    color: "grey",
                    lineHeight: "0",
                    paddingBottom: "10px",
                    position: "relative",
                    bottom: "5px"
                }}>
                    This post will launch the {name} app
                    </h4>
            </div>
        </div>
    )
}

export const NotificationInformation: React.FC = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center"
        }}>
            <div style={{
                width: "35px",
                height: "35px",
                backgroundColor: "#4D6FFF",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <span className="material-icons"
                    style={{
                        color: "white"
                    }}
                >
                    notifications
                </span>
            </div>
            <div style={{
                width: "200px",
                marginLeft: "10px"
            }}>
                <h4 style={{
                    fontFamily: "Whitney",
                    color: "white",
                    fontSize: "15px",
                    lineHeight: "0",
                    position: "relative",
                    top: "10px"
                }}>
                    Notifications
                </h4>
                <h4 style={{
                    fontFamily: "Poppins",
                    color: "grey",
                    fontSize: "10px"
                }}>
                    This post will send a notification to all your subscribers.
                </h4>
            </div>
        </div>
    )
}

export const BonusPoints: React.FC = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            margin: "0 20px"
        }}>
            <div style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#18181B",
                borderRadius: "50%"
            }}>
                <span className="material-icons"
                    style={{
                        fontSize: "25px",
                        color: "silver"
                    }}
                >
                    auto_fix_high
                </span>
            </div>
            <div style={{
                marginLeft: "5px"
            }}>
                <h4 style={{
                    fontFamily: "Roboto Condensed",
                    fontWeight: "lighter",
                    fontSize: "15px",
                    color: "silver",
                    lineHeight: "0"
                }}>
                    Channel Points
                </h4>
                <h4 style={{
                    fontFamily: "Roboto Condensed",
                    fontSize: "10px",
                    color: "grey",
                    lineHeight: "0",
                    // paddingBottom: "10px",
                    position: "relative",
                    bottom: "5px"
                }}>
                    You will get 20 points with this post
                </h4>
            </div>
        </div>
    )
}