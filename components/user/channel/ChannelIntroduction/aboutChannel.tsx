import React, { useState } from 'react'
import { usePulse, useEvent } from '@pulsejs/react'
import { core } from '../../../../core'
import { animateTemplate } from '../../../../core/utils/Events'

export const AboutChannel: React.FC = () => {
    const { description } = usePulse(core.user.state.info)
    const [templateAnimated, setTemplateAnimate] = useState(false)
    useEvent(animateTemplate, ({ display }) => {
        setTemplateAnimate(display)
    })
    return (
        <div style={{
            width: "100%",
            paddingLeft: "10px",
            marginTop: "70px",
            position: "sticky",
            top: "110px",
            scrollSnapAlign: templateAnimated ? "" : "start",
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