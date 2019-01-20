import React, { Component, Fragment } from 'react'
import '../styles/App.css'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    )
  }
}

export default App
