import React from 'react'
export interface PageModeProps {
    name: string
    logo: JSX.Element
    color?: string
    pos: number
    setPageModes: React.Dispatch<React.SetStateAction<Array<boolean>>>
}

export interface MainModeProps {
    name: string
    color?: string
    url: string
    setMainProps: React.Dispatch<React.SetStateAction<Array<boolean>>>
}

export interface UserModeProps {
    name: string
}