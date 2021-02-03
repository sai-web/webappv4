import React from 'react'

interface viewershipProps {
    value: number
    type: string
}

export const ViewerShipType: React.FC<viewershipProps> = ({ value, type }) => {
    return (
        <div style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <div>
                <h4 style={{
                    color: "#4D6FFF",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    lineHeight: "0px"
                }}>
                    {value}
                </h4>
            </div>
            <div>
                <h4 style={{
                    color: "grey",
                    fontFamily: "sans-serif",
                    fontSize: "9px",
                    lineHeight: "0px",
                    position: "relative",
                    bottom: "13px"
                }}>
                    {type}
                </h4>
            </div>
        </div>
    )
}