import { Link } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Category({ name, options = [] }) {
    return (
    <>
        <h3><FontAwesomeIcon icon={solid('fire')} /> {name} </h3>
        <ul className='list-group mb-3'>
            {options.map((singleOption, index) => (
                <li className='list-group-item list-group-item-action' key={singleOption}>
                    <Link to={`/search/${singleOption}`}>{index + 1} Gifs de {singleOption}</Link>
                </li>
            ))}
            
        </ul>
    </>
    )    
}