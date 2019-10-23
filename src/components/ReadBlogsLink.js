import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startSetPostsNoAuth } from '../actions/posts'

export const ReadBlogsLink = ({ startSetPostsNoAuth }) => (
  <div className="splash-styles">
    <Link className="button-style" to='/read' onClick={startSetPostsNoAuth}>Read blogs</Link>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startSetPostsNoAuth: () => dispatch(startSetPostsNoAuth())
})

export default connect(undefined, mapDispatchToProps)(ReadBlogsLink)