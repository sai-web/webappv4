import { App } from '../../app'
import collections from '../activity/collections'

interface vod {
    user_id: string
    vod_id: string
    title: string
    thumbnail: string
    views: number
    published_at: Date
    platform: string
    url: string
    tags: string[]
    archived: boolean
}

//collect all vods
const vods = App.Collection<Partial<vod>>()(collection => ({
    primaryKey: 'vod_id',
    defaultGroup: true,
    groups: {
        archived: collection.Group()
    },
    selectors: {
        CURRENT: collection.Selector()
    }
}))

interface playlist {
    name: string
    vods: number
    vod_id?: string
    thumbnail?: string
}

const playlists = App.Collection<playlist>()(() => ({
    primaryKey: 'name',
    defaultGroup: true
}))

export default {
    vods,
    playlists
}