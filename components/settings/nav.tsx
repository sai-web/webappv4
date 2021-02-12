import React from 'react'

import { SettingsSection } from './accessories'

type SettingsPages = {
    Account: boolean;
    Connections: boolean;
}

const emptyStates: SettingsPages = {
    Account: false,
    Connections: false
}

export const SettingsNav: React.FC<{
    setState: React.Dispatch<React.SetStateAction<SettingsPages>>,
    states: SettingsPages
}> = ({
    setState,
    states
}) => {
        return (
            <div>
                <SettingsSection
                    type="Channel Settings"
                    elements={[
                        {
                            name: 'My Channel',
                            do: () => setState(() => {
                                const newState = { ...emptyStates }
                                newState.Account = true
                                return newState
                            }),
                            selected: states.Account,
                            logo:
                                <span
                                    className="material-icons"
                                    style={{
                                        color: "silver",
                                        fontSize: "15px"
                                    }}
                                >
                                    person_outline
                            </span>
                        },
                        {
                            name: 'Connections',
                            do: () => setState(() => {
                                const newState = { ...emptyStates }
                                newState.Connections = true
                                return newState
                            }),
                            selected: states.Connections,
                            logo:
                                <span
                                    className="material-icons"
                                    style={{
                                        color: "silver",
                                        fontSize: "15px"
                                    }}
                                >
                                    link
                            </span>
                        }
                    ]}
                />
                <SettingsSection
                    type="Account Settings"
                    elements={[
                        {
                            name: 'Privacy and Safety',
                            do: () => null,
                            selected: false,
                            logo:
                                <span
                                    className="material-icons"
                                    style={{
                                        color: "silver",
                                        fontSize: "15px"
                                    }}
                                >
                                    gpp_good
                            </span>
                        },
                        {
                            name: 'My Devices',
                            do: () => null,
                            selected: false,
                            logo:
                                <span
                                    className="material-icons"
                                    style={{
                                        color: "silver",
                                        fontSize: "15px"
                                    }}
                                >
                                    smartphone
                            </span>
                        },
                        {
                            name: 'Notifications',
                            do: () => null,
                            selected: false,
                            logo:
                                <span
                                    className="material-icons"
                                    style={{
                                        color: "silver",
                                        fontSize: "15px"
                                    }}
                                >
                                    notifications
                            </span>
                        }
                    ]}
                />
            </div>
        )
    }