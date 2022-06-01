import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import { useGifs } from 'hooks/useGifs';
import SearchForm from 'components/SearchForm';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Home() {
    const { loading, gifs } = useGifs();

    //Mejor colocar un onSubmit (para hacer enter)
    return (
        <>
            <Helmet>
                <title>Home | UnforGif</title>
                <meta name="description" content="App de tus Gifs Favoritos" />
            </Helmet>

            <SearchForm />

            <h3><FontAwesomeIcon icon={solid('clock')} />&nbsp; Last Search</h3>

            <ListOfGifs gifs={gifs} />

            <TrendingSearches />
        </>
    )
}