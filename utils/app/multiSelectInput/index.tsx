import React, { VoidFunctionComponent } from 'react'
import { Check, ChevronDown, ChevronUp, X } from './svg'

import { MultiSelectProps, MultiSelectState } from './interface'

import { renderValues } from './render.values'
import { renderOptions } from './render.options'

export class MultiSelectInput extends React.Component<MultiSelectProps, MultiSelectState> {
    public timeout: NodeJS.Timeout = setTimeout(() => {
        this.setState({
            typed: ''
        })
    }, 1000)
    constructor(public props: MultiSelectProps) {
        super(props)

        this.state = {
            values: [],
            focusedValue: -1,
            isFocused: false,
            isOpen: false,
            typed: ''
        }

        props.options.forEach((option: {
            value: string,
            chosen: boolean
        }) => {
            if (option.chosen) this.state.values.push(option.value)
        });

        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)

        this.onClick = this.onClick.bind(this)
        this.onDeleteOption = this.onDeleteOption.bind(this)
        this.onHoverOption = this.onHoverOption.bind(this)
        this.onClickOption = this.onClickOption.bind(this)
    }

    onFocus() {
        this.setState({
            isFocused: true
        })
    }

    onBlur() {
        const { options, multiple } = this.props

        this.setState((prevState) => {
            const { values } = prevState

            if (multiple) {
                return {
                    focusedValue: -1,
                    isFocused: false,
                    isOpen: false
                }
            } else {
                const value = values[0]

                let focusedValue = -1

                if (value) {
                    focusedValue = options.findIndex((option: any) => option.value === value)
                }

                return {
                    focusedValue,
                    isFocused: false,
                    isOpen: false
                }
            }
        })
    }

    onKeyDown(e: any) {
        const { options, multiple } = this.props
        const { isOpen } = this.state

        switch (e.key) {
            case ' ':
                e.preventDefault()
                if (isOpen) {
                    if (multiple) {
                        this.setState((prevState, _) => {
                            const { focusedValue } = prevState

                            if (focusedValue !== -1) {
                                const [...values] = prevState.values
                                const value = options[focusedValue].value
                                const index = values.indexOf(value)

                                if (index === -1) {
                                    values.push(value)
                                } else {
                                    values.splice(index, 1)
                                }

                                return { values }
                            }

                            return null
                        })
                    }
                } else {
                    this.setState({
                        isOpen: true
                    })
                }
                break
            case 'Escape':
            case 'Tab':
                if (isOpen) {
                    e.preventDefault()
                    this.setState({
                        isOpen: false
                    })
                }
                break
            case 'Enter':
                this.setState((prevState, _) => ({
                    isOpen: !prevState.isOpen
                }))
                break
            case 'ArrowDown':
                e.preventDefault()
                this.setState((prevState, _) => {
                    let { focusedValue } = prevState

                    if (focusedValue < options.length - 1) {
                        focusedValue++

                        if (multiple) {
                            return {
                                ...prevState,
                                focusedValue
                            }
                        } else {
                            return {
                                values: [options[focusedValue].value],
                                focusedValue
                            }
                        }
                    }

                    return null
                })
                break
            case 'ArrowUp':
                e.preventDefault()
                this.setState((prevState, _) => {
                    let { focusedValue } = prevState

                    if (focusedValue > 0) {
                        focusedValue--

                        if (multiple) {
                            return {
                                ...prevState,
                                focusedValue
                            }
                        } else {
                            return {
                                values: [options[focusedValue].value],
                                focusedValue
                            }
                        }
                    }
                    return null
                })
                break
            default:
                if (/^[a-z0-9]$/i.test(e.key)) {
                    const char = e.key

                    clearTimeout(this.timeout)

                    this.setState((prevState, _) => {
                        const typed = prevState.typed + char
                        const re = new RegExp(`^${typed}`, 'i')
                        const index = options.findIndex((option: any) => re.test(option.value))

                        if (index === -1) {
                            return {
                                ...prevState,
                                typed
                            }
                        }

                        if (multiple) {
                            return {
                                ...prevState,
                                focusedValue: index,
                                typed
                            }
                        } else {
                            return {
                                values: [options[index].value],
                                focusedValue: index,
                                typed
                            }
                        }
                    })
                }
                break
        }
    }

    onClick() {
        this.setState((prevState: any) => ({
            isOpen: !prevState.isOpen
        }))
    }

    onDeleteOption(e: any) {
        const { value } = e.currentTarget.dataset

        this.setState((prevState: any) => {
            const [...values] = prevState.values
            const index = values.indexOf(value)

            values.splice(index, 1)

            return { values }
        })
    }

    onHoverOption(e: any) {
        const { options } = this.props

        const { value } = e.currentTarget.dataset
        const index = options.findIndex((option: any) => option.value === value)

        this.setState({
            focusedValue: index
        })
    }

    onClickOption(e: any) {
        const { multiple } = this.props

        const { value } = e.currentTarget.dataset

        this.setState((prevState, _) => {
            if (!multiple) {
                return {
                    values: [value],
                    isOpen: false
                }
            }

            const [...values] = prevState.values
            const index = values.indexOf(value)

            if (index === -1) {
                values.push(value)
            } else {
                values.splice(index, 1)
            }

            return { ...prevState, values }
        })
    }

    stopPropagation(e: any) {
        e.stopPropagation()
    }

    componentDidUpdate(_: MultiSelectProps, prevState: MultiSelectState) {
        if ((this.state !== prevState)) {
            // console.log(this.props, prevProps, this.state, prevState)
            this.props.setState(this.state.values)
        }
    }

    render() {
        const { isOpen } = this.state

        return (
            <div
                className="select"
                tabIndex={0}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onKeyDown={this.onKeyDown}
                style={{
                    position: "relative",
                    display: "inline-block",
                    width: "300px",
                    // overflowX: "scroll",
                    // overflowY: "visible"
                }}
            >
                <div
                    className="selection"
                    onClick={this.onClick}
                    style={{
                        position: "relative",
                        padding: "5px",
                        background: "#121212",
                        height: "20px",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                >
                    {/* <div style={{
                        width: "100%",
                        backgroundColor: "red"
                    }}>
                    </div> */}
                    {renderValues({
                        props: this.props,
                        state: this.state,
                        onDeleteOption: this.onDeleteOption,
                        stopPropagation: this.stopPropagation
                    })}
                    <span className="arrow"
                        style={{
                            position: "absolute",
                            /* top: 5px, */
                            right: "10px",
                            display: "block",
                            /* padding: 10px, */
                            fontSize: "10px",
                            color: "#898989",
                        }}
                    >
                        {isOpen ? <ChevronUp /> : <ChevronDown />}
                    </span>
                </div>
                { renderOptions({
                    props: this.props,
                    state: this.state,
                    onClickOption: this.onClickOption,
                    onHoverOption: this.onHoverOption
                })}
            </div>
        )
    }
}