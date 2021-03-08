import { App } from '../../app'

//collect all vods
const vods = App.Collection()(collection => ({
    primaryKey: 'vod_id',
    defaultGroup: true,
    groups: {
        archived: collection.Group()
    }
}))

const playlists = App.Collection()(collection => ({
    primaryKey: 'vod_id',
    defaultGroup: true
}))

export default {
    vods,
    playlists
}