import React from 'react'
import '../styles/PageNotFound.css'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="page-not-found">
    <h2>Sorry, this page isn't available.</h2>
      <div>The link you followed may be broken, or the page may have been removed.  <Link className="page-not-found--link" to="/">Go back to Instagram.</Link></div>
    </div>
  )
}

export default PageNotFound