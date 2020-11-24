import React from "react"

interface category {
    image: string;
    link: string;
    name: string;
}

interface Props {
    setRenderCategory: (value: React.SetStateAction<category[]>) => void
    categories: category[]
}

export const Filter: React.FC<Props> = ({ setRenderCategory, categories }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            lineHeight: "0",
            marginLeft: "50px",
            width: "280px",
            justifyContent: "space-between"
        }}>
            <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "15px" }}>Filter by</h4>
            <input
                type="text"
                placeholder="Search"
                style={{
                    width: "200px",
                    height: "30px",
                    borderRadius: "3px",
                    backgroundColor: "#3E3E40",
                    borderWidth: "0",
                    paddingLeft: "10px",
                    fontSize: "13px",
                    color: "white",
                    outline: "none"
                }}
                onChange={e => {
                    setRenderCategory(() => {
                        var newList = categories.filter(category => {
                            return category.name.toLocaleLowerCase().includes(e.target.value)
                        })
                        return newList
                    })
                }}
            />
        </div>
    )
}