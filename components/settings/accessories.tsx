import React from 'react'
import { motion } from 'framer-motion'

import { lanuchMenu, MenuType } from '../../core/utils/Events'
import { relative } from 'path'

export const SettingType: React.FC<{
    name: string
}> = ({
    name
}) => {
        return (
            <h4 style={{
                fontFamily: "Whitney",
                fontSize: "12px",
                color: "grey",
                marginLeft: "10px"
            }}>
                {name}
            </h4>
        )
    }

export const SettingChildDiv: React.FC = ({
    children
}) => {
    return (
        <div style={{
            width: "200px",
            height: "10px",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            margin: "5px",
            padding: "10px",
            cursor: "pointer"
        }} className="settings-selection-div">
            {children}
        </div>
    )
}

export const SettingChildH4: React.FC<{
    name: string
}> = ({ name }) => {
    return (
        <h4 style={{
            fontFamily: "Poppins",
            fontSize: "12px",
            color: "silver",
            marginLeft: "5px"
        }}>
            {name}
        </h4>
    )
}

export const CloseButton: React.FC = ({ children }) => {
    return (
        <div
            className="settings-close-button"
            style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: "1px solid #72767D",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                position: "absolute",
                top: "20px",
                right: "20px"
            }}
            onClick={() => lanuchMenu.emit({ type: MenuType.Settings, display: false })}
        >
            {children}
        </div>
    )
}

export const SettingsSection: React.FC<{
    type: string,
    elements: {
        name: string,
        do: () => void,
        logo: JSX.Element
    }[]
}> = ({
    type,
    elements
}) => {
        return (
            <div>
                <SettingType name={type} />
                {
                    elements.map((child, index) => {
                        return (
                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                onClick={child.do}
                                key={`setting-${type}-${index}`}
                            >
                                <SettingChildDiv>
                                    {child.logo}
                                    <SettingChildH4 name={child.name} />
                                </SettingChildDiv>
                            </motion.div>
                        )
                    })
                }
            </div>
        )
    }


export class MultiSelectInput extends React.Component<any, any> {
    public timeout: NodeJS.Timeout = setTimeout(() => {
        this.setState({
            typed: ''
        })
    }, 1000)
    constructor(public props: any) {
        super(props)

        this.state = {
            values: [],
            focusedValue: -1,
            isFocused: false,
            isOpen: false,
            typed: ''
        }

        props.options.forEach((option: any) => {
            if (option.chosen) this.state.values.push(option.value)
        });

        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)

        this.onClick = this.onClick.bind(this)
        this.onDeleteOption = this.onDeleteOption.bind(this)
        this.onHoverOption = this.onHoverOption.bind(this)
        this.onClickOption = this.onClickOption.bind(this)

        this.renderOption = this.renderOption.bind(this)
    }

    onFocus() {
        this.setState({
            isFocused: true
        })
    }

    onBlur() {
        const { options, multiple } = this.props

        this.setState((prevState: any) => {
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
                        this.setState((prevState: any) => {
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
                this.setState((prevState: any) => ({
                    isOpen: !prevState.isOpen
                }))
                break
            case 'ArrowDown':
                e.preventDefault()
                this.setState((prevState: any) => {
                    let { focusedValue } = prevState

                    if (focusedValue < options.length - 1) {
                        focusedValue++

                        if (multiple) {
                            return {
                                focusedValue
                            }
                        } else {
                            return {
                                values: [options[focusedValue].value],
                                focusedValue
                            }
                        }
                    }
                })
                break
            case 'ArrowUp':
                e.preventDefault()
                this.setState((prevState: any) => {
                    let { focusedValue } = prevState

                    if (focusedValue > 0) {
                        focusedValue--

                        if (multiple) {
                            return {
                                focusedValue
                            }
                        } else {
                            return {
                                values: [options[focusedValue].value],
                                focusedValue
                            }
                        }
                    }
                })
                break
            default:
                if (/^[a-z0-9]$/i.test(e.key)) {
                    const char = e.key

                    clearTimeout(this.timeout)

                    this.setState((prevState: any) => {
                        const typed = prevState.typed + char
                        const re = new RegExp(`^${typed}`, 'i')
                        const index = options.findIndex((option: any) => re.test(option.value))

                        if (index === -1) {
                            return {
                                typed
                            }
                        }

                        if (multiple) {
                            return {
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

        this.setState((prevState: any) => {
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

            return { values }
        })
    }

    stopPropagation(e: any) {
        e.stopPropagation()
    }

    renderValues() {
        const { placeholder, multiple } = this.props
        const { values } = this.state

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
                <div style={{
                    width: "265px",
                    display: "flex",
                    overflowX: "scroll"
                }} className="main-content-div">
                    {values.map((value: any) => {
                        return (
                            <span
                                key={value}
                                onClick={this.stopPropagation}
                                className="multiple value"
                                style={{
                                    paddingRight: "30px",
                                    marginRight: "5px",
                                    background: "#1F1F23",
                                    color: "white",
                                    height: "12px",
                                    fontFamily: "Poppins",
                                    display: "flex",
                                    alignItems: "center",
                                    borderRadius: "10px",
                                    fontSize: "12px",
                                }}
                            >
                                { value}
                                <span
                                    data-value={value}
                                    onClick={this.onDeleteOption}
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
                            </span>
                        )
                    })}
                </div>
            )
        }

        return (
            <div className="value">
                { values[0]}
            </div>
        )
    }

    renderOptions() {
        const { options } = this.props
        const { isOpen } = this.state;

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
                { options.map(this.renderOption)}
            </div>
        )
    }

    renderOption(option: any, index: any) {
        const { multiple } = this.props
        const { values, focusedValue } = this.state

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
                onMouseOver={this.onHoverOption}
                onClick={this.onClickOption}
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
                    {this.renderValues()}
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
                { this.renderOptions()}
            </div>
        )
    }
}

const ChevronDown = () => (
    <svg
        viewBox="0 0 10 7"
        style={{
            display: "block",
            width: "1em",
            height: "1em",
            fill: "currentColor"
        }}
    >
        <path d="M2.08578644,6.5 C1.69526215,6.89052429 1.69526215,7.52368927 2.08578644,7.91421356 C2.47631073,8.30473785 3.10947571,8.30473785 3.5,7.91421356 L8.20710678,3.20710678 L3.5,-1.5 C3.10947571,-1.89052429 2.47631073,-1.89052429 2.08578644,-1.5 C1.69526215,-1.10947571 1.69526215,-0.476310729 2.08578644,-0.0857864376 L5.37867966,3.20710678 L2.08578644,6.5 Z" transform="translate(5.000000, 3.207107) rotate(90.000000) translate(-5.000000, -3.207107) " />
    </svg>
)

const ChevronUp = () => (
    <svg
        viewBox="0 0 10 8"
        style={{
            display: "block",
            width: "1em",
            height: "1em",
            fill: "currentColor"
        }}
    >
        <path d="M2.08578644,7.29289322 C1.69526215,7.68341751 1.69526215,8.31658249 2.08578644,8.70710678 C2.47631073,9.09763107 3.10947571,9.09763107 3.5,8.70710678 L8.20710678,4 L3.5,-0.707106781 C3.10947571,-1.09763107 2.47631073,-1.09763107 2.08578644,-0.707106781 C1.69526215,-0.316582489 1.69526215,0.316582489 2.08578644,0.707106781 L5.37867966,4 L2.08578644,7.29289322 Z" transform="translate(5.000000, 4.000000) rotate(-90.000000) translate(-5.000000, -4.000000) " />
    </svg>
)

const X = () => (
    <svg
        viewBox="0 0 16 16"
        style={{
            display: "block",
            width: "1em",
            height: "1em",
            fill: "currentColor"
        }}
    >
        <path d="M2 .594l-1.406 1.406.688.719 5.281 5.281-5.281 5.281-.688.719 1.406 1.406.719-.688 5.281-5.281 5.281 5.281.719.688 1.406-1.406-.688-.719-5.281-5.281 5.281-5.281.688-.719-1.406-1.406-.719.688-5.281 5.281-5.281-5.281-.719-.688z" />
    </svg>
)

const Check = () => (
    <svg
        viewBox="0 0 16 16"
        style={{
            display: "block",
            width: "1em",
            height: "1em",
            fill: "currentColor"
        }}
    >
        <path d="M13 .156l-1.406 1.438-5.594 5.594-1.594-1.594-1.406-1.438-2.844 2.844 1.438 1.406 3 3 1.406 1.438 1.406-1.438 7-7 1.438-1.406-2.844-2.844z" transform="translate(0 1)" />
    </svg>
)