import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { lanuchMenu, MenuType } from '../../core/utils/Events'
import { useEvent } from '@pulsejs/react'

import { closeOnOutwardClick } from '../../utils/auth/index'
import { animateTemplate } from '../../core/utils/Events'
import template from '../app/template'

interface MenuOptionProperties {
    do: Function,
    color: string,
    logo: () => JSX.Element | null
}

interface MenuProps {
    options: Record<string, MenuOptionProperties>,
    type: MenuType,
    reference: React.MutableRefObject<any>,
    position?: {
        x: number,
        y: number,
        width: number,
        height: number
    }
}

export const MenuOptions: React.FC<MenuProps> = ({
    options,
    type,
    reference,
    position
}) => {
    closeOnOutwardClick((value: boolean) => {
        lanuchMenu.emit({
            type,
            display: value,
            position
        })
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
                            className={`menu-options-div-${options[option].color}`}
                            style={{
                                width: "100%",
                                height: "25px",
                                display: "flex",
                                alignItems: "center",
                                cursor: "pointer"
                            }}
                            onClick={() => options[option].do()}
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