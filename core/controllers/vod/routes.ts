import { rest_api as Api } from '../../api'
import authStates from '../auth/states'

//get all the vods
async function getVods(user_id: string) {
    return (await Api.post(`vods?user_id=${user_id}`))
}

//watch a specific vod
async function watch(payload: { vod_id: string, user_id: string }) {
    return (await Api.post(`watch`, payload))
}

export interface vodInfo {
    title: string
    thumbnail: string
    tags: string[]
    archived: boolean
    platform: string
    url: string
}

//create a new vod
async function create(payload: vodInfo) {
    return (await Api.post(`vod/create`, { vod_info: payload, csrf: authStates.csrf_token.value }))
}

//remove a vod
async function remove(payload: { vod_id: string, user_id: string }) {
    return (await Api.post(`delete`, payload))
}

export default {
    getVods,
    watch,
    create,
    remove
}