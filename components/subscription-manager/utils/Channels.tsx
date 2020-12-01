import React from 'react'
import { CategoryProps } from '../interface'

import { useDrop } from 'react-dnd'

import { ChannelCard } from '../channel'
import { changeChannelState, shiftChannelPosition } from './listLogic'

export const RenderChannels: React.FC<CategoryProps> = ({ category, channelArr, changeCreatorstate, GlobalArray }) => {
    const [, DropRef] = useDrop({
        accept: "channel-card",
        drop: (item, monitor) => {
            changeChannelState({ item, changeCreatorstate, category })
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
                channelArr.map((creator, index) => {
                    var GlobalChannelIndex = GlobalArray.indexOf(creator)
                    return (
                        <ChannelCard creator={creator} position={GlobalChannelIndex} setState={changeCreatorstate} moveChannel={shiftChannelPosition} key={index} />
                    )
                })
            }
        </div>
    )
}