import React from 'react'

function resize_metrics(
    txt: string,
    cols: number = 0
) {
    var maxrows = 5
    var arraytxt = txt.split('\n')
    var rows = arraytxt.length
    if (rows > maxrows) return maxrows
    for (var i = 0; i < arraytxt.length; i++) rows += (arraytxt[i].length / cols);

    if (rows > maxrows) return maxrows
    else return rows
}

function resize_text_area(textbox: any) {
    var txt = textbox.value as string
    var cols = textbox.cols as number
    textbox.rows = resize_metrics(txt, cols)
}

interface MainCredsProps {
    type: string,
    value: string,
    placeholder: string,
    cols: number,
    // rows: number,
    resize?: boolean,
    // stateType: stateTypes,
    stateSetter: React.Dispatch<React.SetStateAction<any>>
}

export const MainCredentialUpdate: React.FC<MainCredsProps> = ({
    type,
    value,
    placeholder,
    cols,
    resize = false,
    stateSetter,
    // stateType
}) => {
    let rows = resize_metrics(value, cols)
    return (
        <div>
            <h4 style={{
                fontFamily: "Poppins",
                color: "grey",
                fontSize: "12px",
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
                onChange={e => {
                    // if (stateType) {
                    stateSetter((prev: any) => {
                        const newState = { ...prev }
                        newState.title = e.target.value
                        return newState
                    })
                    // }
                }}
            >

            </textarea>
        </div>
    )
}