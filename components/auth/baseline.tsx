import React from 'react'
import { motion } from 'framer-motion'

import Router from 'next/router'

interface Props {
    header: string
    subHeader: string
    height: string
    buttonName: string
    redirectURL: string
    inputs: () => JSX.Element
    redirectLinks: () => JSX.Element
    loaderState?: React.Dispatch<React.SetStateAction<boolean>>
}

const base: React.FC<Props> = ({ header, subHeader, height, buttonName, redirectURL, inputs, redirectLinks, loaderState }: Props) => {
    return (
        <div style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url('https://notify.me/science-dark.jpg')`,
            // filter: "invert(100%)"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "500px",
                height,
                backgroundColor: "#1B1E20",
                borderRadius: "10px"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "20px"
                }}>
                    <h2 style={{
                        fontFamily: "Roboto Condensed",
                        color: "whitesmoke",
                        lineHeight: "0"
                    }}>
                        {header}
                    </h2>
                    <h4 style={{
                        fontFamily: "Roboto Condensed",
                        color: "grey",
                        fontSize: "15px",
                        fontWeight: "lighter",
                        lineHeight: "0"
                    }}>
                        {subHeader}
                    </h4>
                </div>
                {inputs()}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    style={{
                        width: "calc(100% - 60px)",
                        height: "40px",
                        backgroundColor: "#4B6DFF",
                        fontFamily: "Roboto Condensed",
                        fontSize: "17px",
                        color: "white",
                        borderWidth: "0",
                        borderRadius: "20px",
                        marginTop: "15px",
                        outline: "none"
                    }}
                    onClick={() => {
                        loaderState !== undefined ? loaderState(true) : ""
                        setTimeout(() => {
                            Router.push(redirectURL)
                        }, 6000)
                    }}
                >
                    {buttonName}
                </motion.button>
                {redirectLinks()}
            </div>
        </div>
    )
}

export default base