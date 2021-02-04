import { useEffect, useState } from 'react'

export function onMouseClick(element: { width: number, height: number }) {
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

    let coordinates = {
        x: position.x,
        y: position.y
    }

    const computationForX = position.width - (element.width + position.x)
    const computationForY = position.height - (element.height + position.y)
    if (computationForX < 0) coordinates.x = position.x + computationForX - 20
    if (computationForY < 0) coordinates.y = position.y + computationForY - 20

    return coordinates
}