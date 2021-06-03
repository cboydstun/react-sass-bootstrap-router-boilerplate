import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Grid from './components/Grid'
import Register from './components/Register'

import './style.scss'

export default function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Redirect from="/home" to="/" />
                        <Route path="/about" component={About}></Route>
                        <Route path="/grid" component={Grid}></Route>
                        <Route path="/register" component={Register}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
