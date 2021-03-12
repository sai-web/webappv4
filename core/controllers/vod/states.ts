import { App } from '../../app'

type playlistMutation = { vod_id: string, name: string, method: "delete" | "create" }

const vodPlaylistMutation = App.State<playlistMutation[]>([])

export default {
    vodPlaylistMutation
}