import { rest_api as Api } from '../../api'

import authStates from '../auth/states'

import { user_data, user_state } from './interface'

//get validated user info
async function info(payload: Record<string, boolean>, me: boolean = false, domain?: string) {
    if (!me) return await Api.post(`user/info?domain=${domain}`, { info: payload, csrf: authStates.csrf_token._value, me })
    return await Api.post(`user/info`, { info: payload, csrf: authStates.csrf_token._value, me })
}

//update non credentials
async function update(payload: { user_id: string, data: user_data }) {
    return (await Api.post('app/user/update', payload))
}

//get state
async function state(user_id: string, payload: { state: user_state }) {
    return (await Api.post(`app/activity/setState?user_id=${user_id}`, payload))
}

export default {
    info,
    update,
    state
}