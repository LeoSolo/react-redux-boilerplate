import React from 'react'
import {Route, Switch} from 'react-router'

import App from '../containers/App.jsx'
import Page from '../containers/Page.jsx'

import {LINKS} from '../constants/links'

const routes = (
    <div>
        <Switch>
            <Route exact path={LINKS.MAIN} component={App}/>
            <Route path={LINKS.PAGE} component={Page}/>
        </Switch>
    </div>
)

export default routes