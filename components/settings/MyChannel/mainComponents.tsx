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
                    <ProfilePic edit />
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
                display: "flex",
                height: "60px"
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

export const BannerSettings: React.FC = () => {
    const [bannerPresent, setBannerState] = useState<boolean>(false)
    return (
        <div style={{
            width: "calc(100% - 100px)"
        }}>
            <h4 style={{
                fontFamily: "Poppins",
                fontSize: "10px",
                color: "grey"
            }}>
                BANNER
            </h4>
            <h4 style={{
                fontFamily: "Poppins",
                fontSize: "10px",
                color: "silver"
            }}>
                Your banner will be the center of attraction on your channel page,
                so choose it wisely. Choose any file on your PC and drop it on in the box
                below.
            </h4>
            <div style={{
                width: "100%",
                height: "150px",
                backgroundColor: "#0E0E10",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                position: "relative"
            }}>
                {bannerPresent ?
                    <div style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <img src="" id="banner-image"
                            style={{
                                // width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                opacity: 0.5
                            }}
                        />
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "black",
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%"
                        }}>
                            <span className="material-icons"
                                style={{
                                    color: "grey"
                                }}
                            >
                                cloud_upload
                            </span>
                        </div>
                    </div>
                    :
                    <div style={{
                        border: "1.5px dashed grey",
                        width: "calc(100% - 50px)",
                        height: "70%",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative"
                    }}>
                        <span className="material-icons"
                            style={{
                                color: "grey"
                            }}
                        >
                            cloud_upload
                        </span>
                        <input type="file"
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                top: "0",
                                left: "0",
                                opacity: "0"
                            }}
                            onChange={e => {
                                const files = e.target.files
                                if (FileReader && files && files.length) {
                                    var fr = new FileReader();
                                    fr.onload = function () {
                                        const imageRenderer: HTMLImageElement = document.getElementById("banner-image") as HTMLImageElement
                                        imageRenderer.src = fr.result as string;
                                    }
                                    fr.readAsDataURL(files[0]);
                                }
                                setBannerState(true)
                            }}
                        />
                    </div>
                }
            </div>
        </div>
    )
}