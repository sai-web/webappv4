import React from 'react'
export interface PageModeProps {
    name: string
    logo: JSX.Element
}

export interface MainModeProps {
    name: string
    color?: string
    setMainProps: React.Dispatch<React.SetStateAction<Array<boolean>>>
}

export interface UserModeProps {
    name: string
}