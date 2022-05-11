import { useEffect, useState, useRef } from "react";
import getTrending from "services/getTrending";
import Category from "components/Category";

export default function TrendingSearches(){
    const [trends, setTrends] = useState([])

    useEffect(function (){
        getTrending().then(setTrends)
    }, [])

    return <Category name='Tendencias' options={trends}/>
}