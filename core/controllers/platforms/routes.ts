import { integrations_api as Api } from '../../api'

import { App } from './interface'

//connect to a platform 
async function connect(user_id: string, payload: { App: App }, platform: string) {
    return (await Api.post(platform + `/connection/connect?user_id=${user_id}`, payload))
}

//disconnect from a platform
async function disconnect(user_id: string, platform: string) {
    return (await Api.post(platform + `app/connection/disconnect?user_id=${user_id}&platform=${platform}`))
}

export default {
    connect,
    disconnect
}