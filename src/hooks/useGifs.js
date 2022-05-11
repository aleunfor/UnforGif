import { useState, useContext, useEffect } from 'react';
import getGifs from 'services/getGifs';
import GifsContext from 'context/GifsContext';

const INITIAL_PAGE = 0


export function useGifs({ keyword } = { keyword: null }) {
    //const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)

    const [page, setPage] = useState(INITIAL_PAGE)
    const { gifs, setGifs } = useContext(GifsContext)

    //recuperamos la keyword de localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword: keywordToUse }) // Keyword es una dependencia del efecto
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //Guardamos la keyword en el localStorage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, keywordToUse ,setGifs]); // Teniendo dependencias vacias solo renderiza una vez el componente

    useEffect(function () {
        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs({keyword: keywordToUse, page})
            .then(nextGifs =>{
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    },[keywordToUse, page, setGifs])

    return { loading, loadingNextPage, gifs, setPage}
}
