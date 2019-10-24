import React from 'react'
import { connect } from 'react-redux'
import { 
  setTextFilter, 
  sortByDateDesc, 
  sortByDateAsc, 
  sortByAuthor 
} from '../actions/filters'

class PostListFilters extends React.Component {
  render() {
    return (
      <div className="input-group">
        <div className="input-group__item">
          <input 
            type="text" 
            className="text-input"
            placeholder="Search posts"
            value={this.props.filters.text} 
            onChange={(e) => {
              this.props.dispatch(setTextFilter(e.target.value))
            }} 
          />
        </div>
        <div className="input-group__item">
          <select 
          className="select"
            value={this.props.filters.sortBy}
            onChange={(e) => {
              if (e.target.value === 'date-desc') {
                this.props.dispatch(sortByDateDesc())
              } else if (e.target.value === 'date-asc') {
                this.props.dispatch(sortByDateAsc())
              } else if (e.target.value === 'author') {
                this.props.dispatch(sortByAuthor())
              }
            }} 
          >
            <option value="date-desc">Sort Last-2-First</option>
            <option value="date-asc">Sort First-2-Last</option>
            {!this.props.isAuthenticated && <option value="author">Sort by Author</option>}
          </select>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    isAuthenticated: !!state.auth.uid
  }
}

export default connect(mapStateToProps)(PostListFilters)