import { rest_api as Api } from '../../api'

import authStates from '../auth/states'

import { user_data, user_state } from './interface'

//get validated user info
async function info(payload: Record<string, boolean>, me: boolean = false, domain?: string) {
    if (!me) return await Api.post(`user/info?domain=${domain}`, { info: payload, csrf: authStates.csrf_token._value, me })
    return await Api.post(`user/info`, { info: payload, csrf: authStates.csrf_token._value, me })
}

//update non credentials
async function update(payload: { data: user_data }) {
    return (await Api.post('user/update', { ...payload, csrf: authStates.csrf_token._value }))
}

//set photo for channel
async function setProfilePhoto(file: File) {
    const form: FormData = await new FormData()
    await form.append('photo', file)
    return await Api.post('photo', form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

async function getMetaData(url: string) {
    return await Api.post('vod/meta-data', { url, csrf: authStates.csrf_token._value })
}

//get state
async function state(user_id: string, payload: { state: user_state }) {
    return (await Api.post(`app/activity/setState?user_id=${user_id}`, payload))
}

export default {
    info,
    update,
    state,
    setProfilePhoto,
    getMetaData
}