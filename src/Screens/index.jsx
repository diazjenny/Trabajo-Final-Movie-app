import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {Home} from './Home'
import Premiere from './Premieres'
import Popular from './Popular'
import Search from './Search'


const Screens = () => {
    return (
        <Router>
            <Switch>
                <Route path="/buscar" component={ Search } />
                <Route path="/estrenos/:pag" component={ Premiere } />
                <Route path="/populares/:pag" component={ Popular } />
                <Route path="/" component={ Home } />
            </Switch>
        </Router>
    )
}

export default Screens
