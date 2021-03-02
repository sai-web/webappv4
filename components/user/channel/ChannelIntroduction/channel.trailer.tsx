import React, { useState } from 'react'

interface OverlayProps {
    setTrailerState: React.Dispatch<React.SetStateAction<boolean>>
}

const Overlay: React.FC<OverlayProps> = ({
    setTrailerState
}) => {
    return (
        <div style={{
            width: "110%",
            height: "110%",
            backgroundColor: "rgba(0,0,0,0.8)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <span className="material-icons"
                style={{
                    color: "#4D6FFF",
                    fontSize: "50px",
                    cursor: "pointer"
                }}
                onClick={() => {
                    setTrailerState(true)
                    const trailer: HTMLVideoElement = document.getElementById('channel-trailer-video') as HTMLVideoElement
                    trailer.play()
                }}
            >
                play_circle_outline
            </span>
        </div>
    )
}

interface TrailerProps {
    channel_trailer_link: string
    scaleValue: number
}

export const Trailer: React.FC<TrailerProps> = ({
    channel_trailer_link,
    scaleValue
}) => {
    const [playTrailer, setTrailerState] = useState<boolean>(false)
    return (
        <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 1,
            height: `${((scaleValue + 1) / 2) * 200}px`,
            overflow: "hidden"
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center"
        }}>
            <div style={{
                position: "relative",
                width: "100%",
                height: "100%"
            }}>
                <video
                    // width="350"
                    // height="200"
                    controls={playTrailer}
                    loop
                    src={channel_trailer_link}
                    id="channel-trailer-video"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: `${(scaleValue + 1) / 2}`,
                        height: "100%",
                        outline: "none",
                        // backdropFilter: "blur(10px)"
                        // objectFit: "cover"
                    }}
                    onPause={() => setTrailerState(false)}
                >

                </video>
                {
                    !playTrailer ?
                        <Overlay
                            setTrailerState={setTrailerState}
                        /> :
                        ""
                }
            </div>
        </div>
    )
}