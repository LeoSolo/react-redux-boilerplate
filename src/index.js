import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import ConnectedRouter from 'react-router-redux';
import { RoutesContainer } from './containers/Routes.jsx';
import { configureStore } from './store/configureStore';
import { createHashHistory, createBrowserHistory } from 'history';

import './styles/base.scss';

const history = process.env.NODE_ENV === 'development' ? createHashHistory() : createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <RoutesContainer />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);