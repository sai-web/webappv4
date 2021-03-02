import { rest_api as Api } from '../../api'
import authStates from '../auth/states'

//get all the vods
async function getVods(user_id?: string) {
    if (!user_id) return (await Api.get(`vod/vods/@me?csrf=${authStates.csrf_token.value}`))
    else return (await Api.get(`vod/vods/${user_id}?csrf=${authStates.csrf_token.value}`))
}

//watch a specific vod
async function watch(vod_id: string) {
    return (await Api.put(`vod/watch/${vod_id}?csrf=${authStates.csrf_token.value}`))
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
    return (await Api.post(`vod/create?csrf=${authStates.csrf_token.value}`, { vod_info: payload }))
}

//remove a vod
async function remove(vod_id: string) {
    return (await Api.post(`vod/delete?${vod_id}?csrf=${authStates.csrf_token.value}`))
}

export default {
    getVods,
    watch,
    create,
    remove
}