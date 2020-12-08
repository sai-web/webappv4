import React from 'react'

import { Analytics } from '../../progress-bar/'
import { ViewerShipType } from './categorizing'
import { Extension } from './extensions'

export const Menu: React.FC = () => {
    return (
        <div style={{
            width: "300px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly"
        }}>
            <div style={{
                width: "calc(100% - 50px)",
                height: "50px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <ViewerShipType value={24} type="subscribers" />
                <ViewerShipType value={10} type="patrons" />
                <ViewerShipType value={4} type="streaks" />
            </div>
            <div style={{
                width: "calc(100% - 50px)",
                height: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
                <Extension
                    icon={
                        <i className="fa fa-group" style={{
                            fontSize: "15px",
                            color: "white"
                        }}></i>
                    }
                    title="Community"
                    subTitle="reach out to your community"
                    color="#1ED761"
                />
                <Extension
                    icon={
                        <i className="fa fa-star-o" style={{
                            fontSize: "15px",
                            color: "white"
                        }}></i>
                    }
                    title="Merch"
                    subTitle="create your store to sell merch"
                    color="#FF9900"
                />
                <Extension
                    icon={
                        <i className="fa fa-send" style={{
                            fontSize: "15px",
                            color: "white"
                        }}></i>
                    }
                    title="Feedback"
                    subTitle="look into the viewers feedback"
                    color="#4D6FFF"
                />
            </div>
            <div style={{
                width: "calc(100% - 50px)",
                height: "200px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Analytics percentage={90} />
            </div>
        </div>
    )
}