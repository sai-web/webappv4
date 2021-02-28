import routes from './routes'
import states from './states'

import ChannelStates from '../channel/states'

import { Error } from '../auth/events'

import { user_data, user_state } from './interface'
import authStates from '../auth/states'
import { platforms } from '../../utils/platforms'

import vodActions from '../vod/actions'

//get user info and update state
const defaultParam = {
    payload: {
        user_id: true,
        photo: true,
        username: true,
        email: true,
        domain: true,
        created_at: true,
        tags: true,
        description: true,
        viewers: true,
        subscription: true,
        vods: true,
        channelInfo: true,
        state: true,
        channel_trailer: true,
        activity: true,
        integrations: true,
        banner: true
    },
    me: true
}

function info(
    params?: {
        payload?: Record<string, boolean>,
        me?: boolean,
        domain?: string
    }
) {
    if (authStates.csrf_token._value.length > 0) {
        const { payload, domain, me } = { ...defaultParam, ...params }
        routes.info(payload, me, domain)
            .then(data => {
                if (data.status === 401) Error.emit({ type: "Account Error", message: "we we're not able to fetch your account. If this was an unexpected behaviour please report it on our discord server." })
                else {
                    if (me) {
                        states.info.set(data)
                        states.state.set(data.activity.state)
                    }
                    ChannelStates.current_channel.set(data)
                    ChannelStates.current_channel_state.set(data.activity.state)
                    vodActions.getVods()
                }
            })
            .catch(() => {
                Error.emit({ type: "Invalid Behaviour", message: "please report this issue as soon as possible. This could be because our servers were down or there's been a data breach." })
                return false
            })
    }
}

//update user info and state
function update(payload: { data: user_data }) {
    routes.update(payload)
        .then(data => {
            if (data.status === 400) Error.emit({ type: "Unauthorised Credentials", message: "we we're not able to update your account due to presence of unauthorised credentials. You can reset these credentials from the advanced settings section." })
            else {
                if (ChannelStates.current_channel._value.user_id === states.info._value.user_id) ChannelStates.current_channel.patch(data)
                states.info.patch(data)
            }
        })
        .catch(() => {
            Error.emit({ type: "Invalid Behaviour", message: "please report this issue as soon as possible. This could be because our servers were down or there's been a data breach." })
            return false
        })
}

function setProfilePhoto(file: File) {
    routes.setProfilePhoto(file)
        .then(data => {
            if (data.status === 400) Error.emit({ type: "Server Error", message: "there was an issue with downloading the file, please try again." })
            else {
                if (ChannelStates.current_channel._value.user_id === states.info._value.user_id) ChannelStates.current_channel.patch({
                    photo: data.photo + `&render=${Math.random()}`
                })
                states.info.patch({
                    photo: data.photo + `&render=${Math.random()}`
                })
            }
        })
        .catch(() => {
            Error.emit({ type: "Invalid Behaviour", message: "please report this issue as soon as possible. This could be because our servers were down or there's been a data breach." })
            return false
        })
}

//get the current state
function updateState(user_id: string, payload: { state: user_state }) {
    routes.state(user_id, payload)
        .then(data => {
            if (data.status === 200) states.state.set(payload.state)
        })
}

const getVodDetails = (parser: DOMParser, url: string) => {
    if (authStates.csrf_token._value.length > 0) {
        return routes.getMetaData(url)
            .then(data => {
                const doc = parser.parseFromString(data.html, 'text/html')
                const filteredPlatform = Object.values(platforms)
                    .find(platform => platform.urlMatch.test(url))
                if (filteredPlatform) return filteredPlatform?.parseHTML(doc)
                return false
            })
            .catch(() => {
                Error.emit({ type: "Invalid Behaviour", message: "please report this issue as soon as possible. This could be because our servers were down or there's been a data breach." })
                return false
            })
    }
}

export default {
    info,
    update,
    updateState,
    setProfilePhoto,
    getVodDetails
}