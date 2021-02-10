import React from 'react'

import { AccounCredentialSettings, AccountRemovalSettings } from './mainComponents'
import { CloseButton } from '../accessories'

export const AccountUpdateDisplay: React.FC = () => {
    return (
        <div style={{
            height: "100%",
            flex: 5,
            backgroundColor: "#1A1A1A"
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
                <CloseButton>
                    <span
                        className="material-icons"
                        style={{
                            color: "#72767D",
                            fontSize: "17px"
                        }}
                    >
                        close
                    </span>
                </CloseButton>
                <div style={{
                    width: "calc(100% - 100px)"
                }}>
                    <h4 style={{
                        fontFamily: "Whitney",
                        fontSize: "15px",
                        color: "silver"
                    }}>
                        My Channel
                    </h4>
                </div>
                <AccounCredentialSettings />
                <AccountRemovalSettings />
            </div>
        </div>
    )
}