interface HoverCategoryProps {
    CategoryRef: any
    item: any
    position?: number
    monitor: any
    changeCategoryOrder?: React.Dispatch<React.SetStateAction<{
        type: string;
        desc: string;
    }[]>>
}

interface DropCategoryProps {
    changeCategoryOrder?: React.Dispatch<React.SetStateAction<{
        type: string;
        desc: string;
    }[]>>
    CategoryIndex: number
    hoverIndex?: number
}

const DropCategory = ({ changeCategoryOrder, CategoryIndex, hoverIndex }: DropCategoryProps) => {
    changeCategoryOrder!(prev => {
        const FilteringCategory = prev[CategoryIndex]
        prev = prev.filter((_, index) => {
            return index !== CategoryIndex
        })
        prev.splice(hoverIndex!, 0, FilteringCategory)
        return [...prev]
    })
}

export const onHoverCategory = ({ CategoryRef, item, position, monitor, changeCategoryOrder }: HoverCategoryProps) => {
    if (!CategoryRef.current) {
        return
    }
    const CategoryIndex: number = item.index;
    const hoverIndex = position;

    if (CategoryIndex === hoverIndex) {
        return
    }

    const hoveredRect = CategoryRef.current.getBoundingClientRect();
    const hoverMiddleX = (hoveredRect.right - hoveredRect.left) / 2;
    const mousePosition = monitor.getClientOffset();
    const hoverClientX = mousePosition!.x - hoveredRect.left;

    if (CategoryIndex < hoverIndex! && (hoverClientX + 100) < hoverMiddleX) {
        return;
    }

    if (CategoryIndex > hoverIndex! && hoverClientX > hoverMiddleX) {
        return;
    }
    DropCategory({ changeCategoryOrder, CategoryIndex, hoverIndex })
    item.index = hoverIndex;
}