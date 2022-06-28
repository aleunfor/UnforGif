import { useLocation } from 'wouter'
import useForm from './hook'
import MediaQuery from 'react-responsive'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

export default function SearchForm({
    initialKeyword = '',
    initialRating = RATINGS[0] }) {
    //const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
    //const [rating, setRating] = useState(initialRating)

    const { keyword, rating, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating })

    const [_, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault();
        //navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChange = evt => {
        // Asi sabemos que estado tenemos que actualizar
        // Discriminamos en el reducer como actualizar el estado
        updateKeyword(evt.target.value)

    }

    const handleChangeRating = evt => {
        updateRating(evt.target.value)
    }

    return (
        <>
            <MediaQuery minWidth={1224}>
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
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
                <form onSubmit={handleSubmit} className="mx-auto w-100 d-flex mb-3">
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
            </MediaQuery>
        </>


    )
}