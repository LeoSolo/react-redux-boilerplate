import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import applicationReducer from './application'

const rootReducer = (history) => combineReducers({
    application: applicationReducer,
    router: connectRouter(history)
})

export default rootReducer
