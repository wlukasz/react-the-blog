import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostListFilters from './PostListFilters'

export default () => {
  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__actions">
          <PostListFilters />
          <Link className="button-style" to="/create">Add post</Link>
        </div>
      </div>
    </div>
  )
}