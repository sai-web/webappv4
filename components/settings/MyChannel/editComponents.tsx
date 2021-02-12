import React from 'react'
import { motion } from 'framer-motion'
import { usePulse } from '@pulsejs/react'

import { core } from '../../../core'

import { MultiSelectInput } from '../accessories'

const allOptions = [
    'Creator',
    'Streamer',
    'Gamer',
    'Programmer',
    'Educator',
    'Athelete',
    'Artist',
    'Musician',
    'Innovator'
]

export const ChannelTags: React.FC<{
    setTags: React.Dispatch<React.SetStateAction<string[]>>
}> = ({ setTags }) => {
    const { tags } = usePulse(core.user.state.info)
    const factoredOptions = allOptions.map((option) => {
        if (tags?.includes(option)) return { value: option, chosen: true }
        return { value: option, chosen: false }
    })
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
                options={factoredOptions}
                multiple
                setState={setTags}
            />
        </div>
    )
}

type accountDetails = {
    username: string,
    email: string,
    description: string,
    tags: string
    domain?: string
}

export const EditAccountButtons: React.FC<{
    setEditStatus: React.Dispatch<React.SetStateAction<boolean>>,
    details: accountDetails,
    photo?: File
}> = ({
    setEditStatus,
    details,
    photo
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
                    onClick={() => {
                        setEditStatus(false)
                        if (photo) core.user.setProfilePhoto(photo)
                        details.domain = details.username.replaceAll(' ', '').toLocaleLowerCase()
                        core.user.update(
                            { data: details }
                        )
                    }}
                >
                    Save
                </motion.button>
            </div>
        )
    }