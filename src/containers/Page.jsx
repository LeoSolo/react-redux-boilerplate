import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {setLoading} from "../actions/application"

export class Page extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>My Page!</h1>
                <Link to="/">GO BACK</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        application: state.application,
        router: state.router
    }
}

export const PageContainer = connect(
    mapStateToProps,
    {
        setLoading
    }
)(Page)