import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import {createHashHistory, createBrowserHistory} from 'history'
import createRootReducer from '../reducers'
import throttle from 'lodash.throttle'
import {loadState, saveState} from '../utils/localStorage'

export const history = process.env.NODE_ENV === 'development' ? createHashHistory() : createBrowserHistory()

export default function configureStore() {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const persistedState = loadState('test')
    const store = createStore(
        createRootReducer(history),
        persistedState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
            ),
        ),
    )

    store.subscribe(throttle(() => {
        saveState('test', store.getState())
    }, 1000))

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(createRootReducer(history))
        })
    }

    return store
}
