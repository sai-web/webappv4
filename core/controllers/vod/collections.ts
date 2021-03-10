import { App } from '../../app'

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
const vods = App.Collection<vod>()(collection => ({
    primaryKey: 'vod_id',
    defaultGroup: true,
    groups: {
        archived: collection.Group()
    },
    selectors: {
        CURRENT: collection.Selector()
    }
}))

const playlists = App.Collection()(collection => ({
    primaryKey: 'vod_id',
    groups: {
        watch_later: collection.Group()
    }
}))

export default {
    vods,
    playlists
}