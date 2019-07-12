import React from 'react';
import {Route, Switch} from 'react-router';

import {connect} from 'react-redux';

import { LINKS } from '../constants/links'

import {AppContainer} from './App.jsx';
import {PageContainer} from './Page.jsx';

export class Routes extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route
                        exact={true}
                        path={LINKS.MAIN}
                        component={AppContainer}
                    />
                    <Route
                        exact={true}
                        path={LINKS.PAGE}
                        component={PageContainer}
                    />
                </Switch>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        routing: state.routing
    }
}

export const RoutesContainer = connect(
    mapStateToProps
)(Routes)