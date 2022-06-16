import Gif from 'components/Gif';

export default function ListOfGifs ({gifs}){
    return <div className='grid-wrapper mb-5 min-vh-50'>
        {
            gifs.map(({id, title, url}) => 
                <Gif
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />
            )
        }
    </div>
}