import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes