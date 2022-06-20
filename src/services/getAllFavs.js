const { ENDPOINT } = require('./settings')

const fromApiResponseToGifs = apiResponse => {
  const { favs = [] } = apiResponse
  if (Array.isArray(favs)) {
    const gifs = favs.map(image => {
      const { id, title } = image
      const url = `https://media0.giphy.com/media/${id}/giphy.gif?cid=4a5a68b0qrkcly18xbzyeepljpmzbilleryalynlx64upmq5&rid=giphy.gif&ct=g`
      return { id, title, url }
    })
    return gifs
  }
  return []
}

export default function getAllFavs(jwt) {
  //const jwt = window.sessionStorage.getItem('jwt')
  const user = window.sessionStorage.getItem('user')
  return fetch(`${ENDPOINT}/api/fav/getallfavs/${user}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "auth-token": jwt.token
    }
  }).then((res) => res.json())
    .then(fromApiResponseToGifs)
}