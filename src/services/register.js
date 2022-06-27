const {ENDPOINT} = require('./settings')

export default async function register({name, email, password}){
    return await fetch(`${ENDPOINT}/api/user/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, password})
    }).then(res => {
        return res.json()
    }).then(res => {
        if(res.data === "Email already registered"){
            throw new Error("Email already registered")
        }       
    })
}