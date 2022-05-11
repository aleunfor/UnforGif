import { useEffect, useRef, useCallback } from 'react';
import ListOfGifs from 'components/ListOfGifs';
import { useGifs } from 'hooks/useGifs';
import Spinner from 'components/Spinner';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it'
import Helmet from 'react-helmet';

export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword });
    const externalRef = useRef()
    const {isNearScreen, fromRef} = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    })

    const title = gifs ? `${gifs.length} resultados de ${keyword}` : 'Cargando...'

    //const handleNextPage = () => setPage(prevPage => prevPage + 1)

    /* useCallback sirve para evitar volver a crear una misma funcion 
        entre renderizados
    */
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ),[setPage]) /* Las [] significa que la función se ejecuta 
    cuando el componente se renderiza por primera vez*/

    useEffect(function (){
        if(isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])

    return <>
        {loading
            ? <Spinner />
            : <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
                <h3>
                    {decodeURI(keyword).toLocaleUpperCase()}
                </h3>
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef}></div>
            </>
        }
    </>
}