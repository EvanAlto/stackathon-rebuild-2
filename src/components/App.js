import React, { Component, Fragment } from 'react'
import '../styles/App.css'
import { Switch, Route } from 'react-router-dom'
import { AUTH_TOKEN }from '../constants'
import { Home, Login, Header, Explore, User, Post } from './index'


class App extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <Fragment>
        {
          authToken ?
          <Fragment>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/explore' component={Explore} />
              <Route path='/:user' component={User} />
              <Route exact path='/p/:id' component={Post} />
              <Route component={Home} />
            </Switch>
          </Fragment>
          :
          <Switch>
            <Route exact path='/' component={Login} />
            <Route component={Login} />
          </Switch>
        }
        {/* <Header /> */}
      </Fragment>
    )
  }
}

export default App
