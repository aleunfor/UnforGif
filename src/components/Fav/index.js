import useUser from 'hooks/useUser'
import { useState } from 'react'
import LoginModal from 'components/LoginModal'
import Login from 'components/Login'

export default function Fav({ id, title }) {
    const { isLogged, addFav, favs, removeFav } = useUser()
    const [showModal, setShowModal] = useState('')

    const isFaved = favs.some((idFav) => idFav === id)

    const handleClick = () => {
        if (!isLogged) return setShowModal('show')
        if (!isFaved) {
            addFav({ id, title })
        } else {
            removeFav({id})
        }
    }

    const onClose = () => {
        setShowModal('')
    }

    const handleLogin = () => {
        setShowModal('')
    }

    const [
        label,
        icon
    ] = isFaved
            ? ['Remove Gif from favorites', 'bi bi-heart-fill heart-empty fs-5 align-middle']
            : ['Add Gif to favorites', 'bi bi-heart heart-empty fs-5 align-middle']

    return <>
        <button className='button-fav rounded-circle border-0 position-absolute bottom-0 start-0 text-white m-2' onClick={handleClick}>
            <span aria-label={label}><i className={icon}></i></span>
        </button>
        {
            showModal &&
            <LoginModal show={onClose}>
                <Login onLogin={handleLogin} />
            </LoginModal>
        }
    </>
}