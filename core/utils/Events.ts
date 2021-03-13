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
    Settings = "Settings",
    ContextMenu = "ContextMenu",
    SelectPlaylistMenu = "SelectPlaylistMenu"
}

interface MenuProps {
    type: MenuType
    display: boolean
    domain?: string
    color?: string
    position?: {
        x: number,
        y: number,
        width: number,
        height: number
    }
}

export const lanuchMenu = App.Event<MenuProps>({
    name: "lanuch-menu-options"
})

interface ContentPreviewProps {
    show: boolean
}

export const contentPreview = App.Event<ContentPreviewProps>({
    name: "content-preview"
})

interface ConfirmNoticeProps {
    show: boolean
    message: {
        header: string,
        body: string
    }
    do: () => null
}

export const confirmNotice = App.Event<ConfirmNoticeProps>({
    name: "confirm-notice"
})