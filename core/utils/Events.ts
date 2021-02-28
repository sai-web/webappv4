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
    vod_id?: string
}

export const lanuchMenu = App.Event<MenuProps>({
    name: "lanuch-menu-options"
})

interface ContentPreviewProps {
    show: boolean,
    vod_id: string
}

export const contentPreview = App.Event<ContentPreviewProps>({
    name: "content-preview"
})