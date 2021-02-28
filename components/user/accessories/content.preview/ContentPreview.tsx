import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { contentPreview } from '../../../../core/utils/Events'
import { useEvent, usePulse } from '@pulsejs/react'

import { core } from '../../../../core'

import { closeOnOutwardClick } from '../../../../utils/auth/index'
import { animateTemplate } from '../../../../core/utils/Events'

import { AdvancedOptionsSection } from './advancedOptions'
import { ChatSection } from './chat'

import { Embed } from '../../../../core/utils/embeds'

const YoutubeIframe: React.FC<{ url: string }> = ({ url }) => {
    return (
        <iframe
            src={url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            width="400px"
            height="225px"
            style={{
                marginTop: "20px"
            }}
        >

        </iframe>
    )
}

const SpotifyIframe: React.FC<{ url: string }> = ({ url }) => {
    return (
        <iframe
            src={url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            width="400px"
            height="225px"
            style={{
                marginTop: "20px"
            }}
        >

        </iframe>
    )
}

const displayVariants = {
    visible: {
        scale: 1,
        opacity: 1
    },
    hidden: {
        scale: 0,
        opacity: 0
    }
}

type PreviewDetails = {
    show: boolean,
    url?: string,
    thumbnail?: string
    platform?: string
    title?: string
}

interface ContentPreviewOptionsProps {
    display: boolean
    reference: React.MutableRefObject<any>
    vod_id: string
}

{/* <iframe src="https://open.spotify.com/embed/album/4AdZV63ycxFLF6Hcol0QnB" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<iframe src="https://open.spotify.com/embed/track/7HtPBwBoCBDy1tpstag7HL" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
https://open.spotify.com/album/4AdZV63ycxFLF6Hcol0QnB?highlight=spotify:track:7lsYGc5H5DHktxO7gbB8bN */}

export const ContentPreviewOptions: React.FC<ContentPreviewOptionsProps> = ({
    display,
    reference,
    vod_id
}) => {
    var initialPreviewDetails: PreviewDetails = {
        show: false,
        url: "",
        thumbnail: "",
        platform: "",
        title: ""
    }
    const [previewDetails, setPreviewDetails] = useState<PreviewDetails>(initialPreviewDetails)
    const [renderCount, setRenderCount] = useState<number>(0)
    const content = usePulse(core.vod.collections.vods.getGroup('default'))
    useEffect(() => {
        if (!display) {
            setTimeout(() => setPreviewDetails({
                show: false
            }), 400)
        } else {
            setPreviewDetails(() => {
                let newState = {
                    show: true,
                    url: "",
                    thumbnail: "",
                    platform: "",
                    title: ""
                }
                const requiredVod = (content.find(vod => {
                    return vod.vod_id === vod_id
                }))

                newState.url = requiredVod?.url
                newState.thumbnail = requiredVod?.thumbnail
                newState.platform = requiredVod?.platform
                newState.title = requiredVod?.title

                return newState
            })
        }
    }, [display])
    useEffect(() => {
        if (renderCount < 2) setRenderCount(prev => (prev + 1))
    })
    // useEffect(() => {
    //     console.log(previewDetails)
    // }, [previewDetails])
    closeOnOutwardClick((value: boolean) => {
        contentPreview.emit({ show: value, vod_id })
    }, [reference])
    return (
        <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            display: previewDetails.show ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            // backgroundColor: "red"
        }}>
            {renderCount > 0 ?
                <motion.div
                    initial={display ? "hidden" : "visible"}
                    animate={display ? "visible" : "hidden"}
                    transition={{
                        type: "spring",
                        damping: 10
                    }}
                    variants={displayVariants}
                    style={{
                        width: "700px",
                        height: "500px",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        position: "relative",
                        backgroundColor: "#18181B"
                    }}
                    ref={reference}
                >
                    <div style={{
                        width: "450px",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        // justifyContent: "center"
                    }}>
                        {
                            new Embed({
                                url: previewDetails.url!,
                                thumbnail: previewDetails.thumbnail
                            }).embed
                        }
                        <h4 style={{
                            fontFamily: "Whitney",
                            fontSize: "15px",
                            color: "grey",
                            width: "400px"
                        }}>
                            {previewDetails.title}
                        </h4>
                        <AdvancedOptionsSection
                            url={previewDetails.url!}
                            platform={previewDetails.platform!}
                        />
                    </div>
                    <ChatSection />
                </motion.div> : ""
            }
        </div>
    )
}