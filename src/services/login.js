const {ENDPOINT} = require('./settings')

export default async function login({email, password}){
    return await fetch(`${ENDPOINT}/api/user/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    }).then(res => {
        return res.json()
    }).then(res => {
        if(res.data === "User not found"){
            throw new Error("User not found")
        }else if(res.data === "Invalid password"){
            throw new Error("Invalid Password")
        }else{
            const { token } = res.data
            return token
        }       
    })
}