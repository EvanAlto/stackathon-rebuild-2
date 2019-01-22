import React, { Component } from 'react'
import '../styles/Post.css'

export default class Post extends Component {
  render() {
    const { postImage } = this.props
    return (
      <div className="post">
        <div className="post--header">
          <div className="post--user-image" />
          <div className="post--user-username">EvanAlto</div>
        </div>
        <div style={{ backgroundColor: `#${postImage}` }} className="post--image" />
        <div className="post--details">
          <span>EvanAlto</span> Post description. 
        </div>
      </div>
    )
  }
}