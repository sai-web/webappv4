import React from 'react'
import { MultiSelectState, MultiSelectProps } from './interface'
import { X } from './svg'

interface RenderMultipleValuesProps {
    values: string[],
    stopPropagation: (e: any) => void,
    onDeleteOption: (e: any) => void
}

const RenderMultipleValues: React.FC<RenderMultipleValuesProps> = ({
    values,
    stopPropagation,
    onDeleteOption
}) => {
    return (
        <div style={{
            width: "265px",
            display: "flex",
            overflowX: "scroll"
        }} className="main-content-div">
            {values.map((value: any) => {
                return (
                    <div
                        key={value}
                        onClick={stopPropagation}
                        className="multiple value"
                        style={{
                            paddingRight: "30px",
                            marginRight: "5px",
                            background: "#1F1F23",
                            height: "12px",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "10px",
                            color: "white",
                            fontFamily: "Poppins",
                            fontSize: "12px",
                            whiteSpace: "nowrap"
                        }}
                    >
                        {value}
                        <span
                            data-value={value}
                            onClick={onDeleteOption}
                            className="delete"
                            style={{
                                position: "absolute",
                                /* top: 0, */
                                right: "10px",
                                display: "block",
                                /* padding: 10px, */
                                fontSize: "10px",
                                cursor: "pointer",
                            }}
                        >
                            <X />
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

interface RenderValuesProps {
    props: MultiSelectProps,
    state: MultiSelectState,
    onDeleteOption: (e: any) => void,
    stopPropagation: (e: any) => void
}

export const renderValues = ({
    props,
    state,
    onDeleteOption,
    stopPropagation
}: RenderValuesProps) => {
    const { placeholder, multiple } = props
    const { values } = state

    if (values.length === 0) {
        return (
            <div className="placeholder"
                style={{
                    padding: "5px 10px",
                    color: "grey",
                    fontFamily: "Roboto Condensed",
                    fontWeight: "lighter",
                    fontSize: "15px",
                }}
            >
                { placeholder}
            </div>
        )
    }

    if (multiple) {
        return (
            <RenderMultipleValues
                values={values}
                onDeleteOption={onDeleteOption}
                stopPropagation={stopPropagation}
            />
        )
    }

    return (
        <div className="value">
            { values[0]}
        </div>
    )
}