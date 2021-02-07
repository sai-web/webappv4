import { useEffect, useState } from 'react'
import { showMenuType } from '../../components/app/template'

export function onMouseClick(menu: showMenuType) {
    const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 })
    useEffect(() => {
        function handleScroll(event: any) {
            if (!(
                menu.ChannelDropDown ||
                menu.ContentMenu ||
                menu.Profile ||
                menu.ShareLinkComponent ||
                menu.ConnectionMenu.display
            )) {
                setPosition({
                    x: event.clientX,
                    y: event.clientY,
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            }
        }
        document.addEventListener('click', handleScroll)
        return () => document.removeEventListener('click', handleScroll)
    }, [menu])

    return position
}