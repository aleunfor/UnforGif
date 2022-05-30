import useUser from 'hooks/useUser'
import { useLocation } from 'wouter'

export default function Fav({ id }) {
    const { isLogged } = useUser()
    const [, navigate] = useLocation()

    const handleClick = () => {
        if (!isLogged) return navigate('/login')
        alert(id)
    }

    return <button className='bg-white rounded-circle border-0 position-absolute bottom-0 start-0 text-white m-2' onClick={handleClick}>
        <span aria-label="Fav Gif"><i className="bi bi-heart heart-empty fs-5 align-middle"></i></span>
    </button>
}