import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { SettingsNav } from './nav'
import { AccountUpdateDisplay } from './MyChannel'
import { ConnectionDisplay } from './Connections'

import { CloseButton } from './accessories'


const SettingsNavDisplay: React.FC<{
    setNavTypes: React.Dispatch<React.SetStateAction<SettingsPages>>,
    NavStates: SettingsPages
}> = ({ setNavTypes, NavStates }) => {
    return (
        <div style={{
            height: "100%",
            flex: 2,
            backgroundColor: "#151515",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end"
        }}>
            <SettingsNav
                setState={setNavTypes}
                states={NavStates}
            />
        </div>
    )
}

const MainSettingsDisplay: React.FC = ({ children }) => {
    return (
        <div style={{
            height: "100%",
            flex: 5,
            backgroundColor: "#1A1A1A",
            overflowY: "scroll"
        }} className="main-content-div">
            {children}
        </div>
    )
}

const displayVariants = {
    visible: {
        scale: 1,
        opacity: 1
    },
    hidden: {
        scale: 1.5,
        opacity: 0
    }
}

type SettingsPages = {
    Account: boolean;
    Connections: boolean;
}

const displayMainSettings: Record<string, JSX.Element> = {
    Account: <AccountUpdateDisplay />,
    Connections: <ConnectionDisplay />
}

export const Settings: React.FC<{
    display: boolean
}> = ({
    display
}) => {
        const initialSettings: SettingsPages = {
            Account: true,
            Connections: false
        }

        const [renderCount, setRenderCount] = useState<number>(0)
        const [renderSettingsPage, setRenderedSetting] = useState<SettingsPages>(initialSettings)
        useEffect(() => {
            const contentMenuParentElement = document.getElementById('settings-main-div')
            if (contentMenuParentElement) {
                if (display) contentMenuParentElement.style.display = "flex"
                else setTimeout(() => contentMenuParentElement.style.display = "none", 500)
            }
        }, [display])
        useEffect(() => {
            if (renderCount < 2) setRenderCount(prev => (prev + 1))
        })
        return (
            <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                display: "none",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%"
            }} id="settings-main-div">
                <motion.div
                    initial={display ? "hidden" : renderCount > 0 ? "visible" : "hidden"}
                    animate={display ? "visible" : "hidden"}
                    transition={{
                        type: 'spring',
                        bounce: 0.35
                    }}
                    variants={displayVariants}
                    style={{
                        width: "100%",
                        height: "100%",
                        zIndex: 2,
                        display: "flex"
                    }}
                >
                    <SettingsNavDisplay
                        setNavTypes={setRenderedSetting}
                        NavStates={renderSettingsPage}
                    />
                    <MainSettingsDisplay>
                        {Object.entries(renderSettingsPage).map(([key, value]) => {
                            if (value) return (
                                <div key={`settings-navigation-${key}`}>
                                    {displayMainSettings[key]}
                                </div>
                            )
                        })}
                    </MainSettingsDisplay>
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
                </motion.div>
            </div>
        )
    }