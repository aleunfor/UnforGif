import { Link } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Category({ name, options = [] }) {
    return (
    <>
        <h3><FontAwesomeIcon icon={solid('fire')} /> {name} </h3>
            {options.map((singleOption, index) => (
                <a className='btn btn-primary m-1' key={singleOption} href={`/search/${singleOption}`}>
                    {singleOption}
                </a>
            ))}
            
    </>
    )    
}