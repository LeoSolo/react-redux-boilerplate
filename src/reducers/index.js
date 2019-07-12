import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { applicationReducer } from './application'

export const reducers = combineReducers({
    application: applicationReducer,
    routing: routerReducer
})