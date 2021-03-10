import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

import { lanuchMenu, MenuType } from '../../../core/utils/Events'

import { closeOnOutwardClick } from '../../../utils/auth'

import { PostSection } from './post.section'
import { ContentDisplay } from './preview.display/content.preview'
import { AdvancedPostOptions } from './advanced.options'

import { Platforms } from './platforms'


const AnimationVariants = {
    visible: {
        y: 0
    },
    hidden: {
        y: -350
    }
}

interface UploadProps {
    display: boolean,
    reference: React.MutableRefObject<any>
}

interface ContentPosted {
    state: boolean,
    data: {
        name?: string,
        thumbnail?: string,
        title?: string,
        tags?: string[]
    }
}

export const UploadSection: React.FC<UploadProps> = ({
    display,
    reference
}) => {
    const [active, setState] = useState<boolean>(false)
    const [contentPosted, setContentState] = useState<ContentPosted>({ state: false, data: {} })
    const [renderCount, setRenderCount] = useState<number>(0)
    const [url, setUrl] = useState<string>("")
    const [displayMainDiv, setDisplayMainDiv] = useState<boolean>(display)
    const shareLinkInputRef = useRef<any>(null)

    closeOnOutwardClick(setState, [shareLinkInputRef])

    const closeMenu = (value: boolean) => {
        setContentState({ state: false, data: {} })
        lanuchMenu.emit({ type: MenuType.ShareLinkComponent, display: value })
    }
    closeOnOutwardClick(closeMenu, [reference])

    useEffect(() => {
        if (renderCount < 2) setRenderCount(prev => (prev + 1))
    })
    useEffect(() => {
        if (!display) setTimeout(() => setDisplayMainDiv(false), 300)
        else {
            try { (document.getElementById('share-link-input') as HTMLInputElement)!.value = '' }
            catch { }
            setDisplayMainDiv(true)
        }
    }, [display])
    return (
        <div style={{
            position: "absolute",
            top: "50px",
            left: "0",
            width: "100%",
            display: displayMainDiv ? "flex" : "none",
            justifyContent: "center",
            // backgroundColor: "red"
        }} id="share-link-component-parent">
            <motion.div
                initial={display ? "hidden" : renderCount > 0 ? "visible" : "hidden"}
                animate={display ? "visible" : "hidden"}
                variants={AnimationVariants}
                style={{
                    width: "calc(100% - 450px)",
                    height: contentPosted.state ? "450px" : "300px",
                    backgroundColor: "#1F1F23",
                    borderRadius: "10px",
                    zIndex: 2,
                    transform: "translate(-50%,0)"
                }}
                ref={reference}
            >
                <PostSection
                    active={active}
                    setState={setState}
                    shareLinkInputRef={shareLinkInputRef}
                    setVodRecieved={setContentState}
                    setUrl={setUrl}
                />
                {
                    contentPosted.state ?
                        <ContentDisplay
                            data={contentPosted.data}
                            url={url}
                            setDisplayState={closeMenu}
                        /> :
                        <div style={{
                            display: "flex",
                            width: "calc(100% - 60px)",
                            margin: "10px 30px"
                            // backgroundColor: "green"
                        }}>
                            {
                                Object.values(Platforms).map((option, index) => {
                                    return <AdvancedPostOptions
                                        name={option.name}
                                        logo={option.logo}
                                        description={option.description}
                                        color={option.color}
                                        key={`advanced-post-options-${index}`}
                                    />
                                })
                            }
                        </div>
                }
            </motion.div>
        </div>
    )
}