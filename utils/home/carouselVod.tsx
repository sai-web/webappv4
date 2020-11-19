import React from 'react'
import { motion } from 'framer-motion'

interface CarouselVodProps {
    link: string
    xValue: number
    currentPos: number
    imgSrc: string
    elementId: number
}

const CarouselVod: React.FC<CarouselVodProps> = ({ currentPos, imgSrc, link, xValue, elementId }) => {
    return (
        <motion.a href={link} target="_blank"
            animate={{
                x: xValue,
                scale: xValue === currentPos ? 1.5 : 1
            }}
            whileTap={{
                scale: xValue === currentPos ? 1.4 : 0.9
            }}
            style={{
                zIndex: xValue === currentPos ? 1 : undefined
            }}
            key={elementId}
        >
            <img
                src={imgSrc}
                style={{
                    width: "300px",
                    height: "169px",
                    borderRadius: '5px'
                }}
            />
        </motion.a>
    )
}

export default CarouselVod