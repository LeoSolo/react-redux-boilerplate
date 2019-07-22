import React from 'react'
import {Link, BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import {setLoading} from '../actions/application'

export class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <Link to="/page">GO TO PAGE</Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        application: state.application,
        router: state.router
    }
}

export const AppContainer = connect(
    mapStateToProps,
    {
        setLoading
    }
)(App)
