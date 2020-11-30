import React from 'react'

import { useDrop } from 'react-dnd'
import { CategoryProps } from './interface'

import { ChannelCard } from './channel'

const RenderChannels: React.FC<CategoryProps> = ({ category, channelArr, changeCreatorstate }) => {
    const [, DropRef] = useDrop({
        accept: "channel-card",
        drop: (item, monitor) => {
            // console.log(item, category)
            changeCreatorstate(prev => {
                prev.forEach((creator, index) => {
                    if (creator.name === item.creator) {
                        creator.type = category.type
                    }
                })
                return [...prev]
            })
        }
    })
    return (
        <div
            ref={DropRef}
            style={{
                height: "calc(100% - 110px)",
                overflowY: 'scroll'
            }}
            className="main-content-div"
        >
            {
                channelArr.map((creator, index) => (
                    <ChannelCard creator={creator} key={index} />
                ))
            }
        </div>
    )
}

export const ChannelCategory: React.FC<CategoryProps> = ({ category, channelArr, changeCreatorstate }) => {
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
            <RenderChannels category={category} channelArr={channelArr} changeCreatorstate={changeCreatorstate} />
        </div>
    )
}