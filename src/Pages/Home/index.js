import { useCallback } from 'react'
import { useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import { useGifs } from 'hooks/useGifs';
import SearchForm from 'components/SearchForm';
import { Helmet } from 'react-helmet';

export default function Home() {
    const { loading, gifs } = useGifs();
    const [path, pushLocation] = useLocation()

    const handleSubmit = useCallback(({ keyword }) => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    
    //Mejor colocar un onSubmit (para hacer enter)
    return (
        <>
            <Helmet>
                <title>Home | UnforGif</title>
                <meta name="description" content="App de tus Gifs Favoritos" />
            </Helmet>

            <SearchForm onSubmit={handleSubmit} />

            <h3>Última búsqueda</h3>

            <ListOfGifs gifs={gifs} />

            <TrendingSearches />
        </>
    )
}