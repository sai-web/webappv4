import React, { useRef, useEffect, useState } from 'react'

import { core } from '../../../../core'
import { usePulse } from '@pulsejs/react'

import { ProfilePic, MainCredentialUpdate } from '../displayComponents'
import { ChannelTags, EditAccountButtons } from '../editComponents'

type accountDetails = {
    username: string,
    email: string,
    description: string
}

enum stateTypes {
    username = "username",
    email = "email",
    description = "description"
}

export const EditAccountDetails: React.FC<{
    setEditStatus: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
    setEditStatus
}) => {
        const user = usePulse(core.user.state.info)
        const requiredTags = user.tags ? (user.tags! as string).split(',') : []
        const [details, setAccountDetails] = useState<accountDetails>({
            username: user.username!,
            email: user.email!,
            description: user.description!
        })
        const [tags, setTags] = useState<string[]>(requiredTags)
        const [profilePhoto, setProfilePhoto] = useState<File>()
        // useEffect(() => {
        //     console.log(description)
        // }, [description])
        return (
            <div>
                <div style={{
                    marginTop: "20px",
                    display: "flex"
                }}>
                    <ProfilePic
                        setState={setProfilePhoto}
                        edit
                    />
                    <div style={{
                        marginLeft: "20px"
                    }}>
                        <MainCredentialUpdate
                            type="USERNAME"
                            value={user.username!}
                            placeholder="Username"
                            cols={40}
                            // rows={1}
                            stateType={stateTypes.username}
                            stateSetter={setAccountDetails}
                        />
                        <MainCredentialUpdate
                            type="EMAIL"
                            value={user.email!}
                            placeholder="Email"
                            cols={40}
                            // rows={1}
                            stateType={stateTypes.email}
                            stateSetter={setAccountDetails}
                        />
                        <MainCredentialUpdate
                            type="DESCRIPTION"
                            value={user.description!}
                            placeholder="channel description"
                            cols={40}
                            // rows={1}
                            resize
                            stateType={stateTypes.description}
                            stateSetter={setAccountDetails}
                        />
                        <ChannelTags
                            setTags={setTags}
                        />
                        <EditAccountButtons
                            setEditStatus={setEditStatus}
                            details={{
                                username: details.username,
                                email: details.email,
                                description: details.description,
                                tags: tags.reduce((factoredString, tag) => {
                                    if (tags.indexOf(tag) === tags.length - 1) return factoredString += tag
                                    return factoredString += tag + ','
                                }, '')
                            }}
                            photo={profilePhoto}
                        />
                    </div>
                </div>
            </div>
        )
    }