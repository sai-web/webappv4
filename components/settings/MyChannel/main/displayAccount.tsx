import React from 'react'
import { motion } from 'framer-motion'

import { usePulse } from '@pulsejs/react'
import { core } from '../../../../core'

import { ProfilePic, MainCredential } from '../displayComponents'

export const DisplayAccountDetails: React.FC<{
    setEditStatus: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
    setEditStatus
}) => {
        const { username, email } = usePulse(core.user.state.info)
        return (
            <>
                <ProfilePic />
                <div style={{
                    marginLeft: "20px"
                }}>
                    <MainCredential
                        type="USERNAME"
                        value={username!}
                    />
                    <MainCredential
                        type="EMAIL"
                        value={email!}
                    />
                </div>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    style={{
                        width: "50px",
                        height: "25px",
                        fontFamily: "Poppins",
                        fontSize: "15px",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#4D6FFF",
                        borderWidth: "0",
                        borderRadius: "5px",
                        outline: "none",
                        cursor: "pointer",
                        position: "absolute",
                        top: "20px",
                        right: "20px"
                    }}
                    onClick={() => setEditStatus(true)}
                >
                    Edit
            </motion.button>
            </>
        )
    }