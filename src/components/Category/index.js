import { Link } from 'wouter'

export default function Category({ name, options = [] }) {
    return (
    <>
        <h3> {name} </h3>
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