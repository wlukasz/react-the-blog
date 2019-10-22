import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const PostListItem = ({ id, title, text, createdAt, editedAt }) => (
  <Link className="list-item" to={`/edit/${id}`} >
    <h3 className="list-item__title">{title}</h3> 
    <div className="list-item__sub-title">
      <div>Posted {moment(createdAt).fromNow()}</div>
      {editedAt > 0 && <div>Edited {moment(editedAt).fromNow()}</div>}
    </div>
  </Link>
)
      
export default PostListItem