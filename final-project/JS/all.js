const testEl = document.querySelector('.test')

function text() {
  let api =
    'https://api.themoviedb.org/3/discover/movie?api_key=8955915d655fc8d9d566efab49abb3b8&language=en-US&include_adult=false&include_video=false&year=2020'
  axios
    .get(api)
    .then((res) => {
      console.log(res)
      const data = res.data.results
      console.log(data)
      for (movies of data) {
        const title = movies.original_title
        // console.log(movies)
        console.log(title)
        // console.log(movies.poster_path)
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

text()
