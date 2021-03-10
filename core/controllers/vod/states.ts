import { App } from '../../app'

type playlistMutation = { vod_id: string, name: string, method: "delete" | "create" }
type playlist = { name: string, vods: number }

const playlists = App.State<playlist[]>([])
const vodPlaylistMutation = App.State<playlistMutation[]>([])

export default {
    playlists,
    vodPlaylistMutation
}