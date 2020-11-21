import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { albums } from '../../fakeData/music'
import Arrow from '../../../../utils/home/arrows'

import { Albumn } from './albumnCard'

const albumnSpliceSize = 4
type albumnSplice = {
    thumbnail: string;
    link: string;
    title: string;
    creator: string;
}[][]
const albumnSpliced: albumnSplice = albums.reduce((acc: albumnSplice, curr, i) => {
    if (!(i % albumnSpliceSize)) {
        acc.push(albums.slice(i, i + albumnSpliceSize))
    }
    return acc
}, [])

export const Albumns = () => {
    const [pos, setPosition] = useState<number>(0)
    return (
        <>
            <div style={{
                width: "960px",
                height: "340px",
                display: "flex",
                flexWrap: "wrap",
                overflow: "hidden",
                position: "relative",
                left: "50%",
                transform: "translate(-50%,0)"
            }}>
                <div style={{
                    width: "2000px",
                    display: "flex"
                }}>
                    {
                        albumnSpliced.map((albumnGroup, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ x: -300 }}
                                    animate={{
                                        x: pos
                                    }}
                                    style={{ display: "flex" }}
                                >
                                    {albumnGroup.map((album, index) => {
                                        return (
                                            <Albumn key={index} albumn={album} />
                                        )
                                    })}
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
            <Arrow
                name="keyboard_arrow_left"
                positioning={{ left: "30px", top: "240px" }}
                callback={() => setPosition(state => {
                    if (state !== 0) return (state + 960)
                    return 0
                })}
            />
            <Arrow
                name="keyboard_arrow_right"
                positioning={{ right: "30px", top: "240px" }}
                callback={() => setPosition(state => {
                    if (state !== -960) return state - 960
                    return -960
                })}
            />
        </>
    )
}