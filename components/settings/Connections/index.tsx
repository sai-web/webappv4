import React from 'react'
import { ConnectionsDiv } from './availablePlatforms'

const SelectedPlatform:React.FC<{
    name:string,
    logo:JSX.Element,
    color:string,
    Account:{
        name:string,
        photo:string,
        redirectLink:string
    }
}> = () => {
    return (
        <div>

        </div>
    )
}

export const ConnectionDisplay: React.FC = () => {
    return (
        <div>
            <div style={{
                height: "100%"
            }}>
                <div style={{
                    width: "700px",
                    height: "100%",
                    position: "relative",
                    // backgroundColor: "red",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <div style={{
                        width: "calc(100% - 100px)"
                    }}>
                        <h4 style={{
                            fontFamily: "Whitney",
                            fontSize: "15px",
                            color: "silver"
                        }}>
                            Connections
                        </h4>
                    </div>
                    <ConnectionsDiv />
                </div>
            </div>
        </div>
    )
}