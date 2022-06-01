const ENDPOINT = 'http://localhost:3001'

export default async function getFavs(){
    const jwt = window.sessionStorage.getItem('jwt')
    const user = window.sessionStorage.getItem('user')
    return await fetch(`${ENDPOINT}/api/fav/getfavs/${user}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "auth-token": jwt
        }
    }).then(res => {
        if(!res.ok) throw new Error("Error Response")
        return res.json()
    }).then(res => {
        const { favs } = res
        return favs
    })
}