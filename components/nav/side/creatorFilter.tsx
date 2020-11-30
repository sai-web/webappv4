import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { creators } from '../../../components/home/fakeData/sideNav'

import { CreatorsRender } from './creatorsRender'

interface creator {
    photo: string
    name: string
    domain: string
    type: string
}

export const Filter: React.FC = () => {
    const [[all, favorite, muted], setMode] = useState<Array<boolean>>([true, false, false])
    const [renderCreators, setRenderCreators] = useState<Array<creator>>(creators)
    return (
        <div style={{
            width: "100%",
            height: "calc(100% - 120px)"
        }}>
            <div style={{
                width: "calc(100% - 10px)",
                height: "35px",
                backgroundColor: "#242429",
                margin: "10px 5px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
                <motion.i
                    className="fa fa-user subscribed-channel-filters"
                    style={{ fontSize: "15px", cursor: "pointer", color: all ? "grey" : undefined }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        setMode([true, false, false])
                        setRenderCreators(() => {
                            var newCreators = creators.filter(creator => {
                                return true
                            })
                            return newCreators
                        })
                    }}
                />
                <motion.span
                    className="material-icons subscribed-channel-filters"
                    style={{ fontSize: "17px", cursor: "pointer", color: favorite ? "grey" : undefined }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        setMode([false, true, false])
                        setRenderCreators(() => {
                            var newCreators = creators.filter(creator => {
                                return creator.type === "favourites"
                            })
                            return newCreators
                        })
                    }}
                >
                    favorite_border
                </motion.span>
                <motion.span
                    className="material-icons subscribed-channel-filters"
                    style={{ fontSize: "17px", cursor: "pointer", color: muted ? "grey" : undefined }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        setMode([false, false, true])
                        setRenderCreators(() => {
                            var newCreators = creators.filter(creator => {
                                return creator.type === "muted"
                            })
                            return newCreators
                        })
                    }}
                >
                    notifications_off
                </motion.span>
            </div>
            <CreatorsRender renderCreators={renderCreators} />
        </div>
    )
}