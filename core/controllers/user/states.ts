import { State } from '@pulsejs/core'
import { App } from '../../app'

import { user_data, user_state } from './interface'

//the current user information
const info = App.State<user_data>({})
const state = App.State<user_state>(user_state.online)

export default {
    info,
    state
}