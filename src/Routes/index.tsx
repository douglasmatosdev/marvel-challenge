import React, { FC, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from '../Pages'
import Dashboard from '../Components/Dashboard'

const Routes: FC = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact />
                </Switch>
            </Router>
            <Dashboard />
        </Fragment>
    )
}

export default Routes