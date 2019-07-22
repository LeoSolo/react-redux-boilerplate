import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import {createHashHistory, createBrowserHistory} from 'history'
import createRootReducer from '../reducers';

export const history = process.env.NODE_ENV === 'development' ? createHashHistory() : createBrowserHistory()

export default function configureStore(preloadedState) {
    const {__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: devToolsCompose} = window;
    const composeEnhancer = devToolsCompose || compose;
    // const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    // const persistedState = loadState('test')
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
            ),
        ),
    )

    // store.subscribe(throttle(() => {
    //     saveState('test', store.getState())
    // }, 1000))

    if (module.hot) {
        module.hot.accept(() => {
            store.replaceReducer(require('../reducers').reducers)
        })
    }

    return store
}