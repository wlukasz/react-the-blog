import moment from 'moment'

// Filter Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date-desc'
}

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE_DESC':
      return {
        ...state,
        sortBy: 'date-desc'
      }
    case 'SORT_BY_DATE_ASC':
      return {
        ...state,
        sortBy: 'date-asc'
      }
    default:
      return state
  }
}