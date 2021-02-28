import React from 'react'
import { motion } from 'framer-motion'

const AdvancedOptionButtons: React.FC<{
    color: string
}> = ({ color, children }) => {
    return (
        <motion.button
            whileTap={{
                scale: 0.9
            }}
            style={{
                display: "flex",
                backgroundColor: color,
                borderRadius: "5px",
                width: "90px",
                height: "25px",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: "0",
                outline: "none",
                cursor: "pointer"
            }}
        >
            {children}
        </motion.button>
    )
}

interface AdvancedOptionsProps {
    url: string
    platform: string
}

const mapPlatformToOptionDetails: Record<string, { color: string, logo: JSX.Element }> = {
    youtube: {
        color: "#c4302b",
        logo: <i className="fa fa-youtube-play" style={{ color: "silver", fontSize: "20px" }}></i>
    },
    spotify: {
        color: "#1aa34a",
        logo: <i className="fa fa-spotify" style={{ color: "silver", fontSize: "20px" }}></i>
    }
}

export const AdvancedOptionsSection: React.FC<AdvancedOptionsProps> = ({
    url,
    platform
}) => {
    return (
        <div style={{
            display: "flex",
            width: "calc(100% -  20px)",
            justifyContent: "space-evenly"
        }}>
            <AdvancedOptionButtons color="#242429">
                <span className="material-icons"
                    style={{
                        color: "grey",
                        fontSize: "18px"
                    }}
                >
                    cast_connected
                </span>
                <h4 style={{
                    fontFamily: "Roboto Condensed",
                    fontSize: "18px",
                    color: "silver",
                    fontWeight: "lighter",
                    marginLeft: "5px"
                }}>
                    cast
                </h4>
            </AdvancedOptionButtons>
            <AdvancedOptionButtons color="#242429">
                <span className="material-icons"
                    style={{
                        color: "grey",
                        fontSize: "18px"
                    }}
                >
                    ios_share
                </span>
                <h4 style={{
                    fontFamily: "Roboto Condensed",
                    fontSize: "18px",
                    color: "silver",
                    fontWeight: "lighter",
                    marginLeft: "5px"
                }}>
                    share
                </h4>
            </AdvancedOptionButtons>
            <a href={url} target="_blank" style={{
                textDecoration: "none"
            }}>
                <AdvancedOptionButtons color={mapPlatformToOptionDetails[platform]?.color}>
                    {mapPlatformToOptionDetails[platform]?.logo}
                    <h4 style={{
                        fontFamily: "Roboto Condensed",
                        fontSize: "18px",
                        color: "silver",
                        fontWeight: "lighter",
                        marginLeft: "5px"
                    }}>
                        open
                    </h4>
                </AdvancedOptionButtons>
            </a>
        </div>
    )
}