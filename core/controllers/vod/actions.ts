import collections from './collections'
import routes from './routes'

import states from './states'
import channelStates from '../channel/states'
import vodCollections from '../vod/collections'

//get all vods and store them in a collection
function getVods(user_id?: string) {
    routes.getVods(user_id)
        .then(data => {
            if (data.status !== 404) {
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

//get your playlists or a certain playlist
function getPlaylist(playlist_name: string) {
    routes.getPlaylist(playlist_name)
        .then(data => {
            data.forEach((playlist: any) => {
                if (playlist) {
                    collections.playlists.collect(playlist, playlist.name)
                }
            })
        })
}

async function getPlaylists() {
    return routes.getPlaylist()
        .then(data => {
            return data.map((playlist: any) => {
                if (playlist) {
                    collections.playlists.createGroup(playlist.name)
                    const newList = states.playlists.value
                    newList.push(playlist)
                    states.playlists.set(newList)
                }
                return playlist.name
            });
        })
}

//add content to your playlist
function addVodToPlaylist(payload: { vod_id: string, playlists: string[] }) {
    routes.addVodToPlaylist(payload)
        .then(data => {
            payload.playlists.forEach(playlist_name => {
                collections.playlists.collect(data, playlist_name, {
                    method: "unshift"
                })
            });
        })
        .catch(() => null)
}

//delete content from playlist
function deleteVodFromPlaylist(playlist_name: string, vod_id: string) {
    routes.deleteVodFromPlaylist(playlist_name, vod_id)
        .then(() => {
            collections.playlists.remove(vod_id).everywhere()
        })
}

//delete the entire playlist
function deletePlaylist(playlist_name: string) {
    routes.deletePlaylist(playlist_name)
        .then(data => {

        })
}

//create a new playlist
function createPlaylist(playlist_name: string) {
    routes.createPlaylist(playlist_name)
        .then(data => {
            collections.playlists.createGroup(data.name)
            const newList = states.playlists.value
            newList.push(data)
            states.playlists.set(newList)
        })
}

type playlistMutation = { vod_id: string, name: string, method: "delete" | "create" }

function playlistUpdateMutations(mutations: playlistMutation[]) {
    states.vodPlaylistMutation.reset()
    routes.updatePlaylists(mutations)
        .then(() => {
            mutations.forEach(mutation => {
                if (mutation.method === "create") {
                    if (collections.playlists.getValueById(mutation.vod_id)) collections.playlists.put(mutation.vod_id, mutation.name)
                    else collections.playlists.collect(vodCollections.vods.selectors.CURRENT.value, mutation.name)
                } else if (mutation.method === "delete") {
                    collections.playlists.getGroup(mutation.name).remove(mutation.vod_id)
                }
            })
        })
}

export default {
    getVods,
    watch,
    create,
    remove,
    getPlaylist,
    addVodToPlaylist,
    deleteVodFromPlaylist,
    deletePlaylist,
    createPlaylist,
    getPlaylists,
    playlistUpdateMutations
}