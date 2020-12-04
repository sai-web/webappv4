import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface OptionsProps {
    title: string
    desc: string
    setState: React.Dispatch<React.SetStateAction<[boolean, boolean]>>
    state: boolean
}

const Options: React.FC<OptionsProps> = ({ title, desc, setState, state }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5px"
        }}>
            <div style={{
                position: "relative",
                display: "flex",
                width: "100%",
                alignItems: "center",
                maxHeight: "0"
            }}>
                <motion.div
                    whileTap={{
                        scale: 0.9
                    }}
                    style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        border: "solid 2px silver",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                    }}
                    onClick={() => setState([title === "Hyper", title === "None"])}
                >
                    <div style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "4px",
                        backgroundColor: "#4D6FFF",
                        display: state ? "flex" : "none"
                    }}>

                    </div>
                </motion.div>
                <h4 style={{
                    fontFamily: "sans-serif",
                    fontSize: "13px",
                    color: "silver",
                    marginLeft: "5px"
                }}>
                    {title}
                </h4>
            </div>
            <h4 style={{
                fontFamily: "sans-serif",
                fontSize: "10px",
                color: "grey",
                width: "calc(100% - 20px)",
                alignSelf: "flex-end"
            }}>{desc}</h4>
        </div>
    )
}

export const Moderations: React.FC = () => {
    const [[hyper, none], setOptions] = useState([false, true])
    return (
        <div style={{
            width: "calc(100% - 20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
        }}>
            <h4 style={{ fontFamily: "Roboto Condensed", color: "grey" }}>moderation</h4>
            <Options title="Hyper" desc="Only verified creators will be subscribed." setState={setOptions} state={hyper} />
            <Options title="None" desc="You can subscribe to anyone you want." setState={setOptions} state={none} />
        </div>
    )
}