import routes from './routes'
import { rest_api as Api } from '../../api'

import states from './states'

import { Error } from '../auth/events'

function getSettings() {
    routes.getSettings()
        .then(data => {
            states.settings.patch(data)
        })
        .catch(() => {
            Error.emit({ type: "Invalid Behaviour", message: "please report this issue as soon as possible. This could be because our servers were down or there's been a data breach." })
            return false
        })
}

function updateSettings() {
    routes.updateSettings(states.settings._value)
        .catch(() => {
            Error.emit({ type: "Invalid Behaviour", message: "please report this issue as soon as possible. This could be because our servers were down or there's been a data breach." })
            return false
        })
}

export default {
    getSettings,
    updateSettings
}