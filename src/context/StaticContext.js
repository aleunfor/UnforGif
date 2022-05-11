import React from "react";

const Context = React.createContext ({
    name: 'unforale',
    suscripcion: true
}) /* Si en App.js no colocamos el provider, 
    tomara por defectos los valores de este
    Sino tomara los valores que pasemos en el archivo
    */

export default Context;