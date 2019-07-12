import {createStore, applyMiddleware, compose, Store} from 'redux';
import {routerMiddleware} from 'react-router-redux';
// import History from 'history';
import {reducers} from '../reducers/index'

export function configureStore(history) {
    const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: devToolsCompose } = window;
    const composeEnhancers = devToolsCompose || compose;
    // const persistedState = loadState('test')
    const store = createStore(
        reducers,
        // persistedState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history)
            )
        )
    )
    // store.subscribe(throttle(() => {
    //     saveState('test', store.getState())
    // }, 1000))

    // if (module.hot) {
    //     module.hot.accept(() => {
    //         store.replaceReducer(require('../reducers').reducers)
    //     })
    // }

    return store
}