import { App } from '../../app'
import { user_data } from '../user/interface'

const current_channel = App.State<user_data>({})
const current_channel_state = App.State<string>('')

export default {
    current_channel,
    current_channel_state
}