import routes from './routes'
import collections from './collections'
import { userPayload, creatorInfo } from './interface'
import { rest_api as Api } from '../../api'

import states from './states'
import authStates from '../auth/states'

import userStates from '../user/states'

import { Error } from '../auth/events'

//get all subscriptions and store in a collection
function subscribed(user_id: string) {
    routes.getSubscriptions(user_id)
        .then(data => {
            data.creators.forEach((creator: userPayload) => {
                var { domain, username, photo } = creator
                collections.subscribed.collect({
                    domain,
                    username,
                    photo
                }, creator.type)
            });
        })
}

//get all viewers and store them in a collection
function viewers(user_id: string) {
    routes.getSubscriptions(user_id)
        .then(data => {
            data.viewers.forEach((viewer: userPayload) => {
                var { domain, username, photo } = viewer
                collections.viewers.collect({
                    domain,
                    username,
                    photo
                }, viewer.type)
            });
        })
}

//subscribe to a creator and store in the collection
function subscribe(user_id: string, payload: { creator: creatorInfo, viewer_type: string }) {
    routes.subscribe(user_id, payload)
        .then(data => {
            if (data.status === 200) collections.subscribed.collect(payload.creator, 'notifiers')
            else console.log('err')
        })
}

//unsubcribe from a creator and remove from the collection
function unsubscribe(user_id: string, payload: { creator: creatorInfo }) {
    routes.unsubscribe(user_id, payload)
        .then(data => {
            if (data.status === 200) collections.subscribed.remove(payload.creator.domain)
            else console.log('err')
        })
}

function setBanner(file: File) {
    routes.setBanner(file)
        .then(data => {
            if (data.status === 400) Error.emit({ type: "Server Error", message: "there was an issue with downloading the file, please try again." })
            else {
                if (states.current_channel._value.user_id === userStates.info._value.user_id) states.current_channel.patch({
                    banner: data.banner + `&render=${Math.random()}`
                })
                userStates.info.patch({
                    banner: data.banner + `&render=${Math.random()}`
                })
            }
        })
        .catch(() => {
            Error.emit({ type: "Invalid Behaviour", message: "please report this issue as soon as possible. This could be because our servers were down or there's been a data breach." })
            return false
        })
}

export default {
    subscribed,
    viewers,
    subscribe,
    unsubscribe,
    setBanner,
}