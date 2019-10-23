import React from 'react'
import { connect } from 'react-redux'
import DashboardPageHeader from './DashboardPageHeader'
import PostList from './PostList'

const DashboardPage = ({ isAuthenticated }) => (
  <div>
    <DashboardPageHeader isAuthenticated={isAuthenticated} />
    <PostList isAuthenticated={isAuthenticated} />
  </div>
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(DashboardPage)