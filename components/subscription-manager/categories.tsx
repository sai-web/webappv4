import React from 'react'

import { CategoryProps } from './interface'
import { creators } from '../home/fakeData/sideNav'

import { RenderChannels } from './utils/Channels'

export const ChannelCategory: React.FC<CategoryProps> = ({ category, channelArr, changeCreatorstate, GlobalArray }) => {
    return (
        <div style={{
            width: "200px",
            height: "calc(100% - 20px)",
            backgroundColor: "#1F1F23",
            marginLeft: "10px",
            borderRadius: "5px"
        }}>
            <h4 style={{
                fontFamily: "Poppins",
                fontSize: "15px",
                color: "silver",
                marginLeft: "7px"
            }}>
                {category.type}
            </h4>
            <h4 style={{
                fontFamily: "sans-serif",
                fontSize: "10px",
                color: "grey",
                marginLeft: "7px"
            }}>
                {category.desc}
            </h4>
            <input
                type="text"
                placeholder="filter"
                style={{
                    width: "calc(100% - 30px)",
                    height: "20px",
                    position: "relative",
                    left: "50%",
                    transform: "translate(-50%,0)",
                    backgroundColor: "#18181B",
                    borderWidth: "0",
                    paddingLeft: "10px",
                    borderRadius: "5px",
                    outline: "none",
                    color: "grey"
                }}
                onChange={e => {
                    changeCreatorstate(() => {
                        var filteredCreators = creators.filter((creator, index) => {
                            if (category.type === creator.type) {
                                return creator.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                            }
                            return true
                        })
                        return filteredCreators
                    })
                }}
            />
            <RenderChannels category={category} channelArr={channelArr} changeCreatorstate={changeCreatorstate} GlobalArray={GlobalArray} />
        </div>
    )
}