import React, { Component } from 'react'
import '../styles/Explore.css'
import { PostCompact } from './'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const EXPLORE_QUERY = gql`
  query{
    posts {
      id
      postImage
      description
    }
  }
`

export default class Explore extends Component {
  render() {
    return (
      <div className="explore">
      <span className="explore--header">Explore</span>
      <Query query={EXPLORE_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>
              return (
                <div className="explore--posts">
                {
                  data.posts.map(post => {
                    return <PostCompact {...post} />
                  })
                }
                </div>
              )
            }}
      </Query>
      </div>
    )
  }
}