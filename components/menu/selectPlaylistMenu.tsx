import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { core } from '../../core'

import { closeOnOutwardClick } from '../../utils/auth'
import { lanuchMenu, MenuType } from '../../core/utils/Events'

interface PlaylistTypeProps {
    name: string
    defaultSelected: boolean
}

const PlaylistType: React.FC<PlaylistTypeProps> = ({
    name,
    defaultSelected: selected
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
                const element = document.getElementById(`playlist-selected-recog-${name}`)?.style
                if (element!.display === "flex") {
                    let prevPlaylists = core.vod.state.vodPlaylistMutation.value
                    if (prevPlaylists.find(playlist => playlist.name === name)) {
                        prevPlaylists = prevPlaylists.map(playlist => {
                            if (playlist.name === name) return { ...playlist, method: "delete" }
                            return playlist
                        })
                    } else {
                        prevPlaylists.push({
                            name,
                            method: "delete",
                            vod_id: core.vod.collections.vods.selectors.CURRENT.value.vod_id
                        })
                    }
                    core.vod.state.vodPlaylistMutation.set(prevPlaylists)
                    element!.display = "none"
                }
                else {
                    let prevPlaylists = core.vod.state.vodPlaylistMutation.value
                    if (prevPlaylists.find(playlist => playlist.name === name)) {
                        prevPlaylists = prevPlaylists.map(playlist => {
                            if (playlist.name === name) return { ...playlist, method: "create" }
                            return playlist
                        })
                    } else {
                        prevPlaylists.push({
                            name,
                            method: "create",
                            vod_id: core.vod.collections.vods.selectors.CURRENT.value.vod_id
                        })
                    }
                    core.vod.state.vodPlaylistMutation.set(prevPlaylists)
                    element!.display = "flex"
                }
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
                <div style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "3px",
                    backgroundColor: "#4D6FFF",
                    display: selected ? "flex" : "none"
                }} id={`playlist-selected-recog-${name}`}>

                </div>
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
    reference: React.MutableRefObject<any>
}

export const SelectPlaylistMenu: React.FC<SelectPlaylistsProps> = ({
    display,
    position,
    reference
}) => {
    const [playlists, setPlaylists] = useState<{ name: string, chosen: boolean }[]>([])
    function onKeyPress(event: any) {
        if (event.keyCode === 13 && event.target.value.length > 0) {
            core.vod.createPlaylist(event.target.value)
            setPlaylists(prev => {
                const newList = [...prev]
                newList.unshift({
                    name: event.target.value,
                    chosen: false
                })
                return newList
            })
            event.target.value = ""
        }
    }
    const { x, y } = getPosition(position, {
        width: 150,
        height: 200
    })
    closeOnOutwardClick((value: boolean) => {
        // console.log(position)
        lanuchMenu.emit({
            type: MenuType.SelectPlaylistMenu,
            display: value,
            position
        })
        const mutation = core.vod.state.vodPlaylistMutation.value
        if (mutation.length > 0) core.vod.playlistUpdateMutations(mutation)
    }, [reference], [position])
    useEffect(() => {
        if (display) {
            core.vod.checkForVodInPlaylists(core.vod.collections.vods.selectors.CURRENT.value.vod_id)
                .then(data => {
                    const normalizedArr: { name: string, chosen: boolean }[] = []
                    Object.entries(data).forEach(([name, chosen]) => {
                        normalizedArr.push({ name, chosen: chosen as boolean })
                    })
                    setPlaylists(normalizedArr)
                })
        }
    }, [display])
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
                        playlists.map((playlist, index) => {
                            return (
                                <PlaylistType
                                    name={playlist.name}
                                    defaultSelected={playlist.chosen}
                                    key={`playlist-menu-type-${index}`}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
}