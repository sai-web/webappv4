export interface user_data {
    user_id?: string
    photo?: string
    username?: string
    domain?: string
    created_at?: Date
    email?: string
    tags?: string
    description?: string
    viewers?: number
    subscription?: number
    vods?: number
    channelInfo?: boolean
    state?: user_state
    channel_trailer?: string
    activity?: boolean
    integrations?: boolean
    banner?: string
}

export enum user_state {
    offline = "offline",
    online = "online",
    streaming = "STREAMING",
    chatting = "CHATTING",
    playing = "PLAYING",
    listening = "LISTENING"
}