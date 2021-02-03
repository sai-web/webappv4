import React, { useEffect, useState } from "react"

import Nav from '../nav/side/mainNav'
import Menu from '../nav/top/topNav'

interface Props {
    PageMode: JSX.Element
    width: string
    children: React.ReactNode
    page: string
    reference?: React.RefObject<any>
    banner?: boolean
}

const Banner: React.FC<{ scaleVal: number }> = ({ scaleVal }) => {
    return (
        <div style={{
            width: "calc(100% - 200px)",
            height: "270px",
            overflow: "hidden",
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: "35px",
            zIndex: -1
        }}>
            <img src="https://myrepublic.net/sg/content/uploads/2020/09/valorant-banner.png"
                style={{
                    height: `${((scaleVal + 1) / 2) * 270}px`,
                    objectFit: "cover"
                }}
            />
            <div style={{
                width: "100%",
                height: "100%",
                backgroundColor: `rgba(0,0,0,${1 - scaleVal})`,
                position: "absolute",
                top: "0",
                left: "0"
            }}
            >

            </div>
        </div>
    )
}

const template: React.FC<Props> = function ({ PageMode, width, children, page, reference, banner = false }) {
    const [bannerScale, setBannerScale] = useState<number>(1)
    useEffect(() => {
        function handleScrollEvent(event: any) {
            if (reference!.current) setBannerScale(1 - (event.target.scrollTop / 670))
        }
        if (reference) reference!.current.addEventListener("scroll", handleScrollEvent)
    }, [reference])
    return (
        <div
            className="main-content-div"
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                backgroundColor: "#0E0E10",
                userSelect: "none",
                overflowY: "scroll",
                scrollbarWidth: "none",
                zIndex: -2,
                scrollSnapType: "y"
                // filter: "invert(100%)"
            }}
            ref={reference}
        >
            <div
                style={{
                    width: "calc(100% - 200px)",
                    height: "calc(100% - 40px)",
                    position: "absolute",
                    top: "40px",
                    right: "0"
                }}
            >
                {banner ? <Banner scaleVal={bannerScale} /> : ""}
                {children}
            </div>
            <Nav page={page} />
            <Menu pageModes={PageMode} width={width} page={page} />
        </div>
    )
}

export default template