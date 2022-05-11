import {useEffect, useRef, useState} from 'react'

export default function useNearScreen ({ distance = '50px', externalRef, once = true } = {}){
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()
    
    //useRef no vuelve a renderizar el componente

    useEffect(function() {
        let observer
        const element = externalRef ? externalRef.current : fromRef.current

        const onChange = (entries, observer) => {
            const el = entries[0]
            if (el.isIntersecting){
                setShow(true)
                once && observer.disconnect()// deja de cargar los datos
            } else {
                !once && setShow(false)
            } 
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
              ? IntersectionObserver
              : import('intersection-observer')
          ).then(() => {
              //Evitar que el componente se cargue si no lo estamos viendo
            observer = new IntersectionObserver(onChange, {
              rootMargin: distance
            })
        
            if (element) observer.observe(element)//.current el valor actual de la referencia

          })
        
        return () => observer && observer.disconnect()
    })

    return {isNearScreen, fromRef}
}