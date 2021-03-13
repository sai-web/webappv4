import collections from './collections'
import routes from './routes'

import states from './states'
import channelStates from '../channel/states'

//get all vods and store them in a collection
function getVods(user_id?: string) {
    routes.getVods(user_id)
        .then(data => {
            if (data.status !== 404) {
                collections.vods.reset()
                data.data.forEach((vod: any) => {
                    vod.tags = JSON.parse(vod.tags)
                    collections.vods.collect(vod)
                    if (vod.archived) collections.vods.put(vod.vod_id, 'archived')
                });
            }
        })
}

//watch a vod 
function watch(vod_id: string) {
    routes.watch(vod_id)
}

export interface vodInfo {
    title: string
    thumbnail: string
    tags: string[]
    archived: boolean
    platform: string
    url: string
}

//create a vod and add it to the collection
function create(payload: vodInfo) {
    routes.create(payload)
        .then(data => {
            if (data.status !== 404) {
                collections.vods.collect(data.data, 'default', { patch: true, method: "unshift" })
                channelStates.current_channel.patch({
                    vods: channelStates.current_channel.value.vods! + 1
                })
            }
        })
}

//remove the vod and update the collection
function remove(vod_id: string) {
    routes.remove(vod_id)
        .then(data => {
            if (data.status !== 404) {
                collections.vods.remove(vod_id).everywhere()
                channelStates.current_channel.patch({
                    vods: channelStates.current_channel.value.vods! - 1
                })
            }
        })
}

async function getPlaylists() {
    return routes.getPlaylist()
        .then(data => {
            return data.map((playlist: any) => {
                if (playlist) {
                    collections.playlists.collect(data)
                }
                return playlist.name
            });
        })
}

async function getPlaylist(playlist_name: string) {
    collections.vods.reset()
    routes.getPlaylist(playlist_name)
        .then(data => {
            (data as string[]).map((item: any, index) => {
                if (item) {
                    collections.vods.collect(item)
                    if (index === 0) collections.vods.selectors.CURRENT.select(item.vod_id)
                }
            });
        })
}

//delete the entire playlist
function deletePlaylist(playlist_name: string) {
    routes.deletePlaylist(playlist_name)
}

//create a new playlist
function createPlaylist(playlist_name: string) {
    routes.createPlaylist(playlist_name)
        .then(() => {
            collections.playlists.collect({
                name: playlist_name,
                vods: 0
            })
        })
}

type playlistMutation = { vod_id: string, name: string, method: "delete" | "create" }

function playlistUpdateMutations(mutations: playlistMutation[]) {
    states.vodPlaylistMutation.reset()
    routes.updatePlaylists(mutations)
}

function checkForVodInPlaylists(vod_id: string) {
    return routes.checkForVodInPlaylists(vod_id)
        .then(mappings => {
            console.log(mappings)
            return mappings
        })
}

export default {
    getVods,
    watch,
    create,
    remove,
    deletePlaylist,
    createPlaylist,
    getPlaylists,
    playlistUpdateMutations,
    checkForVodInPlaylists,
    getPlaylist
}