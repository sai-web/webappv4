import { rest_api as Api } from '../../api'

import authStates from '../auth/states'

import { user_data, user_state } from './interface'

//get validated user info
async function info(payload: Record<string, boolean>, me: boolean = false, domain: string, type: string) {
    if (!me) return await Api.post(`user/info/${type}/${domain}?csrf=${authStates.csrf_token.value}`, { info: payload })
    return await Api.post(`user/info/${type}/@me?csrf=${authStates.csrf_token.value}`, { info: payload })
}

//update non credentials
async function update(payload: { data: user_data }) {
    return (await Api.put(`user/update?csrf=${authStates.csrf_token.value}`, { ...payload }))
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
    return await Api.get(`vod/meta-data?url=${url}&csrf=${authStates.csrf_token.value}`)
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