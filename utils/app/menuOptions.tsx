import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { lanuchMenu, MenuType } from '../../core/utils/Events'
import { useEvent } from '@pulsejs/react'

import { closeOnOutwardClick } from '../../utils/auth/index'
import { animateTemplate } from '../../core/utils/Events'
import template from '../../components/app/template'

interface MenuOptionProperties {
    do: Function,
    color: string,
    logo: () => JSX.Element | null
}

export const MenuOptions: React.FC<{
    options: Record<string, MenuOptionProperties>,
    type: MenuType,
    reference: React.MutableRefObject<any>
}> = ({ options, type, reference }) => {
    closeOnOutwardClick((value: boolean) => {
        lanuchMenu.emit({ type, display: value })
    }, [reference])
    return (
        <div
            style={{
                width: "150px",
                // position: "absolute",
                // right: "10px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
            }}
            ref={reference}
        >
            {
                Object.keys(options).map((option, index) => {
                    return (
                        <motion.div
                            whileHover={{
                                backgroundColor: "#2d2d30"
                            }}
                            style={{
                                backgroundColor: options[option].color,
                                width: "100%",
                                height: "25px",
                                display: "flex",
                                alignItems: "center",
                                cursor: "pointer"
                            }}
                            key={"menu-options-" + index.toString()}
                        >
                            {options[option].logo()}
                            <h4 style={{
                                fontFamily: "Roboto Condensed",
                                fontWeight: "lighter",
                                color: "silver",
                                fontSize: "15px",
                                marginLeft: "5px"
                            }}>
                                {option}
                            </h4>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}