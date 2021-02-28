import collections from './collections'
import routes from './routes'

import userStates from '../user/states'
import channelStates from '../channel/states'

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
function watch(payload: { vod_id: string, user_id: string }) {
    routes.watch(payload)
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
function remove(payload: { vod_id: string }) {
    routes.remove(payload)
        .then(data => {
            if (data.status !== 404) {
                collections.vods.remove(payload.vod_id).everywhere()
                channelStates.current_channel.patch({
                    vods: channelStates.current_channel.value.vods! - 1
                })
            }
        })
}

export default {
    getVods,
    watch,
    create,
    remove
}