import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import '../styles/Header.css'

class Header extends Component {

  handleScroll = event => {
    console.log(event,'<<??')
  }

  render() {
    return (
      <div onScroll={this.handleScroll }className="header">  
        <Link to='/'>LOGO</Link>
        <div>
          SEARCH INPUT
        </div>
        <div className="sub-nav">
          <Link to='/explore'>E</Link>
          <div className="notifications">N</div>
          <Link to='/user'>P</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)