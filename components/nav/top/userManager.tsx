import React from 'react'

import { UserModes } from './components/userMode'

export const UserManager: React.FC = () => {
    return (
        <div style={{
            display: "flex",
            height: "inherit",
            width: "200px",
            margin: "0",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <UserModes name="all_inbox" />
            <UserModes name="notifications" />
            <UserModes name="add_circle_outline" />
            <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                alt="profile photo"
                style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "10px"
                }}
            />
        </div>
    )
}