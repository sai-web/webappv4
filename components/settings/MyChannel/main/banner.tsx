import React, { useEffect, useState } from 'react'
import { core } from '../../../../core'

import { usePulse } from '@pulsejs/react'

import { IOSButton } from '../../../../utils/app/ios-switch-button'

interface RenderBannerProps {
    setBannerState: React.Dispatch<React.SetStateAction<boolean>>,
    banner?: JSX.Element
}

const SelectedBannerToRender: React.FC<RenderBannerProps> = ({
    setBannerState,
    banner
}) => {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center"
        }}>
            {banner || <img src="" id="banner-image"
                style={{
                    // width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.5
                }}
            />}
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
                            const imageRenderer: HTMLImageElement = document.getElementById("banner-image") as HTMLImageElement
                            imageRenderer.src = fr.result as string;
                        }
                        fr.readAsDataURL(files[0]);
                        core.channel.setBanner(files[0])
                    }
                    setBannerState(true)
                }}
            />
        </div>
    )
}

interface SelectBannerProps {
    setBannerState: React.Dispatch<React.SetStateAction<boolean>>
}

const SelectBanner: React.FC<SelectBannerProps> = ({
    setBannerState
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
                            const imageRenderer: HTMLImageElement = document.getElementById("banner-image") as HTMLImageElement
                            imageRenderer.src = fr.result as string;
                        }
                        fr.readAsDataURL(files[0]);
                        core.channel.setBanner(files[0])
                    }
                    setBannerState(true)
                }}
            />
        </div>
    )
}

export const BannerSettings: React.FC = () => {
    const [bannerPresent, setBannerState] = useState<boolean>(false)
    const { banner } = usePulse(core.user.state.info)
    const { disable_banner } = usePulse(core.settings.state.settings)
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
                BANNER
            </h4>
            <h4 style={{
                fontFamily: "Poppins",
                fontSize: "10px",
                color: "silver"
            }}>
                Your banner will be the center of attraction on your channel page,
                so choose it wisely. Choose any file on your PC and drop it on in the box
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
                    Disable your banner temporarily.
                </h4>
                <IOSButton
                    checked={disable_banner}
                    setState={(state: boolean) => core.settings.state.settings.patch({ disable_banner: state })}
                />
            </div>
            <div style={{
                width: "100%",
                height: "150px",
                backgroundColor: "#0E0E10",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                position: "relative"
            }}>
                {bannerPresent ?
                    <SelectedBannerToRender setBannerState={setBannerState} /> :
                    banner ?
                        <SelectedBannerToRender
                            setBannerState={setBannerState}
                            banner={
                                <img src={banner}
                                    style={{
                                        // width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        opacity: 0.5
                                    }}
                                />
                            }
                        /> :
                        <SelectBanner setBannerState={setBannerState} />
                }
            </div>
        </div>
    )
}