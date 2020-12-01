interface channel {
    name: string;
    photo: string;
    domain: string;
    type: string;
}

export interface CategoryProps {
    category: {
        type: string
        desc: string
    }
    channelArr: channel[]
    changeCreatorstate: React.Dispatch<React.SetStateAction<{
        photo: string;
        name: string;
        domain: string;
        type: string;
    }[]>>
    GlobalArray: channel[]
}

export interface ChannelCardProps {
    creator: channel
    position: number
    moveChannel: ({ hoverIndex, channelIndex, changeCreatorstate }: {
        channelIndex: number, hoverIndex: number, changeCreatorstate: React.Dispatch<React.SetStateAction<{
            photo: string;
            name: string;
            domain: string;
            type: string;
        }[]>>
    }) => void
    setState: React.Dispatch<React.SetStateAction<{
        photo: string;
        name: string;
        domain: string;
        type: string;
    }[]>>
}