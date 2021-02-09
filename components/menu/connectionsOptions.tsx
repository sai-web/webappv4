import React, { useRef } from 'react'
import { animateTemplate, lanuchMenu, MenuType } from '../../core/utils/Events'
import { motion } from 'framer-motion'

import { closeOnOutwardClick } from '../../utils/auth'

const AccountInformation: React.FC<{
    domain: string,
    color: string,
    link: string,
}> = ({ domain, color, link }) => {
    return (
        <>
            <a href={link} target="_blank">
                <img
                    src="https://www.decentfashion.in/wp-content/uploads/2018/02/Cool-cool-profile-pictures-300x244.jpg"
                    style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "35px",
                        objectFit: "cover",
                        cursor: "pointer"
                    }}
                />
            </a>
            <h4 style={{
                fontFamily: "Poppins",
                fontSize: "15px",
                color: "white",
                fontWeight: "lighter",
                lineHeight: "0"
            }}>
                Arspec101
            </h4>
            <div style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                bottom: "15px"
            }}>
                <h4 style={{
                    fontFamily: "Poppins",
                    fontSize: "10px",
                    color: "grey",
                    fontWeight: "lighter",
                    lineHeight: "0"
                }}>
                    {domain}
                </h4>
                <h4 style={{
                    fontFamily: "Poppins",
                    fontSize: "10px",
                    color: "silver",
                    fontWeight: "lighter",
                    lineHeight: "0"
                }}>
                    Arspec101
                </h4>
            </div>
            <motion.button
                whileTap={{
                    scale: 0.9
                }}
                style={{
                    width: "100px",
                    height: "25px",
                    backgroundColor: color,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    color: "whitesmoke",
                    borderWidth: "0",
                    borderRadius: "5px",
                    outline: "none",
                    position: "relative",
                    bottom: "10px",
                    cursor: "pointer"
                }}
            >
                subscribe
            </motion.button>
        </>
    )
}

const RecentContent: React.FC<{ color: string }> = ({ color }) => {
    return (
        <div style={{
            display: "flex",
            marginLeft: "5px",
            marginTop: "20px",
            width: "calc(100% - 20px)"
        }}>
            <motion.div
                whileTap={{
                    scale: 0.95
                }}
                style={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <div style={{
                    height: "50px",
                    width: "3px",
                    backgroundColor: color
                }}>

                </div>
                <img src="https://pbs.twimg.com/media/EV8PrT7U8AA3kw8.jpg"
                    style={{
                        width: "100px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "5px",
                        marginLeft: "5px",
                        cursor: "pointer"
                    }}
                />
            </motion.div>
            <h4 style={{
                fontFamily: "Poppins",
                fontSize: "10px",
                color: "white",
                fontWeight: "lighter",
                width: "calc(100% - 100px)",
                position: "relative",
                bottom: "10px",
                left: "5px"
            }}>
                Fortnite challenge 2020! Lit af
            </h4>
        </div>
    )
}

interface ConnectionOptionsProps {
    domain: string
    color: string
    live?: boolean
    reference: React.MutableRefObject<any>
}

export const ConnectionsOptions: React.FC<ConnectionOptionsProps> = ({ domain, color, live = false, reference }) => {
    closeOnOutwardClick((value: boolean) => {
        lanuchMenu.emit({ type: MenuType.ConnectionMenu, display: value })
    }, [reference])
    return (
        <div style={{
            width: "230px",
            height: "320px",
            backgroundColor: "#2F3136",
            borderRadius: "10px",
            overflow: "hidden",
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center"
        }} ref={reference}>
            <div style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#202225",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <AccountInformation
                    domain={domain}
                    color={color}
                    link=""
                />
                {live ?
                    <div style={{
                        width: "40px",
                        height: "20px",
                        borderRadius: "5px",
                        border: "1.5px solid red",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        top: "10px",
                        right: "10px"
                    }}>
                        <h4 style={{
                            fontFamily: "Roboto Condensed",
                            fontSize: "15px",
                            color: "red"
                        }}>
                            Live
                        </h4>
                    </div> : ""
                }
            </div>
            <h4 style={{
                fontFamily: "Poppins",
                color: "grey",
                fontSize: "15px",
                fontWeight: "lighter",
                lineHeight: "0",
                paddingLeft: "10px"
            }}>
                Recently posted
            </h4>
            <RecentContent color={color} />
        </div>
    )
}