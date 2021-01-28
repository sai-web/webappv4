import React from 'react'
import { motion } from 'framer-motion'

import Router from 'next/router'

interface Props {
    header: string
    subHeader: string
    height: string
    buttonName: string
    inputs: () => JSX.Element
    redirectLinks: () => JSX.Element
    filled: Boolean
    onClickFunc: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

const base: React.FC<Props> = ({ header, subHeader, height, buttonName, inputs, redirectLinks, filled, onClickFunc }: Props) => {
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
            backgroundImage: `url('https://cdn.statically.io/img/i.pinimg.com/736x/17/06/b6/1706b65720ee6671eaa6bf5db59a4d3a.jpg')`,
            // filter: "invert(100%)"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "400px",
                height,
                backgroundColor: "#1B1E20",
                borderRadius: "10px",
                position: "relative"
            }}>
                <div style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#313339",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    left: "10px",
                    top: "10px",
                    cursor: "pointer"
                }}
                    onClick={() => Router.back()}
                >
                    <span className="material-icons" style={{ color: "grey" }}>
                        keyboard_arrow_left
                    </span>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "20px"
                }}>
                    <h2 style={{
                        fontFamily: "sans-serif",
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
                        outline: "none",
                        opacity: filled ? "1" : "0.5"
                    }}
                    onClick={onClickFunc}
                    disabled={filled ? false : true}
                >
                    {buttonName}
                </motion.button>
                {redirectLinks()}
            </div>
        </div>
    )
}

export default base