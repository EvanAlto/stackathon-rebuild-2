import React, { Component } from 'react'
import '../styles/Home.css'
import { Post } from './'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const HOME_QUERY = gql`
  query{
    posts (orderBy: createdAt_DESC) {
      id
      postImage
      description
      author {
        username
        userImage
      }
    }
  }
`

export default class Home extends Component {
  render() {
    return (
      <div className="home">
      <Query query={HOME_QUERY}>
        {({loading, error, data}) => {
          if (loading) return <div>Loading...</div>
          return data.posts.map(post => <Post key={post.id} post={post}/>)
        }}
      </Query>
      </div>
    )
  }
}