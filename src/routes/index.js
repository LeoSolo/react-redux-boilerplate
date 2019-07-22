import React from 'react'
import {Route, Switch} from 'react-router'

import {AppContainer} from '../containers/App.jsx'
import {PageContainer} from '../containers/Page.jsx'

import {LINKS} from '../constants/links'

const routes = (
    <div>
        <Switch>
            <Route exact path={LINKS.MAIN} component={AppContainer}/>
            <Route path={LINKS.PAGE} component={PageContainer}/>
        </Switch>
    </div>
)

export default routes