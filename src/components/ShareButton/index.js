import { useState } from 'react'
import useUser from 'hooks/useUser'
import LoginModal from 'components/LoginModal'
import Login from 'components/Login'
import ShareModal from 'components/ShareModal'

export default function ShareButton({id, title}) {
    const { isLogged } = useUser()
    const [showLoginModal, setLoginModal] = useState('')
    const [showShareModal, setShareModal] = useState('')

    const handleClick = () => {
        if (!isLogged) return setLoginModal('show')
        setShareModal('show')
    }

    const onShareClose = () => {
        setShareModal('')
    }

    const onClose = () => {
        setLoginModal('')
    }

    const handleLogin = () => {
        setLoginModal('')
    }

    return <>
        <button className='button-fav rounded-circle border-0 position-absolute bottom-0 end-0 text-white m-2' onClick={handleClick}>
            <span aria-label='Share this GIF'><i className="bi bi-share heart-empty fs-5 align-middle"></i></span>
        </button>
        {
            showShareModal &&
            <ShareModal show={onShareClose} title={title} id={id}/>
        }
        {
            showLoginModal &&
            <LoginModal show={onClose}>
                <Login onLogin={handleLogin} />
            </LoginModal>
        }
    </>
}