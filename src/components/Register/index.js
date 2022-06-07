import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState, useEffect } from "react"
import { useLocation } from "wouter"
import useUser from "hooks/useUser"

export default function Register(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [_, navigate] = useLocation()
    const { isRegisterLoading, hasRegisterError, isLogged, register } = useUser()

    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        register({ name, email, password })
        navigate('/login')
    }

    return (
        <>
            <Helmet>
                <title>Register | UnforGif</title>
                <meta name="description" content="App de tus Gifs Favoritos" />
            </Helmet>
            <div className="row col col-md-6 mx-auto pt-5 card-login">
                <h2> <FontAwesomeIcon icon={solid('user')} /> Register</h2>
                {isRegisterLoading && <span className="text-white">Checking...</span>}
                {!isRegisterLoading &&
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label text-light">Name</label>
                            <input type="text" className="form-control" name="name"
                                id="name" value={name}
                                onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-light">Email address</label>
                            <input type="email" className="form-control" name="email"
                                id="email" value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-light">Password</label>
                            <input type="password" className="form-control" name="password"
                                id="password" value={password}
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>}
                {hasRegisterError &&
                    <div className="alert alert-warning alert-dismissible fade show mt-3" role="alert">
                        <strong>Warning!</strong> Credentials are invalid!
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>}
            </div>
        </>
    )
}