export type MultiSelectProps = {
    placeholder: string,
    options: {
        value: string,
        chosen: boolean
    }[],
    multiple?: boolean,
    setState: React.Dispatch<React.SetStateAction<string[]>> | Function
}

export type MultiSelectState = {
    values: string[],
    focusedValue: number,
    isFocused: boolean,
    isOpen: boolean,
    typed: string
}