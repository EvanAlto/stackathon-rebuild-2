import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../styles/Header.css'
import { FaInstagram, FaRegUser, FaRegHeart, FaRegCompass } from 'react-icons/fa';

class Header extends Component {

  handleScroll = event => {
  }

  render() {
    return (
      <div onScroll={this.handleScroll }className="header">  
        <Link to='/'><FaInstagram size={"2rem"}/></Link>
        <input className="search"placeholder="Search" />
        <div className="sub-nav">
          <Link to='/explore'><FaRegCompass size={"1.5rem"} /></Link>
          <div className="notifications"><FaRegHeart size={"1.5rem"} /></div>
          <Link to={`/evanalto`} ><FaRegUser size={"1.5rem"}/></Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)