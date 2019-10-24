import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

const PostListItem = ({ isAuthenticated, id, title, author, createdAt, editedAt }) => (
  <Link 
    className="list-item" 
    to={isAuthenticated ? `/edit/${id}` : `/read/${id}` } 
  >
    <div>
      <h3 className="list-item__title">{title}</h3>
      {!isAuthenticated && <p className="list-item__author">by {author}</p>} 
    </div>
    <div className="list-item__sub-title">
      <div>Posted {moment(createdAt).fromNow()}</div>
      {editedAt > 0 && <div>Edited {moment(editedAt).fromNow()}</div>}
    </div>
  </Link>
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PostListItem)      