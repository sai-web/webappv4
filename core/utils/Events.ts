import { App } from '../app'

export const animateTemplate = App.Event<{ enter: boolean }>({
    name: "animate-template"
})

export enum MenuType {
    ContentMenu = "ContentMenu"
}

export const lanuchMenu = App.Event<{ type: MenuType, enter: boolean }>({
    name: "lanuch-menu-options"
})