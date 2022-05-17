import React, { useReducer } from 'react';
import { useLocation } from 'wouter'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({initialKeyword = '', initialRating}) {
    //const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
    //const [rating, setRating] = useState(initialRating)

    // Reducer siempre tiene que devolver el siguiente estado
    const reducer = (state, action) => {
        if (action.type === 'update_keyword'){
            return {
                ...state,
                keyword: action.payload
            }
        }

        if (action.type === 'update_rating'){
            return {
                ...state,
                rating: action.payload
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        keyword:  decodeURIComponent(initialKeyword),
        rating: initialRating     
    })

    const {keyword, rating} = state

    const [_, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault();
        //navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChange = evt => {
        // Asi sabemos que estado tenemos que actualizar
        // Discriminamos en el reducer como actualizar el estado
        dispatch({ type: 'update_keyword', payload: evt.target.value })
    }

    const handleChangeRating = evt => {
        dispatch({ type: 'update_rating', payload: evt.target.value })
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