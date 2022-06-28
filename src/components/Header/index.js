import useUser from 'hooks/useUser'
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import MediaQuery from 'react-responsive'

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
                <img className='img-fluid text-center' width="250px" src="/logo-unforgif.png" alt="UnforGif" />
            </a>

            <div className="col-md-2 align-items-start">
                {   // View on big screen
                    isLogged
                        ? <div>
                            <MediaQuery minWidth={1224}>
                                <Dropdown>
                                    <Dropdown.Toggle className='w-100' variant="primary" id="dropdown-variants-primary">
                                        Menu
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Header><FontAwesomeIcon icon={solid('user')} />&nbsp;{user}</Dropdown.Header>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/favorites"><FontAwesomeIcon icon={solid('heart')} />&nbsp;Favorites</Dropdown.Item>
                                        <Dropdown.Item onClick={handleClick}><FontAwesomeIcon icon={solid('arrow-right-from-bracket')} />&nbsp;Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </MediaQuery>
                            <MediaQuery maxWidth={1224}>
                                <div className='position-absolute bottom-0 start-0 end-0 mx-auto menu-mobile'>
                                    <div className='position-fixed bottom-0 start-0 end-0 bg-white mx-auto mb-3 p-2 rounded w-50 text-center shadow-lg'>
                                        <div class="d-inline p-3 text-black fs-3 rounded-circle">
                                            <FontAwesomeIcon onClick={() => window.location.href = '/'} className='icons-menu' icon={solid('home')} />
                                        </div>
                                        <div class="d-inline p-3 text-black fs-3 icons-menu">
                                            <FontAwesomeIcon onClick={() => window.location.href = '/favorites'} className='icons-menu' icon={solid('heart')} />
                                        </div>
                                        <div class="d-inline p-3 text-black fs-3 icons-menu">
                                            <FontAwesomeIcon onClick={handleClick} className='icons-menu' icon={solid('arrow-right-from-bracket')} />
                                        </div>
                                    </div>
                                </div>
                            </MediaQuery>
                        </div>
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