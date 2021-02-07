import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import { lanuchMenu, MenuType } from '../../core/utils/Events'

import { closeOnOutwardClick } from '../../utils/auth'

const ProfileSection: React.FC = () => {
    return (
        <div style={{
            display: "flex",
            // backgroundColor: "red",
            alignItems: "center",
            width: "100%"
        }}>
            <motion.img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                whileTap={{
                    scale: 0.9
                }}
                style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "10px",
                    cursor: "pointer",
                    marginLeft: "10px"
                }}
            />
            <div style={{
                display: "flex",
                flexDirection: "column"
                // backgroundColor: "green"
            }}>
                <h4 style={{
                    fontFamily: "Whitney",
                    color: "silver",
                    fontSize: "15px",
                    lineHeight: "0",
                    position: "relative",
                    top: "5px"
                }}>
                    AR
                </h4>
                <h4 style={{
                    fontFamily: "Poppins",
                    color: "grey",
                    fontSize: "10px",
                    lineHeight: "0",
                    position: "relative",
                    bottom: "10px"
                }}>
                    /ar
                </h4>
            </div>
        </div>
    )
}

const MenuOption: React.FC<{
    name: string,
    logo: JSX.Element
}> = ({ name, logo }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "30px",
            // backgroundColor: "red"
        }}>
            {logo}
            <h4 style={{
                fontFamily: "sans-serif",
                fontWeight: "lighter",
                fontSize: "15px",
                color: "white",
                marginLeft: "5px"
            }}>
                {name}
            </h4>
        </div>
    )
}

const SettingsSection: React.FC = () => {
    return (
        <div style={{
            width: "calc(100% - 20px)",
            margin: "5px 0"
            // backgroundColor: "green"
        }}>
            <MenuOption
                name="Settings"
                logo={
                    <span className="material-icons"
                        style={{
                            fontSize: "20px",
                            color: "white",
                            marginLeft: "10px"
                        }}
                    >
                        settings
                    </span>
                }
            />
            <MenuOption
                name="Language"
                logo={
                    <span className="material-icons"
                        style={{
                            fontSize: "20px",
                            color: "white",
                            marginLeft: "10px"
                        }}
                    >
                        language
                    </span>
                }
            />
            <MenuOption
                name="Theme"
                logo={
                    <span className="material-icons"
                        style={{
                            fontSize: "20px",
                            color: "white",
                            marginLeft: "10px"
                        }}
                    >
                        dark_mode
                    </span>
                }
            />
        </div>
    )
}

const SeparationDiv: React.FC = () => {
    return (
        <div style={{
            width: "calc(100% - 40px)",
            height: "1px",
            backgroundColor: "#303032"
        }}>

        </div>
    )
}

const LogOutButton: React.FC = () => {
    return (
        <div style={{ width: "calc(100% - 20px)", margin: "5px 0" }}>
            <MenuOption
                name="Log Out"
                logo={
                    <span className="material-icons"
                        style={{
                            fontSize: "20px",
                            color: "white",
                            marginLeft: "10px"
                        }}
                    >
                        logout
                    </span>
                }
            />
        </div>
    )
}

const AccountSettings: React.FC = () => {
    return (
        <div style={{
            width: "calc(100% - 20px)",
            margin: "5px 0"
            // backgroundColor: "green"
        }}>
            <MenuOption
                name="Wallet"
                logo={
                    <span className="material-icons"
                        style={{
                            fontSize: "20px",
                            color: "white",
                            marginLeft: "10px"
                        }}
                    >
                        account_balance_wallet
                    </span>
                }
            />
            <MenuOption
                name="Switch Accounts"
                logo={
                    <span className="material-icons"
                        style={{
                            fontSize: "20px",
                            color: "white",
                            marginLeft: "10px"
                        }}
                    >
                        switch_account
                    </span>
                }
            />
            {/* <MenuOption
                name=""
                logo={
                    <span className="material-icons"
                        style={{
                            fontSize: "20px",
                            color: "white",
                            marginLeft: "10px"
                        }}
                    >
                        dark_mode
                    </span>
                }
            /> */}
        </div>
    )
}

const displayVariants = {
    visible: {
        scale: 1,
        opacity: 1
    },
    hidden: {
        scale: 0,
        opacity: 0
    }
}

export const ChannelSettingsDropDownMenu: React.FC<{ display: boolean }> = ({ display }) => {
    // useEffect(() => {
    //     console.log(x, y)
    // }, [x, y])
    // useEffect(() => {
    //     const contentMenuParentElement = document.getElementById('content-menu-parent')
    //     if (contentMenuParentElement) {
    //         if (display) contentMenuParentElement.style.display = "flex"
    //         else setTimeout(() => contentMenuParentElement.style.display = "none", 1000)
    //     }
    // })
    const { x, y } = { x: 20, y: 50 }
    const ChannelDropDownRef = useRef<any>(null)
    const [renderCount, setRenderCount] = useState<number>(0)
    closeOnOutwardClick((value: boolean) => {
        lanuchMenu.emit({ type: MenuType.ChannelDropDown, display: value })
        // template ? animateTemplate.emit({ display: value }) : null
    }, [ChannelDropDownRef])
    useEffect(() => {
        if (renderCount < 2) setRenderCount(prev => (prev + 1))
    })
    return (
        <div>
            <motion.div
                initial={display ? "hidden" : renderCount > 0 ? "visible" : "hidden"}
                animate={display ? "visible" : "hidden"}
                transition={{
                    type: "spring",
                    damping: 10
                }}
                variants={displayVariants}
                style={{
                    position: "absolute",
                    top: `${y}px`,
                    right: `${x}px`,
                    zIndex: 2,
                    // backgroundColor: "red",
                    // display: "flex",
                    // width: "100px",
                    // height: "100px"
                }}
                id="channel-settings-menu-parent"
                ref={ChannelDropDownRef}
            >
                <div style={{
                    width: "200px",
                    height: "300px",
                    backgroundColor: "#18181B",
                    borderRadius: "10px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <ProfileSection />
                    <SeparationDiv />
                    <AccountSettings />
                    <SeparationDiv />
                    <SettingsSection />
                    <SeparationDiv />
                    <LogOutButton />
                </div>
            </motion.div>
        </div>
    )
}