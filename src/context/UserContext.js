import React, { useEffect, useState } from "react";
import getFavs from "services/getFavs";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
    const [favs, setFavs] = useState([])
    const [token, setJWT] = useState(
        () => window.sessionStorage.getItem('jwt')
    )

    useEffect(() => {
        if(!token) return setFavs([])
        getFavs({token}).then(setFavs)
    }, [token])

    return <Context.Provider value={{
        favs,
        token,
        setFavs,
        setJWT
    }}>
        {children}
    </Context.Provider>
}

export default Context;