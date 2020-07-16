import React, { FC, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from '../Pages'
import Paginate from '../Utils/pagination'

const Routes: FC = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact />
                </Switch>
            </Router>
            <Paginate />
        </Fragment>
    )
}

export default Routes