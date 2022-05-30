import React from 'react'
import Fav from 'components/Fav'

function Gif({ title, id, url }) {
    return (
        <div className="gifbox">
            <img loading="lazy" width="100%" className='img-fluid rounded' alt={title} src={url} />
            <Fav id={id}></Fav>
            <a href={`/gif/${id}`}><h4 className="pb-1 title-gif" >{title ? title : "No Title"}</h4></a>
        </div>            
    )
}

export default React.memo(Gif, (prevProps, nextProps) => {
    //Evita renderizar si la id anterior y la actual son las mismas
    return prevProps.id === nextProps.id
})