import Gif from "components/Gif"
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner"
import { Redirect } from "wouter";
import { Helmet } from 'react-helmet'

export default function Detail({ params }) {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id })

    const title = gif ? gif.title : 'No Title'

    if (isLoading) return <Spinner />

    if (isError) return <Redirect to='/404' />

    if (!gif) return null

    return <>
        <Helmet>
            <title>{title} | UnforGif</title>
            <meta name="description" content={title} />
        </Helmet>
        <div className="col col-md-8 mx-auto mb-5">
            <Gif {...gif} />
        </div>
    </>


}