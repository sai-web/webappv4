import { App } from '../../app'

interface Settings {
    theme: "dark" | "light"
    disable_banner: boolean
    disable_trailer: boolean
}

const initialState: Settings = {
    theme: "dark",
    disable_banner: false,
    disable_trailer: false
}

const settings = App.State<Settings>(initialState)

export default {
    settings
}