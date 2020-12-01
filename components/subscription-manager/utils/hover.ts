interface HoverProps {
    channelRef: any
    item: any
    position: number
    monitor: any
    moveChannel: ({ channelIndex, hoverIndex, changeCreatorstate }: {
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

export const onHover = ({ channelRef, item, monitor, moveChannel, position, setState: changeCreatorstate }: HoverProps) => {
    if (!channelRef.current) {
        return
    }
    const channelIndex: number = item.index;
    const hoverIndex = position;

    if (channelIndex === hoverIndex) {
        return
    }

    const hoveredRect = channelRef.current.getBoundingClientRect();
    const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
    const mousePosition = monitor.getClientOffset();
    const hoverClientY = mousePosition!.y - hoveredRect.top;

    if (channelIndex < hoverIndex && (hoverClientY + 20) < hoverMiddleY) {
        return;
    }

    if (channelIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
    }
    moveChannel({ channelIndex, hoverIndex, changeCreatorstate });
    item.index = hoverIndex;
}