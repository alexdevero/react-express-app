import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import home from './components/home'
import portfolio from './components/portfolio'
import detail from './components/detail'
import about from './components/about'

// Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Redirect exact path = "/" to = "/home" />
          <Route path = "/home" component = { home } />
          <Route path = "/portfolio" component = { portfolio } />
          <Route path = "/detail" component = { detail } />
          <Route path = "/about" component = { about } />
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
