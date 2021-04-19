import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {Home} from './Home'
import Premieres from './Premieres'
import Popular from './Popular'
import Search from './Search'
import Movie from './Movie'


const Screens = () => {
    return (
        <Router>
            <Switch>
                <Route path="/movie" component={Movie} />
                <Route path="/buscar" component={Search} />
                <Route path="/new-movies" component={ Premieres } />
                <Route path="/populares/:pag" component={ Popular } />
                <Route path="/" component={ Home } />
            </Switch>
        </Router>
    )
}

export default Screens
