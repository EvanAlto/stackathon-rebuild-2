import React, { Component } from 'react'
import '../styles/Post.css'

export default class Post extends Component {
  render() {
    const { postImage, description, author: {username, userImage} } = this.props.post
    return (
      <div className="post">
        <div className="post--header">
          <div style={{ backgroundColor: `#${userImage}`}} className="post--user-image" />
          <div className="post--user-username">{username}</div>
        </div>
        <div style={{ backgroundColor: `#${postImage}` }} className="post--image" />
        <div className="post--details">
          <span>{username}</span> {description} 
        </div>
      </div>
    )
  }
}