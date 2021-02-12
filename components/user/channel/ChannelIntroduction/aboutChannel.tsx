import React from 'react'
import { usePulse } from '@pulsejs/react'
import { core } from '../../../../core'

export const AboutChannel: React.FC = () => {
    const { description } = usePulse(core.user.state.info)
    return (
        <div style={{
            width: "100%",
            paddingLeft: "10px",
            marginTop: "70px",
            position: "sticky",
            top: "110px",
            scrollSnapAlign: "start",
            height: "500px",
            // backgroundColor: "green"
        }}>
            <h4 style={{
                fontFamily: "Poppins",
                fontSize: "15px",
                color: "grey",
                lineHeight: "0"
            }}>
                About Channel
            </h4>
            <h4 style={{
                fontFamily: "Poppins",
                fontWeight: "lighter",
                color: "silver",
                fontSize: "13px"
            }}>
                {description}
            </h4>
        </div>
    )
}