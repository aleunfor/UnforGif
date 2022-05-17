import { useState, useContext, useEffect } from 'react';
import getGifs from 'services/getGifs';
import GifsContext from 'context/GifsContext';

const INITIAL_PAGE = 0


export function useGifs({ keyword, rating } = { keyword: null }) {
    //const [gifs, setGifs] = useState([]); 
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)

    const [page, setPage] = useState(INITIAL_PAGE)
    const { gifs, setGifs } = useContext(GifsContext)

    //recuperamos la keyword de localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword: keywordToUse, rating }) // Keyword es una dependencia del efecto
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //Guardamos la keyword en el localStorage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, rating,  setGifs]); // Teniendo dependencias vacias solo renderiza una vez el componente

    useEffect(function () {
        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs({keyword: keywordToUse, page, rating})
            .then(nextGifs =>{
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    },[page, setGifs, rating])

    return { loading, loadingNextPage, gifs, setPage}
}

