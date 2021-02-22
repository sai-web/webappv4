import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { core } from '../../../../core'
import { animateTemplate } from '../../../../core/utils/Events'

import { MultiSelectInput } from '../../../settings/accessories'
import { GeneralCard } from '../preview.cards/general.card'
import { NonWideThumbnail } from '../preview.cards/non-wide-thumbnail'

import { BonusPoints, PlatformIcon, NotificationInformation } from './addtional.items'
import { MainCredentialUpdate } from './content.details'

const ContentTypes = [
    {
        value: 'Vlog',
        chosen: false
    },
    {
        value: 'Gamming',
        chosen: false
    },
    {
        value: 'Streaming',
        chosen: false
    },
    {
        value: 'Programming',
        chosen: false
    },
    {
        value: 'Science',
        chosen: false
    },
    {
        value: 'Just Chat',
        chosen: false
    }
]

interface contentInformation {
    title: string,
    thumbnail: string,
    tags: string[],
    archived: boolean,
    platform: string
}

interface ContentDisplayProps {
    data: any,
    url: string,
    setDisplayState: Function
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({
    data,
    url,
    setDisplayState
}) => {
    // console.log(url)
    const initialContentInfo = {
        title: data.title,
        thumbnail: data.thumbnail,
        tags: [],
        archived: false,
        platform: (data.name as string).toLocaleLowerCase()
    }
    const [contentInfo, setContentInfo] = useState<contentInformation>(initialContentInfo)
    return (
        <div style={{
            // backgroundColor: "green",
            width: "100%",
            height: "calc(100% - 100px)",
            position: "relative"
        }}>
            <AdditionalInformation data={data} />
            <div style={{
                display: "flex"
            }}>
                <ContentPreview data={data} />
                <div style={{
                    width: "calc(100% - 320px)",
                    // backgroundColor: "red"
                }}>
                    <h4 style={{
                        fontFamily: "Poppins",
                        color: "grey",
                        fontSize: "12px",
                        lineHeight: "0",
                        marginTop: "70px"
                    }}>
                        Content Tags
                    </h4>
                    <MultiSelectInput
                        options={ContentTypes}
                        placeholder="choose tags to represent your content"
                        setState={(tags: string[]) => {
                            setContentInfo(prev => {
                                const newState = { ...prev }
                                newState.tags = tags
                                return newState
                            })
                        }}
                        multiple
                    />
                    <MainCredentialUpdate
                        type="Notification Title"
                        value={data.title}
                        placeholder="notification title"
                        cols={40}
                        resize
                        // rows={1}
                        // stateType={stateTypes.description}
                        stateSetter={setContentInfo}
                    />
                </div>
            </div>
            <motion.button
                whileTap={{
                    scale: 0.9
                }}
                style={{
                    width: "100px",
                    height: "25px",
                    backgroundColor: "#313130",
                    borderRadius: "5px",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    color: "white",
                    borderWidth: "0",
                    outline: "none",
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    // fontWeight: "lighter",
                    cursor: "pointer"
                }}
                onClick={() => {
                    core.vod.create({
                        ...contentInfo,
                        url
                    })
                    setDisplayState()
                    animateTemplate.emit({ display: false })
                }}
            >
                Create Post
            </motion.button>
        </div>
    )
}

const AdditionalInformation: React.FC<{
    data: any
}> = ({
    data
}) => {
        return (
            <div style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <PlatformIcon
                    details={data}
                />
                <NotificationInformation />
                <BonusPoints />
            </div>
        )
    }

const ContentPreview: React.FC<{
    data: any
}> = ({
    data
}) => {
        return (
            <div style={{
                width: "320px",
                // backgroundColor: "red"
            }}>
                <h4 style={{
                    fontFamily: "Poppins",
                    fontSize: "17px",
                    color: "white",
                    marginLeft: "20px"
                }}>
                    Edit Post
            </h4>
                {
                    data.wideThumb ?
                        <GeneralCard
                            data={data}
                        /> :
                        <NonWideThumbnail
                            data={data}
                        />
                }
            </div>
        )
    }