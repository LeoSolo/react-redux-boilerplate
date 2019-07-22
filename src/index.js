import React from "react"
import ReactDOM from "react-dom"
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import configureStore, {history} from './store/configureStore'

import App from './App'

import './styles/base.scss'

const store = configureStore()

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App history={history}/>
        </Provider>
    </AppContainer>,
    document.getElementById("root")
);