import { rest_api as Api } from '../../api'
import authStates from '../auth/states'

async function getSettings() {
    return (await Api.get(`settings?csrf=${authStates.csrf_token._value}`))
}

export interface Settings {
    theme: "dark" | "light"
    disable_banner: boolean
    disable_trailer: boolean
}

async function updateSettings(payload: Settings) {
    return (await Api.post(`settings/update?csrf=${authStates.csrf_token._value}`, payload))
}

export default {
    getSettings,
    updateSettings
}