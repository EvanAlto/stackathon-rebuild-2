import React, { Component, Fragment } from 'react'
import '../styles/Login.css'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AUTH_TOKEN } from '../constants'
import { FaInstagram } from 'react-icons/fa'

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password) {
      token
    }
  }
` 

const SIGNUP_MUTATION = gql`
  mutation signup($email: String!, $password: String!, $fullName: String! $username: String!) {
    signup(email: $email, password: $password, fullName: $fullName, username: $username) {
      token
    }
  }
`


export default class Login extends Component {

  state = {
    login: true,
    username: '',
    fullName: '',
    email: '',
    password: '',

  }

  handleClick = () => {
    this.setState((prevState) => ({
      login: !prevState.login
    }))
  }

  handleChange = (event) => {
    const {name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  setToken = async data => {
    const { token } = this.state.login ? data.login : data.signup
    localStorage.setItem(AUTH_TOKEN, token)
    this.props.history.push('/')
  }

  render() {
    const { login, email, password, fullName, username} = this.state
    return (
      <div className="login-container">
        <div className="login-form">
          <FaInstagram className="login-logo" size={"2rem"} />
          <input className="login--input" required onChange={this.handleChange} name="email" placeholder="Email" value={this.state.email}></input>
          {
            !this.state.login &&
            <Fragment>
              <input className="login--input" required onChange={this.handleChange} name="fullName" placeholder="Full Name" value={this.state.fullName}></input>
              <input className="login--input" required onChange={this.handleChange} name="username" placeholder="Username" value={this.state.username}></input>
            </Fragment>
          }
          <input className="login--input" required onChange={this.handleChange} name="password" type="password" placeholder="Password" value={this.state.password}></input>
          <Mutation mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
           variables={{email, password, fullName, username}}
           onCompleted={data => this.setToken(data)}>
            {mutation => <button onClick={mutation} className="login--button" type="button">{this.state.login ? 'Log in' : 'Sign up'}</button>}
          </Mutation>
        </div>
        <div>
          {
            this.state.login ?
            <div className="login-choose">Don't have an account?<span onClick={this.handleClick}> Sign up</span></div>
            :
            <div className="login-choose">Have an account?<span onClick={this.handleClick}> Log in</span></div>
          }
        </div>
      </div>
    )
  }
}