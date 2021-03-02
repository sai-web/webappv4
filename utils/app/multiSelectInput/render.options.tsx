import React from 'react'
import { MultiSelectProps, MultiSelectState } from './interface'
import { Check } from './svg'

interface renderOptionProps {
    option: any,
    index: any,
    props: MultiSelectProps,
    state: MultiSelectState,
    onHoverOption: (e: any) => void,
    onClickOption: (e: any) => void
}

const renderOption = ({
    option,
    index,
    props,
    state,
    onHoverOption,
    onClickOption
}: renderOptionProps) => {
    const { multiple } = props
    const { values, focusedValue } = state

    const { value } = option

    const selected = values.includes(value)

    let className = "option"
    if (selected) className += " selected"
    if (index === focusedValue) className += " focused"

    return (
        <div
            key={value}
            data-value={value}
            className={className}
            onMouseOver={onHoverOption}
            onClick={onClickOption}
            style={{
                padding: "10px 15px",
                cursor: "pointer",
                height: "15px",
                display: "flex",
                alignItems: "center",
                fontFamily: "Poppins",
                fontSize: "12px",
                color: "white"
            }}
        >
            { multiple ?
                <span className="checkbox"
                    style={{
                        content: '',
                        verticalAlign: "top",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "10px",
                        height: "10px",
                        padding: "2px",
                        border: "1px solid grey",
                        borderRadius: "20%",
                        margin: "2px 12px 0 0",
                        color: "#fff",
                        fontSize: "10px",
                    }}
                >
                    {selected ?
                        <Check /> :
                        <div style={{
                            width: "90%",
                            height: "90%",
                            backgroundColor: "grey",
                            borderRadius: "20%"
                        }}>

                        </div>
                    }
                </span> :
                null
            }
            { value}
        </div>
    )
}

interface renderOptionsProps {
    props: MultiSelectProps,
    state: MultiSelectState,
    onHoverOption: (e: any) => void,
    onClickOption: (e: any) => void
}

export const renderOptions = ({
    props,
    state,
    onClickOption,
    onHoverOption
}: renderOptionsProps) => {
    const { options } = props
    const { isOpen } = state;

    if (!isOpen) {
        return null
    }

    return (
        <div className="options"
            style={{
                position: "absolute",
                top: "100%",
                left: "0",
                right: "0",
                background: "#121212",
                width: "300px",
                height: "100px",
                overflowY: "scroll",
                marginTop: "10px",
                borderRadius: "10px",
                zIndex: 2
            }}
        >
            { options.map((option, index) => renderOption({
                onClickOption: onClickOption,
                onHoverOption: onHoverOption,
                props: props,
                state: state,
                index,
                option
            }))}
        </div>
    )
}