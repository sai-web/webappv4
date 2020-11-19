import React, { useState } from 'react'

import CarouselVod from '../../utils/home/carouselVod'
import Arrow from '../../utils/home/arrows'

interface CarouselData {
    thumbnail: string
    creator: string
    link: string
    title: string
}

function Carousel({ Data }: { Data: CarouselData[] }) {
    const [xValue, setPosition] = useState<number>(-300)
    return (
        <>
            <div style={{
                width: "300px",
                height: "200px",
                display: "flex",
                alignItems: "center"
            }}>
                <CarouselVod currentPos={0} imgSrc={Data[0].thumbnail} link={Data[0].link} xValue={xValue} elementId={0} />
                <CarouselVod currentPos={-300} imgSrc={Data[1].thumbnail} link={Data[1].link} xValue={xValue} elementId={1} />
                <CarouselVod currentPos={-600} imgSrc={Data[2].thumbnail} link={Data[2].link} xValue={xValue} elementId={2} />
            </div>
            <Arrow
                name="keyboard_arrow_left"
                positioning={{ left: "200px" }}
                callback={() => setPosition(state => {
                    if (state !== 0) return (state + 300)
                    return 0
                })}
            />
            <Arrow
                name="keyboard_arrow_right"
                positioning={{ right: "200px" }}
                callback={() => setPosition(state => {
                    if (state !== -600) return state - 300
                    return -600
                })}
            />
        </>
    )
}

export default Carousel