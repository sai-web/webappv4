import React from 'react'

import { ProfilePhoto } from '../../user/channel/accessories'
import { MultiSelectInput } from '../accessories'

export const ProfilePic: React.FC = () => {
    return (
        <ProfilePhoto
            style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginLeft: "20px"
            }}
            svg={{
                width: "50px",
                height: "50px"
            }}
        />
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

export const ChannelTags: React.FC = () => {
    return (
        <div>
            <h4 style={{
                fontFamily: "Roboto Condensed",
                fontSize: "10px",
                color: "silver",
                lineHeight: "0"
            }}>
                TAGS
                </h4>
            <MultiSelectInput
                placeholder="channel tags"
                options={[
                    {
                        value: 'Creator',
                        chosen: true
                    },
                    {
                        value: 'Streamer',
                        chosen: true
                    },
                    {
                        value: 'Gamer',
                        chosen: false
                    },
                    {
                        value: 'Programmer',
                        chosen: true
                    },
                    {
                        value: 'Educator',
                        chosen: false
                    },
                    {
                        value: 'Athelete',
                        chosen: false
                    },
                    {
                        value: 'Artist',
                        chosen: false
                    },
                    {
                        value: 'Musician',
                        chosen: false
                    },
                    {
                        value: 'Innovator',
                        chosen: false
                    },
                ]}
                multiple
            />
        </div>
    )
}