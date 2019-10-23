import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import DashboardPageHeader from './DashboardPageHeader'
import AllPostsList from './AllPostsList'

export const AllPostsListPage = (props) => (
  <div>
    <Header isAuthenticated={props.isAuthenticated} />
    <DashboardPageHeader isAuthenticated={props.isAuthenticated} />
    <AllPostsList isAuthenticated={props.isAuthenticated} />
  </div>
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(AllPostsListPage)