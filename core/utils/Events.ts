import { App } from '../app'

export const animateTemplate = App.Event<{ display: boolean }>({
    name: "animate-template"
})

export enum MenuType {
    ContentMenu = "ContentMenu",
    ConnectionMenu = "ConnectionMenu",
    Profile = "Profile",
    ChannelDropDown = "ChannelDropDown",
    ShareLinkComponent = "ShareLinkComponent",
    Settings = "Settings"
}

interface MenuProps {
    type: MenuType
    display: boolean
    domain?: string
    color?: string
}

export const lanuchMenu = App.Event<MenuProps>({
    name: "lanuch-menu-options"
})

export const contentPreview = App.Event<{ show: boolean }>({
    name: "content-preview"
})