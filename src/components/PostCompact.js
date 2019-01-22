import React from 'react'
import '../styles/PostCompact.css'
// import { Link } from 'react-router-dom'

const PostCompact = ({postImage}) => {
  return (
    <div style={{backgroundColor: `#${postImage}`}} className="post-compact">
    </div>
  )
}

export default PostCompact