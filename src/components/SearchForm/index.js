import React, { useState } from 'react';

function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
        //navegar a otra ruta
        onSubmit({ keyword })
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto w-75 d-flex mb-3">
            <input onChange={handleChange} value={keyword} className="form-control me-2" type="text" placeholder="Buscar Gif..." aria-label="Buscar" />
            <input className="btn btn-primary btn-buscar" type="submit" value="Buscar" />
        </form>
    )
}

export default React.memo(SearchForm)