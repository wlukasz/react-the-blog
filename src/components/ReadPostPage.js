import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'

export const ReadPostPage = (props) => (
  <div>
    <Header isAuthenticated={props.isAuthenticated} />
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Read Post</h1>
        <h3>{props.post.title}</h3>
      </div>
    </div>
    <div className="content-container">
    <p>{props.post.text}</p>
    </div>
  </div>
)


const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
})

export default connect(mapStateToProps)(ReadPostPage)
