import React from 'react'
import { core } from '../../../core'
import { Error } from '../../../core/controllers/auth/events'

const allowedPlatforms = [
    "youtube",
    "spotify",
    "twitch"
]

interface PostProps {
    active: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    shareLinkInputRef: React.MutableRefObject<any>,
    setVodRecieved: React.Dispatch<React.SetStateAction<{ state: boolean, data: any }>>,
    setUrl: React.Dispatch<React.SetStateAction<string>>
}

export const PostSection: React.FC<PostProps> = ({
    active,
    setState,
    shareLinkInputRef,
    setVodRecieved,
    setUrl
}) => {
    return (
        <div style={{
            width: "100%",
            height: "70px",
            // backgroundColor: "red"
        }}>
            <h4 style={{
                fontFamily: "Whitney",
                fontSize: "20px",
                color: "white",
                lineHeight: "0",
                marginLeft: "40px"
            }}>
                Share Link
            </h4>
            <input type="text"
                id="share-link-input"
                style={{
                    width: "calc(100% - 100px)",
                    height: "35px",
                    backgroundColor: "#18181B",
                    position: "relative",
                    left: "50%",
                    transform: "translate(-50%,0)",
                    padding: "0 10px",
                    borderRadius: "5px",
                    color: "grey",
                    border: active ? "1px solid #4D6FFF" : "0px",
                    outline: "none"
                }}
                placeholder="paste the URL"
                onClick={e => {
                    setState(true)
                    navigator.clipboard.readText()
                        .then(url => {
                            (e.target as HTMLInputElement).value = url
                            if (allowedPlatforms.find(platform => url.includes(platform))) {
                                core.user.getVodDetails(new DOMParser(), url)!
                                    .then(data => {
                                        if (typeof data === "object") {
                                            setVodRecieved(() => {
                                                const newState = {
                                                    state: true,
                                                    data: { ...data, url }
                                                }
                                                return newState
                                            })
                                        }
                                    })
                                setUrl(url)
                            } else Error.emit({ type: "Unsupported Platform", message: "the platform chosen is currently not supported by us, you can host a poll for this and let us know." })
                        })
                }}
                readOnly
                ref={shareLinkInputRef}
            />
        </div>
    )
}