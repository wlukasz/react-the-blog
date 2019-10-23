import React from 'react'
import { connect } from 'react-redux'
import PostListItem from './PostListItem'
import selectPosts from '../selectors/posts'

export const AllPostsList = (props) => (
  <div className="content-container">
    <div className="list-body">
      {
        props.posts.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No posts.</span>
          </div>
        ) : (
          props.posts.map((post) => {
            return <PostListItem key={post.id} {...post} />
          })
        )
      }
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    // posts: state.post
    posts: selectPosts(state.posts, state.filters)
  }
}

export default connect(mapStateToProps)(AllPostsList)
