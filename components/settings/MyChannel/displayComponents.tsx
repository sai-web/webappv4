import React, { useState } from 'react'

import { ProfilePhoto } from '../../user/channel/accessories'

export const ProfilePic: React.FC<{
    edit?: boolean
}> = ({
    edit
}) => {
        const [profileImage, setImageState] = useState<boolean>(false)
        return (
            <div style={{
                position: "relative",
                width: "100px",
                height: "100px",
                marginLeft: "20px"
            }}>
                {profileImage ?
                    <img src=""
                        id="profile-photo"
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            opacity: 0.5
                        }}
                    /> :
                    <ProfilePhoto
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%"
                        }}
                        svg={{
                            width: "50px",
                            height: "50px"
                        }}
                    />
                }
                {edit ?
                    <div>
                        <span className="material-icons"
                            style={{
                                color: "silver",
                                fontSize: "20px",
                                position: "absolute",
                                bottom: "5px",
                                right: "5px",
                                cursor: "pointer"
                            }}
                            onClick={() => document.getElementById('profile-photo-file')?.click()}
                        >
                            library_add
                        </span>
                        <input type="file"
                            style={{
                                // opacity: 0,
                                backgroundColor: "red",
                                position: "absolute",
                                top: "0",
                                zIndex: 2,
                                width: "0"
                            }}
                            id="profile-photo-file"
                            onChange={e => {
                                const files = e.target.files
                                if (FileReader && files && files.length) {
                                    var fr = new FileReader();
                                    fr.onload = function () {
                                        const imageRenderer: HTMLImageElement = document.getElementById("profile-photo") as HTMLImageElement
                                        imageRenderer.src = fr.result as string;
                                    }
                                    fr.readAsDataURL(files[0]);
                                }
                                setImageState(true)
                            }}
                        />
                    </div> : ""
                }
            </div>
        )
    }

export const MainCredential: React.FC<{
    type: string,
    value: string
}> = ({
    type,
    value
}) => {
        return (
            <div>
                <h4 style={{
                    fontFamily: "Roboto Condensed",
                    fontSize: "10px",
                    color: "silver",
                    lineHeight: "0"
                }}>
                    {type}
                </h4>
                <h4 style={{
                    fontFamily: "Whitney",
                    fontSize: "15px",
                    color: "white",
                    lineHeight: "0"
                }}>
                    {value}
                </h4>
            </div>
        )
    }

function resize_text_area(textbox: any) {
    var maxrows = 5
    var txt = textbox.value as string
    var cols = textbox.cols as number

    var arraytxt = txt.split('\n')
    var rows = arraytxt.length

    for (var i = 0; i < arraytxt.length; i++) rows += (arraytxt[i].length / cols);

    if (rows > maxrows) textbox.rows = maxrows
    else textbox.rows = rows
}

export const MainCredentialUpdate: React.FC<{
    type: string,
    value: string,
    placeholder: string,
    cols: number,
    rows: number,
    resize?: boolean
}> = ({
    type,
    value,
    placeholder,
    cols,
    rows,
    resize = false
}) => {
        return (
            <div>
                <h4 style={{
                    fontFamily: "Roboto Condensed",
                    fontSize: "10px",
                    color: "silver",
                    lineHeight: "0"
                }}>
                    {type}
                </h4>
                <textarea
                    style={{
                        // width: "calc(100% - 30px)",
                        // height: "20px",
                        borderRadius: "5px",
                        backgroundColor: "#121212",
                        borderWidth: "0",
                        fontFamily: "Roboto Condensed",
                        fontWeight: "lighter",
                        color: "grey",
                        fontSize: `15px`,
                        padding: "5px 10px",
                        outline: "none",
                        resize: "none"
                    }}
                    placeholder={placeholder}
                    cols={cols}
                    rows={rows}
                    id="settings-channel-update-input"
                    name="settings-channel-update-input"
                    onKeyUp={e => {
                        if (resize) resize_text_area(e.target)
                    }}
                    className="main-content-div"
                    defaultValue={value}
                >

                </textarea>
            </div>
        )
    }