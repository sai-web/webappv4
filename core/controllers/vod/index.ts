import { App } from '../../app'
import collections from './collections'
import routes from './routes'
import actions from './actions'
// import state from './states'

//controller config options
const config = {
    collections,
    routes,
    // state
}

//the vods controller handles all the content by the users
export default App.Controller(config).root({ ...actions })