import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import applicationReducer from './application'

const rootReducer = combineReducers({
    application: applicationReducer,
    routing: connectRouter(history)
})

export default rootReducer