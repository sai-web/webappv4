import React from 'react'
export interface PageModeProps {
    name: string
    logo: JSX.Element
    page: string
    url: string
}

export interface MainModeProps {
    name: string
    url: string
    page: string
}

export interface UserModeProps {
    name: string
    size: string
}