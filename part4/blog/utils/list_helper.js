const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }

  return blogs.length === 0
    ? 0
    : blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const reducer = (favorite, item) => item.likes > favorite.likes ? item : favorite

  const favorite = blogs.reduce(reducer, blogs[0])
  return favorite === undefined
    ? {}
    : {
      title: favorite.title,
      author: favorite.author,
      likes: favorite.likes
    }

}

const mostBlogs = (blogs) => {
  const most = []

  blogs.forEach(elem => {
    if(most.length === 0 ){
      most.push({
        author: elem.author,
        blogs: 1
      })
    }else{
      if (most.some(e => e.author === elem.author)) {
        const index = most.findIndex(e => e.author === elem.author)
        most[index].blogs += 1 
      }else{
        most.push({
          author: elem.author,
          blogs: 1
        })
      }
    }
  })

  const reducer = (elem, item) => item.blogs > elem.blogs ? item : elem

  return most.length === 0
    ? {}
    : most.reduce(reducer, most[0])
}

const mostLikes = (blogs) => {

  const most = []

  blogs.forEach(elem => {
    if(most.length === 0 ){
      most.push({
        author: elem.author,
        likes: elem.likes
      })
    }else{
      if (most.some(e => e.author === elem.author)) {
        const index = most.findIndex(e => e.author === elem.author)
        most[index].likes = elem.likes 
      }else{
        most.push({
          author: elem.author,
          likes: elem.likes
        })
      }
    }
  })

  const reducer = (elem, item) => item.likes > elem.likes ? item : elem

  return most.length === 0
    ? {}
    : most.reduce(reducer, most[0])
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}