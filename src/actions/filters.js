// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SORT_BY_DATE_DESC
export const sortByDateDesc = () => ({
  type: 'SORT_BY_DATE_DESC'
})

// SORT_BY_DATE_ASC
export const sortByDateAsc = () => ({
  type: 'SORT_BY_DATE_ASC'
})
