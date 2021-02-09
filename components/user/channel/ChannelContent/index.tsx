import React from 'react'

import { ChannelDescription } from './description'
import { Content } from './content'

export const ChannelContentSection: React.FC<{
    scrolled: boolean
}> = ({
    scrolled
}) => {
        return (
            <div style={{
                width: "calc(100% - 300px)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                right: "0"
            }}>
                <ChannelDescription />
                <Content scrolled={scrolled} />
            </div>
        )
    }