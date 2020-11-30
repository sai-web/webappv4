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
}

export interface ChannelCardProps {
    creator: channel
}