const {ENDPOINT} = require('./settings')

export default async function login({email, password}){
    return await fetch(`${ENDPOINT}/api/user/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    }).then(res => {
        if(!res.ok) throw new Error("Error Response")
        return res.json()
    }).then(res => {
        const { token } = res.data
        return token
    })
}