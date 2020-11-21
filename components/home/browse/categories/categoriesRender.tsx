import React from 'react'
import { motion } from 'framer-motion'

interface category {
    image: string;
    link: string;
    name: string;
}

interface Props {
    renderCategory: category[]
}

export const AllCategories: React.FC<Props> = ({ renderCategory }) => {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "0 50px",
            position: "absolute",
            top: "200px"
        }}>
            {
                renderCategory.map((category, index) => {
                    return (
                        <motion.img
                            src={category.image}
                            alt="category"
                            key={index}
                            initial={{
                                scale: 0.8,
                                opacity: 0.5
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1
                            }}
                            transition={{
                                type: "spring",
                                bounce: 0.35
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                            style={{
                                width: "180px",
                                margin: "5px",
                                cursor: "pointer"
                            }}
                        />
                    )
                })
            }
        </div>
    )
}