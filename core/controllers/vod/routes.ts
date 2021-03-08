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
    return (await Api.delete(`vod/delete/${vod_id}?csrf=${authStates.csrf_token.value}`))
}

//get your playlists or a certain playlist
async function getPlaylist(playlist_name?: string) {
    if (playlist_name) return (await Api.get(`vod/playlists?name=${playlist_name}&csrf=${authStates.csrf_token._value}`))
    return await Api.get(`vod/playlists?csrf=${authStates.csrf_token._value}`)
}

//add content to your playlist
async function addVodToPlaylist(payload: { vod_id: string, playlists: string[] }) {
    return await Api.put(`vod/playlists/add/vod?csrf=${authStates.csrf_token._value}`, payload)
}

//delete content from playlist
async function deleteVodFromPlaylist(playlist_name: string, vod_id: string) {
    return await Api.delete(`vod/playlists/delete/vod?playlist=${playlist_name}&vod=${vod_id}&csrf=${authStates.csrf_token._value}`)
}

//delete the entire playlist
async function deletePlaylist(playlist_name: string) {
    return await Api.delete(`vod/playlists/delete/playlist?playlist=${playlist_name}&csrf=${authStates.csrf_token._value}`)
}

export default {
    getVods,
    watch,
    create,
    remove,
    getPlaylist,
    addVodToPlaylist,
    deleteVodFromPlaylist,
    deletePlaylist
}