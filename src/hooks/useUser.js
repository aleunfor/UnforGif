import { useCallback, useContext, useState } from 'react'
import Context from 'context/UserContext'
import loginServices from 'services/login'

export default function useUser() {
    const { token, setJWT } = useContext(Context)
    const [state, setState] = useState({loading: false, error: false})

    const login = useCallback(({ email, password }) => {
        setState({loading: true, error: false})
        loginServices({ email, password })
            .then(token => {
                setState({loading: true, error: false})
                setJWT(token)
            })
            .catch(err => {
                setState({loading: false, error: true})
                console.error(err)
            })
    }, [setJWT])

    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(token),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout
    }
}