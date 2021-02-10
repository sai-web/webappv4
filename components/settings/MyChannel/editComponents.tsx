import React from 'react'
import { motion } from 'framer-motion'

import { MultiSelectInput } from '../accessories'

export const ChannelTags: React.FC = () => {
    return (
        <div>
            <h4 style={{
                fontFamily: "Roboto Condensed",
                fontSize: "10px",
                color: "silver",
                lineHeight: "0"
            }}>
                TAGS
                </h4>
            <MultiSelectInput
                placeholder="channel tags"
                options={[
                    {
                        value: 'Creator',
                        chosen: true
                    },
                    {
                        value: 'Streamer',
                        chosen: true
                    },
                    {
                        value: 'Gamer',
                        chosen: false
                    },
                    {
                        value: 'Programmer',
                        chosen: true
                    },
                    {
                        value: 'Educator',
                        chosen: false
                    },
                    {
                        value: 'Athelete',
                        chosen: false
                    },
                    {
                        value: 'Artist',
                        chosen: false
                    },
                    {
                        value: 'Musician',
                        chosen: false
                    },
                    {
                        value: 'Innovator',
                        chosen: false
                    },
                ]}
                multiple
            />
        </div>
    )
}

export const EditAccountButtons: React.FC<{
    setEditStatus: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
    setEditStatus
}) => {
        return (
            <div style={{
                // width: "200px",
                // height: "20px",
                // backgroundColor: "red",
                position: "absolute",
                bottom: "10px",
                right: "10px",
                display: "flex"
            }}>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    style={{
                        width: "70px",
                        height: "30px",
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#18181B",
                        borderWidth: "0",
                        borderRadius: "5px",
                        outline: "none",
                        cursor: "pointer",
                        // marginLeft: "10px"
                    }}
                    onClick={() => setEditStatus(false)}
                >
                    Cancel
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    style={{
                        width: "70px",
                        height: "30px",
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#4D6FFF",
                        borderWidth: "0",
                        borderRadius: "5px",
                        outline: "none",
                        cursor: "pointer",
                        marginLeft: "10px"
                    }}
                >
                    Save
                </motion.button>
            </div>
        )
    }