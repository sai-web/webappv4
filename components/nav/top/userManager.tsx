import React from 'react'
import { motion } from 'framer-motion'

import { animateTemplate, lanuchMenu, MenuType } from '../../../core/utils/Events'

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
            <UserModes
                name="all_inbox"
                size="15px"
                do={(value) => null}
            />
            <UserModes
                name="clear_all"
                size="20px"
                do={(value) => null}
            />
            <UserModes
                name="add_circle_outline"
                size="15px"
                do={(value) => {
                    lanuchMenu.emit({ type: MenuType.ShareLinkComponent, display: value })
                    animateTemplate.emit({ display: value })
                }}
            />
            <motion.img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                whileTap={{
                    scale: 0.9
                }}
                style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "10px",
                    cursor: "pointer"
                }}
                onClick={() => {
                    lanuchMenu.emit({ type: MenuType.ChannelDropDown, display: true })
                }}
            />
        </div>
    )
}