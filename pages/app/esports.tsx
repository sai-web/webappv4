import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { games } from '../../components/home/fakeData/esports'

import Arrow from '../../utils/home/arrows'
import { PageModes } from '../../components/nav/top/components'
import { Overlay } from '../../components/home/esports/overlay'
import Template from '../../components/app/template'

const Pages: React.FC<{ PageArr: Array<boolean>, setPageMode: React.Dispatch<React.SetStateAction<Array<boolean>>> }> = ({ PageArr, setPageMode }: { PageArr: Array<boolean>, setPageMode: React.Dispatch<React.SetStateAction<Array<boolean>>> }) => {
    return (
        <>
            <PageModes name="Live" color={PageArr[0] ? "grey" : undefined} setPageModes={setPageMode} pos={0} logo={<i className="fa fa-bullseye" style={{ fontSize: "13px" }}></i>} />
            <PageModes name="Clips" color={PageArr[1] ? "grey" : undefined} setPageModes={setPageMode} pos={1} logo={<span className="material-icons" style={{ fontSize: "15px" }}>insert_link</span>} />
        </>
    )
}

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

function Esports() {
    const [xValue, setPosition] = useState<number>(0)
    const [Modes, setPageMode] = useState<Array<boolean>>([false, false])

    useEffect(() => {
        console.log(xValue)
    }, [xValue])
    return (
        <Template PageMode={<Pages PageArr={Modes} setPageMode={setPageMode} />} width="150px" >
            <div style={{
                width: "100%",
                height: "200px",
                overflow: "hidden"
            }}
                className="main-content-div"
            >
                <Overlay />
            </div>
            <div style={{
                width: "calc(100% - 50px)",
                position: "relative",
                left: "50%",
                transform: "translate(-50%,0)",
                overflow: "hidden"
            }}>
                <div style={{
                    width: "3000px",
                    height: "170px",
                    display: "flex",
                    marginLeft: "50px"
                }}>
                    {
                        gameSpliced.map((group, index) => {
                            return (
                                <motion.div
                                    animate={{
                                        x: xValue
                                    }}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        flexWrap: "wrap"
                                    }}
                                    key={index}
                                >
                                    {
                                        group.map((game, index) => {
                                            return (
                                                <motion.div
                                                    initial={{ scale: 0.9 }}
                                                    animate={{
                                                        scale: 1
                                                    }}
                                                    transition={{
                                                        type: 'spring',
                                                        bounce: 0.35
                                                    }}
                                                    whileTap={{ scale: 0.9 }}
                                                    style={{
                                                        width: "230px",
                                                        height: "70px",
                                                        backgroundColor: "#323234",
                                                        borderRadius: "10px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        margin: "5px",
                                                        cursor: "pointer"
                                                    }}
                                                    key={index}
                                                >
                                                    <img
                                                        src={game.thumbnail}
                                                        style={{ width: "35px" }}
                                                    />
                                                    <h4 style={{
                                                        fontFamily: "Poppins",
                                                        fontWeight: "lighter",
                                                        color: "white",
                                                        fontSize: "13px",
                                                        width: "170px",
                                                        paddingLeft: "10px"
                                                    }}>
                                                        {game.name}
                                                    </h4>
                                                </motion.div>
                                            )
                                        })
                                    }
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
            <Arrow
                name="keyboard_arrow_left"
                positioning={{ left: "200px" }}
                callback={() => setPosition(state => {
                    if (state !== 0) return (state + 1010)
                    return 0
                })}
            />
            <Arrow
                name="keyboard_arrow_right"
                positioning={{ right: "200px" }}
                callback={() => setPosition(state => {
                    if (state !== -2020) return state - 1010
                    return -2020
                })}
            />
        </Template>
    )
}

export default Esports