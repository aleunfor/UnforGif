import { useEffect, useRef } from 'react'

export default function useTitle({ title, description }){
    const prevTitle = useRef(document.title)
    const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))

    useEffect(() => {
        const previuousTitle = prevTitle.current
        document.title = `${title} | UnforGif`

        return () => document.title = previuousTitle
    }, [title])

    useEffect(() => {
        const metaDescription = document.querySelector('meta[name="description"]')
        const previuosDescription = prevDescription.current
        if(description){         
            metaDescription.setAttribute('content', description)
        }

        return () => metaDescription.setAttribute('content', previuosDescription)
    },[description])

}