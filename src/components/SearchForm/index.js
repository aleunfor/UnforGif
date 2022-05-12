import React, { useState } from 'react';
import { useLocation } from 'wouter'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm() {
    const [keyword, setKeyword] = useState('');
    const [rating, setRating] = useState('g')

    const [_, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault();
        //navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    const handleChangeRating = evt => {
        setRating(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto w-75 d-flex mb-3">
            <div className='input-group'>
                <select onChange={handleChangeRating} className="btn-primary filter" value={rating}>
                    <option disabled>Filter</option>
                    {
                        RATINGS.map((rating) =>
                            <option key={rating}>{rating}</option>)
                    }
                </select>
                <input onChange={handleChange} value={keyword} className="form-control me-2" type="text" placeholder="Buscar Gif..." aria-label="Buscar" />
                <input className="btn btn-primary btn-buscar" type="submit" value="Buscar" />
            </div>
        </form>
    )
}

export default React.memo(SearchForm)