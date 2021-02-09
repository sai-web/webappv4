import React from 'react'

import { SettingsSection } from './accessories'

export const SettingsNav: React.FC = () => {
    return (
        <div>
            <SettingsSection
                type="Account Settings"
                elements={[
                    {
                        name: 'Privacy and Safety',
                        do: () => null,
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
            <SettingsSection
                type="Channel Settings"
                elements={[
                    {
                        name: 'My Channel',
                        do: () => null,
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
                        do: () => null,
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
        </div>
    )
}