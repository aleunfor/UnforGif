import React, {Suspense} from 'react'
import useNearScreen from "hooks/useNearScreen";
import Spinner from 'components/Spinner';

//Carga de js cuando el contenido esta visible (import dinamico)
// Asicrono con una promesa
const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

export default function LazyTrending() {

    const {isNearScreen, fromRef} = useNearScreen()
    return <div ref={fromRef}>
        <Suspense fallback={<Spinner />}>
            {isNearScreen ? <TrendingSearches /> : <Spinner />}
        </Suspense>
    </div>
}