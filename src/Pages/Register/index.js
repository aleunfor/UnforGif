import Register from 'components/Register'
import { Helmet } from 'react-helmet'

export default function RegisterPage() {
    return (
        <>
            <Helmet>
                <title>Register | UnforGif</title>
                <meta name="description" content="App de tus Gifs Favoritos" />
            </Helmet>
            <Register />
        </>
    )
}