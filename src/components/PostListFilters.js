import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDateDesc, sortByDateAsc } from '../actions/filters'

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
              }
            }} 
          >
            <option value="date-desc">Sort Last-2-First</option>
            <option value="date-asc">Sort First-2-Last</option>
          </select>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(PostListFilters)