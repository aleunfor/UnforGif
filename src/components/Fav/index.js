import useUser from 'hooks/useUser'
import { useLocation } from 'wouter'

export default function Fav({ id }) {
    const { isLogged, addFav, favs } = useUser()
    const [, navigate] = useLocation()

    const isFaved = favs.some((idFav) => idFav === id)

    const handleClick = () => {
        if (!isLogged) return navigate('/login')
        addFav({ id })
    }

    const [
        label,
        icon
    ] = isFaved
            ? ['Remove Gif from favorites', 'bi bi-heart-fill heart-empty fs-5 align-middle']
            : ['Add Gif to favorites', 'bi bi-heart heart-empty fs-5 align-middle']

    return <button className='button-fav rounded-circle border-0 position-absolute bottom-0 start-0 text-white m-2' onClick={handleClick}>
        <span aria-label={label}><i className={icon}></i></span>
    </button>
}