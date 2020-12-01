import React from 'react'

import { CategoryProps } from './interface'

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
            <RenderChannels category={category} channelArr={channelArr} changeCreatorstate={changeCreatorstate} GlobalArray={GlobalArray} />
        </div>
    )
}