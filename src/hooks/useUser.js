import { useCallback, useContext, useState } from 'react'
import Context from 'context/UserContext'
import loginServices from 'services/login'
import addFavService from 'services/addFav'
import removeFavService from 'services/removeFav'
import registerServices from 'services/register'

export default function useUser() {
    const { favs, token, setFavs, setJWT } = useContext(Context)
    const [state, setState] = useState({loading: false, error: false})

    const login = useCallback(({ email, password }) => {
        setState({loading: true, error: false})
        loginServices({ email, password })
            .then(token => {
                window.sessionStorage.setItem('jwt', token);
                window.sessionStorage.setItem('user', email);
                setState({loading: true, error: false})
                setJWT(token)
            })
            .catch(err => {
                window.sessionStorage.removeItem('jwt');
                window.sessionStorage.removeItem('user');
                setState({loading: false, error: true})
                console.error(err)
            })
    }, [setJWT])

    const register = useCallback(({name, email, password}) => {
        setState({loading: true, error: false})
        registerServices({name, email, password})
        .then(
            setState({loading: true, error: false})
            )
        .catch(err => {
            setState({loading: false, error: true})
            console.error(err)
        })
    }, [])

    const addFav = useCallback(({id, title}) => {
        addFavService({id, title})
        .then(setFavs)
        .catch(err => {
            console.error(err)
        })
    }, [setFavs])

    const removeFav = useCallback(({id}) => {
        removeFavService({id})
        .then(setFavs)
        .catch(err => {
            console.error(err)
        })
    }, [setFavs])

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('jwt');
        window.sessionStorage.removeItem('user');
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(token),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        isRegisterLoading: state.loading,
        hasRegisterError: state.error,
        login,
        register,
        logout,
        addFav,
        removeFav,
        favs
    }
}