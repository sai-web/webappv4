import React, { useEffect, useState } from 'react'

export function onScroll(ScrollTop?: number, ScrollBottom?: number, ScrollLeft?: number, ScrollRight?: number) {
    const [scrolled, setScroll] = useState(false)
    const ref = React.useRef<any>({})

    useEffect(() => {
        function handleScroll() {
            if (ScrollTop && ref.current.scrollTop > ScrollTop) setScroll(true)
            else if (ScrollBottom && ref.current.scrollBottom < ScrollBottom) setScroll(true)
            else if (ScrollLeft && ref.current.scrollLeft < ScrollLeft) setScroll(true)
            else if (ScrollRight && ref.current.scrollRight > ScrollRight) setScroll(true)
            else setScroll(false)
        }
        ref.current.addEventListener('scroll', handleScroll)
    }, [])

    return { ref, scrolled }
}