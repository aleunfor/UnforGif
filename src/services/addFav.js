const ENDPOINT = 'http://localhost:3001'

export default async function addFav({id}){
    const jwt = window.sessionStorage.getItem('jwt')
    const user = window.sessionStorage.getItem('user')
    return await fetch(`${ENDPOINT}/api/fav/add/${id}/${user}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "auth-token": jwt
        },
        body: JSON.stringify({jwt})
    }).then(res => {
        if(!res.ok) throw new Error("Error Response")
        return res.json()
    }).then(res => {
        const { favs } = res
        return favs
    })
}