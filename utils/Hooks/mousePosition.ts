import { useEffect, useState } from 'react'
import { showMenuType } from '../../components/app/template'

export function onMouseClick(
    menu: showMenuType
) {
    const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 })
    // let [time, setTime] = useState((new Date()).getTime())
    const depenedencyArr = [
        menu.ChannelDropDown,
        menu.ContentMenu.display,
        menu.Profile,
        menu.ShareLinkComponent,
        menu.ConnectionMenu.display
    ]
    function setStateWithTimeStamp(event: any) {
        // if ((new Date).getTime() - time > 1500) {
        setPosition({
            x: event.clientX,
            y: event.clientY,
            width: window.innerWidth,
            height: window.innerHeight
        })
        //     setTime((new Date).getTime())
        // }
    }
    useEffect(() => {
        function handleClick(event: any) {
            if (!(
                menu.ChannelDropDown ||
                menu.ContentMenu.display ||
                menu.Profile ||
                menu.ShareLinkComponent ||
                menu.ConnectionMenu.display
            )) {
                if (depenedencyArr) {
                    if (depenedencyArr.find(item => item === true)) {
                        setPosition({
                            x: event.clientX,
                            y: event.clientY,
                            width: window.innerWidth,
                            height: window.innerHeight
                        })
                    } else setStateWithTimeStamp(event)
                } else setStateWithTimeStamp(event)
            }
        }
        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [menu])

    return position
}