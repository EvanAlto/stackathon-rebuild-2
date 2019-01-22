import React, { Component } from 'react'
import '../styles/Home.css'
import { Post } from './'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const HOME_QUERY = gql`
  query{
    posts {
      id
      postImage
      description
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
          return data.posts.map(post => <Post {...post}/>)
        }}
      </Query>
      </div>
    )
  }
}