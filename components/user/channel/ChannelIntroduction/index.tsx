import React from 'react'

import { AboutChannel } from './aboutChannel'
import { Profile } from './profile'
import { Connections } from './connections'
import { ScrolledChannelProfile } from './scrolledChannelProfile'

export const ChannelIntroSection: React.FC<{
    scrolled: boolean
}> = ({
    scrolled
}) => {
        return (
            <div style={{
                width: "300px",
                height: "100%"
            }}>
                <ScrolledChannelProfile scrolled={scrolled} />
                <Profile />
                <AboutChannel />
                <Connections />
            </div>
        )
    }