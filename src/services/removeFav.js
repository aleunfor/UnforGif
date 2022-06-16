const {ENDPOINT} = require('./settings')

export default async function removeFav({id}){
    const jwt = window.sessionStorage.getItem('jwt')
    const user = window.sessionStorage.getItem('user')
    return await fetch(`${ENDPOINT}/api/fav/removeFav/${id}/${user}`, {
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