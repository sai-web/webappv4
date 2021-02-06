import { useEffect, useState } from 'react'

export function onMouseClick() {
    const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 })
    useEffect(() => {
        function handleScroll(event: any) {
            setPosition({
                x: event.clientX,
                y: event.clientY,
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        document.addEventListener('click', handleScroll)
        return () => document.removeEventListener('click', handleScroll)
    }, [])

    return position
}