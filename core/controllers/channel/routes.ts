import { rest_api as Api } from '../../api'
import { creatorInfo } from './interface'

import userStates from '../user/states'

//array of creators
async function getSubscriptions(user_id: string) {
    return (await Api.get(`app/subscription?${user_id}`)).data
}

//array of viewers
async function getViewers(user_id: string) {
    return (await Api.get(`app/subscription/viewers?${user_id}`)).data
}

//set banner for channel
async function setBanner(file: File) {
    const form: FormData = await new FormData()
    await form.append('banner', file)
    return await Api.post('banner', form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

//set banner for channel
async function setChannelTrailer(file: File) {
    const form: FormData = await new FormData()
    await form.append('trailer', file)
    console.log(file)
    return await Api.post('channel-trailer', form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

//subscribe to a creator
async function subscribe(user_id: string, payload: { creator: creatorInfo, viewer_type: string }) {
    return (await Api.post(`app/subscription/subscribe?${user_id}`, payload))
}

//unsubscribe from a creator
async function unsubscribe(user_id: string, payload: { creator: creatorInfo }) {
    return (await Api.post(`app/subscription/unsubscribe?${user_id}`, payload))
}

export default {
    getSubscriptions,
    getViewers,
    subscribe,
    unsubscribe,
    setBanner,
    setTrailer: setChannelTrailer
}