import React, { useState, useEffect } from 'react'
import { core } from '../../../../core'

import { usePulse } from '@pulsejs/react'

import { IOSButton } from '../../../../utils/app/ios-switch-button'

interface RenderTrailerProps {
    setTrailerState: React.Dispatch<React.SetStateAction<boolean>>
}

const SelectedChannelTrailerToRender: React.FC<RenderTrailerProps> = ({
    setTrailerState,
    children
}) => {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {children ||
                <video
                    width="100%"
                    height="240"
                    controls
                    src=""
                    id="channel-trailer"
                >

                </video>
            }
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                width: "50px",
                height: "50px",
                borderRadius: "50%"
            }}>
                <span className="material-icons"
                    style={{
                        color: "grey"
                    }}
                >
                    cloud_upload
                    </span>
            </div>
            <input type="file"
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    opacity: "0"
                }}
                onChange={e => {
                    const files = e.target.files
                    if (FileReader && files && files.length) {
                        var fr = new FileReader();
                        fr.onload = function () {
                            const TrailerRenderer: HTMLVideoElement = document.getElementById("channel-trailer") as HTMLVideoElement
                            TrailerRenderer.src = fr.result as string;
                        }
                        fr.readAsDataURL(files[0]);
                        core.channel.setChannelTrailer(files[0])
                    }
                    setTrailerState(true)
                }}
            />
        </div>
    )
}

interface SelectTrailerProps {
    setTrailerState: React.Dispatch<React.SetStateAction<boolean>>
}

const SelectTrailer: React.FC<SelectTrailerProps> = ({
    setTrailerState
}) => {
    return (
        <div style={{
            border: "1.5px dashed grey",
            width: "calc(100% - 50px)",
            height: "70%",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
        }}>
            <span className="material-icons"
                style={{
                    color: "grey"
                }}
            >
                cloud_upload
            </span>
            <input type="file"
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    opacity: "0"
                }}
                onChange={e => {
                    const files = e.target.files
                    if (FileReader && files && files.length) {
                        var fr = new FileReader();
                        fr.onload = function () {
                            const TrailerRenderer: HTMLSourceElement = document.getElementById("channel-trailer") as HTMLSourceElement
                            TrailerRenderer.src = fr.result as string;
                        }
                        fr.readAsDataURL(files[0]);
                        core.channel.setChannelTrailer(files[0])
                    }
                    setTrailerState(true)
                }}
            />
        </div>
    )
}

export const TrailerSettings: React.FC = () => {
    const [trailerPresent, setTrailerState] = useState<boolean>(false)
    const { channel_trailer } = usePulse(core.user.state.info)
    const { disable_trailer } = usePulse(core.settings.state.settings)
    return (
        <div style={{
            width: "calc(100% - 100px)",
            marginTop: "30px"
        }}>
            <h4 style={{
                fontFamily: "Poppins",
                fontSize: "10px",
                color: "grey"
            }}>
                CHANNEL TRAILER
            </h4>
            <h4 style={{
                fontFamily: "Poppins",
                fontSize: "10px",
                color: "silver"
            }}>
                Your channel trailer will be rendered on top of your banner and explains almost everything about your channel.
                The video should be less than 20 minutes. Choose any video supported file on your PC and drop it on in the box
                below.
            </h4>
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>
                <h4 style={{
                    fontFamily: "Poppins",
                    fontSize: "10px",
                    color: "silver"
                }}>
                    Disable your channel trailer temporarily.
                </h4>
                <IOSButton
                    checked={disable_trailer}
                    setState={(state: boolean) => core.settings.state.settings.patch({ disable_trailer: state })}
                />
            </div>
            <div style={{
                width: "300px",
                height: "170px",
                backgroundColor: "#0E0E10",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                position: "relative"
            }}>
                {trailerPresent ?
                    <SelectedChannelTrailerToRender setTrailerState={setTrailerState} /> :
                    channel_trailer ?
                        <SelectedChannelTrailerToRender
                            setTrailerState={setTrailerState}
                        >
                            <video
                                width="320"
                                height="240"
                                controls
                                src={channel_trailer}
                                id="channel-trailer"
                            >

                            </video>
                        </SelectedChannelTrailerToRender> :
                        <SelectTrailer setTrailerState={setTrailerState} />
                }
            </div>
        </div>
    )
}