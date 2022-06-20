import { useContext } from 'react'
import Context from 'context/UserContext'
import { Helmet } from "react-helmet";
import ListOfFavs from 'components/ListOfFavs';

export default function FavoritesPage() {
    const { allFavs } = useContext(Context)
    return (
        <>
            <Helmet>
                <title>My Favorites | UnforGif</title>
            </Helmet>
            <ListOfFavs gifs={allFavs} />
        </>
    )
}