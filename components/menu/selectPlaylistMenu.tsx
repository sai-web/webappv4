import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { closeOnOutwardClick } from '../../utils/auth'
import { lanuchMenu, MenuType } from '../../core/utils/Events'

const fakeData = [
    {
        name: "favourites",
        chosen: true
    },
    {
        name: "chill music",
        chosen: false
    },
    {
        name: "pop music",
        chosen: false
    }
]

type PlaylistItem = { name: string, chosen: boolean }

interface PlaylistTypeProps {
    name: string
    defaultSelected: boolean
    setState: React.Dispatch<React.SetStateAction<PlaylistItem[]>>
}

const PlaylistType: React.FC<PlaylistTypeProps> = ({
    name,
    defaultSelected: selected,
    setState
}) => {
    return (
        <motion.div
            style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                lineHeight: "0",
                position: "relative",
                // bottom: "10px",
                height: "30px",
                cursor: "pointer"
            }}
            whileTap={{
                scale: 0.9
            }}
            onClick={() => {
                setState(prev => {
                    const newState = [...prev]
                    newState.find(item => item.name === name)!.chosen = !prev.find(item => item.name === name)?.chosen
                    return newState
                })
            }}
        >
            <div style={{
                width: "15px",
                height: "15px",
                border: "2px solid silver",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                {
                    selected ?
                        <div style={{
                            width: "11px",
                            height: "11px",
                            borderRadius: "3px",
                            backgroundColor: "#4D6FFF"
                        }}>

                        </div> : ""
                }
            </div>
            <h4 style={{
                fontFamily: "Roboto Condensed",
                color: "silver",
                fontSize: "15px",
                marginLeft: "5px",
                fontWeight: "lighter"
            }}>
                {name}
            </h4>
        </motion.div>
    )
}

const displayVariants = {
    visible: {
        scale: 1,
        opacity: 1
    },
    hidden: {
        scale: 0,
        opacity: 0
    }
}

function getPosition(position: {
    x: number,
    y: number,
    width: number,
    height: number
}, element: {
    width: number,
    height: number
}) {
    let coordinates = {
        x: position.x,
        y: position.y
    }

    const computationForX = position.width - (element.width + position.x)
    const computationForY = position.height - (element.height + position.y)
    if (computationForX < 0) coordinates.x = position.x + computationForX - 30
    if (computationForY < 0) coordinates.y = position.y + computationForY - 30
    return coordinates
}

interface SelectPlaylistsProps {
    display: boolean,
    position: {
        x: number,
        y: number,
        width: number,
        height: number
    },
    vod_id: string,
    reference: React.MutableRefObject<any>
}

export const SelectPlaylistMenu: React.FC<SelectPlaylistsProps> = ({
    display,
    position,
    vod_id,
    reference
}) => {
    const [playlists, setPlaylists] = useState(fakeData)
    function onKeyPress(event: any) {
        if (event.keyCode === 13 && event.target.value.length > 0) {
            setPlaylists((prev) => {
                const newState = [...prev]
                newState.unshift({
                    name: event.target.value,
                    chosen: true
                })
                event.target.value = ""
                return newState
            })
        }
    }
    const { x, y } = getPosition(position, {
        width: 150,
        height: 200
    })
    closeOnOutwardClick((value: boolean) => {
        lanuchMenu.emit({
            type: MenuType.SelectPlaylistMenu,
            display: value,
            position
        })
    }, [reference])
    useEffect(() => console.log(playlists), [playlists])
    return (
        <motion.div
            initial={display ? "hidden" : "visible"}
            animate={display ? "visible" : "hidden"}
            transition={{
                type: "spring",
                duration: 0.5,
                bounce: 0.35
            }}
            variants={displayVariants}
            style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                zIndex: 2
                // backgroundColor: "red",
                // display: "flex"
                // width: "100px",
                // height: "100px"
            }}
            id="select-playlist-menu-parent"
        >
            <div style={{
                width: "150px",
                height: "200px",
                backgroundColor: "#18181B",
                borderRadius: "10px",
                overflow: "hidden"
            }} ref={reference}>
                <div style={{
                    // backgroundColor: "red",
                    height: "50px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <input
                        type="text"
                        style={{
                            width: "calc(100% - 30px)",
                            height: "20px",
                            outline: "none",
                            backgroundColor: "#0E0E10",
                            borderWidth: "0",
                            borderRadius: "5px",
                            color: "silver",
                            padding: "0 5px"
                        }}
                        onKeyDown={onKeyPress}
                        placeholder="add playlist"
                    />
                </div>
                <div style={{
                    // backgroundColor: "green",
                    height: "calc(100% - 50px)",
                    width: "100%",
                    overflowY: "scroll"
                }} className="main-content-div">
                    {
                        playlists.map((playlist, index) => (
                            <PlaylistType
                                name={playlist.name}
                                defaultSelected={playlist.chosen}
                                key={`playlist-menu-type-${index}`}
                                setState={setPlaylists}
                            />
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}