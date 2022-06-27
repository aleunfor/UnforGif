import React, { useEffect, useState } from "react";
import getFavs from "services/getFavs";
import getAllFavs from "services/getAllFavs";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
    const [favs, setFavs] = useState([])
    const [allFavs, setAllFavs] = useState([])
    const [token, setJWT] = useState(
        () => window.sessionStorage.getItem('jwt')
    )

    useEffect(() => {
        if(!token) return setFavs([])
        getFavs({token}).then(setFavs)
    }, [token])

    useEffect(() => {
        if(!token) return setAllFavs([])
        getAllFavs({token}).then(setAllFavs)
    }, [token])

    return <Context.Provider value={{
        favs,
        allFavs,
        token,
        setFavs,
        setAllFavs,
        setJWT
    }}>
        {children}
    </Context.Provider>
}

export default Context;