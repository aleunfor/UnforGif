import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from 'hooks/useUser'
import ErrorAlert from 'components/ErrorAlert'

export default function Login({onLogin}) {
    const [showAlert, setShowAlert] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [_, navigate] = useLocation()
    const { isLoginLoading, hasLoginError, msgError, login, isLogged} = useUser()

    useEffect(() => {
        if (isLogged) {
            navigate('/')
            onLogin && onLogin()
        }
    }, [isLogged, navigate, onLogin])

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ email, password })
        //navigate('/')
    }

    useEffect(() => {
        if(hasLoginError) {
            setShowAlert(true)
        }
    }, [hasLoginError])

    return (
        <>

            <div className="row col col-md-12 mx-auto pt-5 card-login">
                <h2> <FontAwesomeIcon icon={solid('user')} /> Login</h2>
                {isLoginLoading && <span className="text-white">Checking Credentials...</span>}
                {!isLoginLoading &&
                    <form onSubmit={handleSubmit}>
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
                        <a className='nav-link text-white p-0 pt-3' href="/register">Register</a>
                    </form>}
                { hasLoginError && <ErrorAlert show={showAlert} error={msgError} /> }
                
            </div>
        </>
    )
}