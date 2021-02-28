import { App } from '../../app'

//collect all vods
const vods = App.Collection()(collection => ({
    primaryKey: 'vod_id',
    defaultGroup: true,
    groups: {
        archived: collection.Group()
    }
}))

export default {
    vods
}