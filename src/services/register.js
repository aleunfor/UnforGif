const ENDPOINT = 'http://localhost:3001'

export default async function register({name, email, password}){
    return await fetch(`${ENDPOINT}/api/user/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, password})
    }).then(res => {
        if(!res.ok) throw new Error("Error Response")
        return res.json()
    })
}