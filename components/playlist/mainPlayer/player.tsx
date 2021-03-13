import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { core } from '../../../core'

import { AdvancedOptionsSection } from './advancedOptions'

import { usePulse } from '@pulsejs/react'

import { Embed } from '../../../core/utils/embeds'

export const MainPlayer: React.FC = () => {
    const { url, thumbnail, title, platform } = usePulse(core.vod.collections.vods.selectors.CURRENT)
    // useEffect(() => {
    //     console.log(previewDetails)
    // }, [previewDetails])
    return (
        <div style={{
            height: "100%",
            flex: 1,
            // backgroundColor: "green",
            display: "flex",
            justifyContent: "center"
        }}>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    overflow: "hidden",
                    position: "relative",
                    justifyContent: "center"
                    // backgroundColor: "red"
                }}
            >
                <div style={{
                    width: "500px",
                    height: "100%",
                    // position: "absolute",
                    // top: "0",
                    // left: "0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "10px"
                    // backgroundColor: "blue",
                    // justifyContent: "center"
                }}>
                    {
                        new Embed({
                            url: url!,
                            thumbnail
                        }).embed
                    }
                    <h4 style={{
                        fontFamily: "Whitney",
                        fontSize: "15px",
                        color: "grey",
                        width: "400px"
                    }}>
                        {title}
                    </h4>
                    <AdvancedOptionsSection
                        url={url!}
                        platform={platform!}
                    />
                </div>
            </div>
        </div>
    )
}