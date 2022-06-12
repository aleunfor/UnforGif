import Login from 'components/Login'
import Helmet from 'react-helmet'

export default function LoginPage() {
    return (<>
        <Helmet>
            <title>Login | UnforGif</title>
            <meta name="description" content="App de tus Gifs Favoritos" />
        </Helmet>
        <div className='row col col-md-6 mx-auto'>
            <Login />
        </div>
    </>
    )
}