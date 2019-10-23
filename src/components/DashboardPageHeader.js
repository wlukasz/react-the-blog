import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostListFilters from './PostListFilters'

export const DashboardPageHeader = ({ isAuthenticated }) => {
  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__actions">
          <PostListFilters />
          {isAuthenticated && <Link className="button-style" to="/create">Add post</Link>}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(DashboardPageHeader)