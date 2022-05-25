import useUser from 'hooks/useUser'

export default function Header() {
    //const isLogged = true
    const { isLogged, logout } = useUser()

    const handleClick = e =>{
        e.preventDefault()
        logout()
    }

    return (
        <header className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <h1>UnforGif</h1>
            </a>

            <div className="col-md-3 text-end">
                {
                    isLogged 
                        ?  <button className="btn btn-secondary me-2" onClick={handleClick}>Logout</button> 
                        :  <a className="btn btn-secondary me-2" href="/login">Login</a>
                        
                }
                {
                    !isLogged 
                        ? <a className="btn btn-primary">Sign-Up</a> : ''
                }
            </div>
        </header>
    )
}