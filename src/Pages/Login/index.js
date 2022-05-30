import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from 'hooks/useUser'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [_, navigate] = useLocation()
    const { isLoginLoading, hasLoginError, login, isLogged } = useUser()

    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ email, password })
        //navigate('/')
    }

    return (
        <>
            <Helmet>
                <title>Login | UnforGif</title>
                <meta name="description" content="App de tus Gifs Favoritos" />
            </Helmet>
            <div className="row col col-md-6 mx-auto pt-5 card-login">
                <h2> <FontAwesomeIcon icon={solid('user')} /> Login</h2>
                {isLoginLoading && <span className="text-white">Checking Credentials...</span>}
                {!isLoginLoading &&
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label text-light">Email address</label>
                            <input type="email" className="form-control" name="email"
                                id="email" value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-light">Password</label>
                            <input type="password" className="form-control" name="password"
                                id="password" value={password}
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>}
                {hasLoginError &&
                    <div className="alert alert-warning alert-dismissible fade show mt-3" role="alert">
                        <strong>Warning!</strong> Credentials are invalid!
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>}
            </div>
        </>
    )
}