// getVisiblePosts

export default (posts, { text, sortBy }) => {
  return posts.filter((post) => {
    const textMatch = undefined || post.title.toLowerCase().includes(text.toLowerCase())

    return textMatch
  }).sort((a,b) => {
    if (sortBy === 'date-desc') {
      return b.createdAt - a.createdAt

    } else if ( sortBy === 'date-asc') {
      return a.createdAt - b.createdAt

    } else if ( sortBy === 'author') {
      if (a.author < b.author) return -1

      else if(a.author > b.author) return 1
      
      else return 0
    } else {
      return 0
    }
  })
}