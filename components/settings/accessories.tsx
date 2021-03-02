import React from 'react'
import { core } from '../../core'
import { motion } from 'framer-motion'

import { lanuchMenu, MenuType } from '../../core/utils/Events'

export const SettingType: React.FC<{
    name: string
}> = ({
    name
}) => {
        return (
            <h4 style={{
                fontFamily: "Whitney",
                fontSize: "12px",
                color: "grey",
                marginLeft: "10px"
            }}>
                {name}
            </h4>
        )
    }

export const SettingChildDiv: React.FC<{
    selected?: boolean
}> = ({
    children,
    selected
}) => {
        return (
            <div style={{
                width: "200px",
                height: "10px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                margin: "5px",
                padding: "10px",
                cursor: "pointer",
                backgroundColor: selected ? "#202020" : ""
            }} className="settings-selection-div">
                {children}
            </div>
        )
    }

export const SettingChildH4: React.FC<{
    name: string
}> = ({ name }) => {
    return (
        <h4 style={{
            fontFamily: "Poppins",
            fontSize: "12px",
            color: "silver",
            marginLeft: "5px"
        }}>
            {name}
        </h4>
    )
}

export const CloseButton: React.FC = ({ children }) => {
    return (
        <div
            className="settings-close-button"
            style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: "1px solid #72767D",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                position: "absolute",
                top: "20px",
                right: "20px"
            }}
            onClick={() => {
                lanuchMenu.emit({ type: MenuType.Settings, display: false })
                core.settings.updateSettings()
            }}
        >
            {children}
        </div>
    )
}

export const SettingsSection: React.FC<{
    type: string,
    elements: {
        name: string,
        do: () => void,
        logo: JSX.Element,
        selected: boolean
    }[]
}> = ({
    type,
    elements
}) => {
        return (
            <div>
                <SettingType name={type} />
                {
                    elements.map((child, index) => {
                        return (
                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                onClick={child.do}
                                key={`setting-${type}-${index}`}
                            >
                                <SettingChildDiv selected={child.selected}>
                                    {child.logo}
                                    <SettingChildH4 name={child.name} />
                                </SettingChildDiv>
                            </motion.div>
                        )
                    })
                }
            </div>
        )
    }