import React from 'react'
import { motion } from 'framer-motion'

import { core } from '../../../../core'

// import { mainContentData } from '../../../home/fakeData/home'
import { categories } from '../../../home/fakeData/browse'
import { usePulse } from '@pulsejs/react'
import { isArray } from 'util'

const ContentFilterWord: React.FC<{
    name: string,
    setContent: React.Dispatch<React.SetStateAction<object[]>>
}> = ({
    name,
    setContent
}) => {
        const content = usePulse(core.vod.collections.vods.getGroup('default'))
        return (
            <motion.div
                whileTap={{
                    scale: 0.9
                }}
                style={{
                    height: "26px",
                    backgroundColor: "#242429",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "5px",
                    marginRight: "5px",
                    padding: "0 5px",
                    borderRadius: "13px",
                    cursor: "pointer"
                }}
                onClick={() => setContent(() => {
                    const newContent = name !== "everything" ? content.filter(content => {
                        return content.tags.map((tag: any) => (tag.toLocaleLowerCase())).includes(name)
                    }) : [...content]
                    return newContent !== [] ? newContent : content
                })}
            >
                <h4 style={{
                    lineHeight: "0",
                    fontFamily: "sans-serif",
                    color: "silver",
                    fontWeight: "lighter",
                    fontSize: "13px"
                }}>{name}</h4>
            </motion.div>
        )
    }

export const ContentFilter: React.FC<{
    setContent: React.Dispatch<React.SetStateAction<object[]>>
}> = ({ setContent }) => {
    const content = usePulse(core.vod.collections.vods.getGroup('default'))
    return (
        <div style={{
            width: "calc(100% - 40px)",
            height: "40px",
            backgroundColor: "#18181B",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly"
        }}>
            <div style={{
                width: "calc(100% - 330px)",
                overflowX: "scroll",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                backgroundColor: "#0E0E10",
                height: "33px",
                borderRadius: "5px"
            }} className="main-content-div">
                {
                    content
                        .map(content => (content.tags))
                        .reduce((categories: string[], videoCategory: string[]) => {
                            if (Array.isArray(videoCategory)) videoCategory.forEach(category => categories.includes(category) ? null : categories.push(category))
                            return categories
                        }, ['everything'])
                        .map((category: any, index: number) => {
                            return (
                                <ContentFilterWord
                                    name={category.toLocaleLowerCase()}
                                    key={`Filter-Option-${index}`}
                                    setContent={setContent}
                                />
                            )
                        })
                }
            </div>
            <input
                type="text"
                placeholder="filter content"
                style={{
                    width: "250px",
                    height: "20px",
                    marginRight: "10px",
                    backgroundColor: "#242429",
                    borderWidth: "0",
                    borderRadius: "5px",
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    color: "grey",
                    paddingLeft: "10px",
                    outline: "none"
                }}
                onChange={e => {
                    setContent(() => {
                        const newContent = content.filter(content => {
                            return (
                                content.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||
                                content.platform.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||
                                content.tags.map((tag: any) => (tag.toLocaleLowerCase())).includes(e.target.value.toLocaleLowerCase())
                            )
                        })
                        return newContent !== [] ? newContent : content
                    })
                }}
            />
        </div>
    )
}