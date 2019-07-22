import React from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {setLoading} from "../actions/application";

export default class Page extends React.Component {

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

// function mapStateToProps(state) {
//     return {
//         application: state.application,
//         routing: state.routing
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(
//         {
//             setLoading
//         },
//         dispatch
//     )
// }
//
// export const PageContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Page)