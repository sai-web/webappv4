import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Arrow from '../../../utils/home/arrows'
import { GameCard } from './gameCard'
import { games } from '../fakeData/esports'

const gameSpliceSize = 8
type gameSplice = {
    thumbnail: string;
    name: string;
}[][]
const gameSpliced: gameSplice = games.reduce((acc: gameSplice, curr, i) => {
    if (!(i % gameSpliceSize)) {
        acc.push(games.slice(i, i + gameSpliceSize))
    }
    return acc
}, [])

export const Games: React.FC = () => {
    const [xValue, setPosition] = useState<number>(0)

    return (
        <>
            <div style={{
                width: "100%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center"
            }}>
                <div style={{
                    width: "980px",
                    overflow: "hidden"
                }}>
                    <div style={{
                        width: "2940px",
                        height: "170px",
                        display: "flex",
                        marginLeft: "10px"
                    }}>
                        {
                            gameSpliced.map((group, index) => {
                                return (
                                    <motion.div
                                        animate={{
                                            x: xValue
                                        }}
                                        style={{
                                            flex: "1",
                                            display: "flex",
                                            flexWrap: "wrap"
                                        }}
                                        key={index}
                                    >
                                        {
                                            group.map((game, index) => {
                                                return (
                                                    <GameCard game={game} key={index} />
                                                )
                                            })
                                        }
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Arrow
                name="keyboard_arrow_left"
                positioning={{ left: "40px", top: "267px" }}
                callback={() => setPosition(state => {
                    if (state !== 0) return (state + 980)
                    return 0
                })}
            />
            <Arrow
                name="keyboard_arrow_right"
                positioning={{ right: "40px", top: "267px" }}
                callback={() => setPosition(state => {
                    if (state !== -2020) return state - 980
                    return -2020
                })}
            />

        </>
    )
}