import { App } from '../../app'
import collections from './collections'
import routes from './routes'
import actions from './actions'
import state from './states'

//controller config options
const config = {
    collections,
    routes,
    state
}

//channel controller handles subcriptions
export default App.Controller(config).root({ ...actions })