import React from "react"

import { albumnSet } from '../../fakeData/music'
import { AlbumnCard } from './albumnSetCards'
import { MainCard } from './albumnSetMainCard'

export const AlbumnSet = () => {
    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px"
        }}>
            <div style={{
                width: "calc(100% - 150px)",
                height: "500px",
                display: "flex",
                alignItems: "center"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}>
                    <MainCard thumbnail={albumnSet[0].thumbnail} title={albumnSet[0].title} link={albumnSet[0].link} />
                    <div style={{
                        flex: "1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap"
                    }}>
                        <AlbumnCard thumbnail={albumnSet[1].thumbnail} title={albumnSet[1].title} link={albumnSet[1].link} />
                        <AlbumnCard thumbnail={albumnSet[2].thumbnail} title={albumnSet[2].title} link={albumnSet[2].link} />
                        <AlbumnCard thumbnail={albumnSet[3].thumbnail} title={albumnSet[3].title} link={albumnSet[3].link} />
                        <AlbumnCard thumbnail={albumnSet[4].thumbnail} title={albumnSet[4].title} link={albumnSet[4].link} />
                    </div>
                </div>
            </div>
        </div>
    )
}