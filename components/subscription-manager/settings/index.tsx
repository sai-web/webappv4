import React from 'react'

import { Options } from './options'
import { LatestFeed } from './latestFeed'
import { Moderations } from './moderation'

import { categories } from '../fakeData'

interface SettingsProps {
    setState: React.Dispatch<React.SetStateAction<{
        type: string;
        desc: string;
    }[]>>
}

export const Settings: React.FC<SettingsProps> = ({ setState }) => {
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
                onChange={e => {
                    setState(() => {
                        var filteredCategories = categories.filter((category, index) => {
                            return category.type.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                        })
                        return filteredCategories
                    })
                }}
            />
            <Options />
            <LatestFeed />
            <Moderations />
        </div>
    )
}