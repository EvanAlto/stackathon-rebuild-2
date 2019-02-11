import React, { Component } from 'react'
import '../styles/User.css'
import { AUTH_TOKEN } from '../constants'
import gql from 'graphql-tag'
import { PageNotFound, PostCompact } from './'
import { Query } from 'react-apollo'
import { FaInstagram } from 'react-icons/fa'

const USER_QUERY = gql`
  query user($username: String!){
    user(username: $username) {
      id
      username
      fullName
      userImage
      posts {
        id
        postImage
      }
    }
  }
`

export default class User extends Component {

  handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN)
    this.props.history.push('/')
  }

  render() {
    const { user: username } = this.props.match.params
    return (
      <Query query={USER_QUERY} variables={{username}}>
      {({loading, error, data}) => {
        if (loading) return <FaInstagram className="flex-center" size={"3rem"} />
        if (!data) return <PageNotFound />
        const {fullName, username, userImage, posts} = data.user
        return (
          <div className="user-profile">
            <div className="user-profile--details">
              <div style={{ backgroundColor: `#${userImage}` }} className="user-profile--image" />
              <div className="user-profile--info">
                <div>
                  <span>{username}</span>
                  {
                    username === 'evanalto' &&
                  <button onClick={this.handleLogout}>Logout</button>
                  }
                </div>
                <div>
                  <span>0 Posts</span>
                  <span>0 Followers</span>
                  <span>0 Following</span>
                </div>
                <div>
                  <span>{fullName}</span>
                </div>
              </div>
            </div>
            <div className="user-profile--posts">
                  {
                    posts.map(post => <PostCompact key={post.id} {...post} />)
                  }
            </div>
          </div>
        )
      }}
      </Query>
    )
  }
}
