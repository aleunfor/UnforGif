import { useCallback, useContext, useState } from 'react'
import Context from 'context/UserContext'
import loginServices from 'services/login'
import addFavService from 'services/addFav'

export default function useUser() {
    const { favs, token, setFavs, setJWT } = useContext(Context)
    const [state, setState] = useState({loading: false, error: false})

    const login = useCallback(({ email, password }) => {
        setState({loading: true, error: false})
        loginServices({ email, password })
            .then(token => {
                window.sessionStorage.setItem('jwt', token);
                setState({loading: true, error: false})
                setJWT(token)
            })
            .catch(err => {
                window.sessionStorage.removeItem('jwt');
                setState({loading: false, error: true})
                console.error(err)
            })
    }, [setJWT])

    const addFav = useCallback(({id}) => {
        addFavService({id})
        .then(setFavs)
        .catch(err => {
            console.error(err)
        })
    }, [setFavs]) 

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('jwt');
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(token),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout,
        addFav,
        favs
    }
}