import React from 'react'

import { Options } from './options'
import { LatestFeed } from './latestFeed'
import { Moderations } from './moderation'

export const Settings: React.FC = () => {
    return (
        <div style={{
            width: "220px",
            height: "100%",
            backgroundColor: "#1F1F23",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <input
                type="text"
                placeholder="search category"
                style={{
                    width: "calc(100% - 30px)",
                    height: "30px",
                    backgroundColor: "#18181B",
                    borderWidth: "0",
                    paddingLeft: "10px",
                    borderRadius: "5px",
                    outline: "none",
                    color: "grey",
                    marginTop: "10px"
                }}
            />
            <Options />
            <LatestFeed />
            <Moderations />
        </div>
    )
}