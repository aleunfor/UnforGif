import useUser from 'hooks/useUser'
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Header() {
    //const isLogged = true
    const { isLogged, logout } = useUser()

    const handleClick = e => {
        e.preventDefault()
        logout()
    }

    const user = window.sessionStorage.getItem('user')

    return (
        <header className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <h1>UnforGif</h1>
            </a>

            <div className="col-md-2 align-items-start">
                {
                    isLogged
                        ? <Dropdown>
                                <Dropdown.Toggle className='w-100' variant="primary" id="dropdown-variants-primary">
                                    Menu
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Header><FontAwesomeIcon icon={solid('user')}/>&nbsp;{user}</Dropdown.Header>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="/favorites"><FontAwesomeIcon icon={solid('heart')}/>&nbsp;Favorites</Dropdown.Item>
                                    <Dropdown.Item onClick={handleClick}><FontAwesomeIcon icon={solid('arrow-right-from-bracket')}/>&nbsp;Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        : <a className="btn btn-secondary me-2" href="/login">Login</a>

                }
                {
                    !isLogged
                        ? <a className="btn btn-primary" href="/register">Sign-Up</a> : ''
                }
            </div>
        </header>
    )
}