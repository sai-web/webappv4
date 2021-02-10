import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { ProfilePic, MainCredential, MainCredentialUpdate } from './displayComponents'
import { ChannelTags, EditAccountButtons } from './editComponents'

const DisplayAccountDetails: React.FC<{
    setEditStatus: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
    setEditStatus
}) => {
        return (
            <>
                <ProfilePic />
                <div style={{
                    marginLeft: "20px"
                }}>
                    <MainCredential
                        type="USERNAME"
                        value="AR"
                    />
                    <MainCredential
                        type="EMAIL"
                        value="saisumith812@gmail.com"
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

const EditAccountDetails: React.FC<{
    setEditStatus: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
    setEditStatus
}) => {
        return (
            <div>
                <div style={{
                    marginTop: "20px",
                    display: "flex"
                }}>
                    <ProfilePic />
                    <div style={{
                        marginLeft: "20px"
                    }}>
                        <MainCredentialUpdate
                            type="USERNAME"
                            value="AR"
                            placeholder="Username"
                            cols={40}
                            rows={1}
                        />
                        <MainCredentialUpdate
                            type="EMAIL"
                            value="saisumith812@gmail.com"
                            placeholder="Email"
                            cols={40}
                            rows={1}
                        />
                        <MainCredentialUpdate
                            type="DESCRIPTION"
                            value="yep"
                            placeholder="channel description"
                            cols={40}
                            rows={1}
                            resize
                        />
                        <ChannelTags />
                        <EditAccountButtons
                            setEditStatus={setEditStatus}
                        />
                    </div>
                </div>
            </div>
        )
    }

export const AccounCredentialSettings: React.FC = () => {
    const [editAccount, setEditStatus] = useState<boolean>(false)
    return (
        <div style={{
            width: "calc(100% - 100px)",
            height: editAccount ? "400px" : "150px",
            borderRadius: "5px",
            backgroundColor: "#0E0E10",
            display: "flex",
            alignItems: editAccount ? "" : "center",
            position: "relative"
        }}>
            {
                editAccount ?
                    <EditAccountDetails setEditStatus={setEditStatus} /> :
                    <DisplayAccountDetails setEditStatus={setEditStatus} />
            }
        </div>
    )
}

export const AccountRemovalSettings: React.FC = () => {
    return (
        <div style={{
            width: "calc(100% - 100px)"
        }}>
            <h4 style={{
                fontFamily: "Poppins",
                fontSize: "10px",
                color: "grey"
            }}>
                ACCOUNT REMOVAL
            </h4>
            <h4 style={{
                fontFamily: "Poppins",
                fontSize: "10px",
                color: "silver"
            }}>
                You can temporarily disable your account to prevent notifications
                from being sent, and revive it later to get back on track.
            </h4>
            <div style={{
                display: "flex"
            }}>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    style={{
                        width: "120px",
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
                        cursor: "pointer"
                    }}
                >
                    Disable Account
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    style={{
                        width: "120px",
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
                    Delete Account
                </motion.button>
            </div>
        </div>
    )
}