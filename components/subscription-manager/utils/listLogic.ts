interface ChannelStateProps {
    item: any
    changeCreatorstate: React.Dispatch<React.SetStateAction<{
        photo: string;
        name: string;
        domain: string;
        type: string;
    }[]>>
    category: { type: string, desc: string }
}

export function changeChannelState({ item, category, changeCreatorstate }: ChannelStateProps) {
    changeCreatorstate(prev => {
        prev.forEach((creator, index) => {
            if (creator.name === item.creator) {
                creator.type = category.type
            }
        })
        return [...prev]
    })
}

interface ChannelPositionProps {
    channelIndex: number
    hoverIndex: number
    changeCreatorstate: React.Dispatch<React.SetStateAction<{
        photo: string;
        name: string;
        domain: string;
        type: string;
    }[]>>
}

export function shiftChannelPosition({ changeCreatorstate, channelIndex, hoverIndex }: ChannelPositionProps) {
    changeCreatorstate(prev => {
        const channel = prev[channelIndex]
        var newArr = prev.filter((_, index) => {
            return index !== channelIndex
        })
        newArr.splice(hoverIndex, 0, channel)
        return [...newArr]
    })
}