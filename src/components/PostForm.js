import React from 'react'
import moment from 'moment'
import 'react-dates/initialize'

export default class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: props.post ? props.post.title : '',
      text: props.post ? props.post.text : '',
      createdAt: props.post ? moment(props.post.createdAt) : moment(),
      editedAt: props.post ? moment() : 0,
      error: ''
    }
  }

  onTitleChange = (e) => {
    const title = e.target.value
    this.setState(() => ({ title }))
  }
  onTextChange = (e) => {
    const text = e.target.value
    this.setState(() => ({ text }))
  }
  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.title || !this.state.text) {
      this.setState(() => ({ error: 'Please provide both title and text' })) 
    } else {
      this.setState(() => ({ error: '' })) 
      this.props.onSubmit({
        title: this.state.title,
        text: this.state.text,
        createdAt: this.state.createdAt.valueOf(),
        editedAt: this.state.editedAt.valueOf()
      })
    }
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          className="text-input"
          placeholder="Post title"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <textarea
          className="textarea"
          placeholder="Post text"
          value={this.state.text}
          onChange={this.onTextChange}
        >
        </textarea>
        <div>
          <button className="button-style">Save Post</button>
        </div>
      </form>
    )
  }
}