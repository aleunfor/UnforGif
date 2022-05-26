import React, { useState } from "react";

const Context = React.createContext({});

export function UserContextProvider({children}) {
    const [token, setJWT] = useState(null);

    return <Context.Provider value={{token, setJWT}}>
        {children}
    </Context.Provider>
}

export default Context;