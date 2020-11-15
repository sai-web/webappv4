import React from 'react'

const ChannelClassificationCss = {
    fontFamily: "sans-serif",
    fontSize: "12px",
    color: "whitesmoke",
    marginLeft: "5px"
}

const ContentClassificationCss = {
    fontFamily: "sans-serif",
    fontSize: "13px",
    color: "whitesmoke"
}

interface PageModeProps {
    name: string
    logo: JSX.Element
}
const PageModes: React.FC<PageModeProps> = ({ name, logo }: PageModeProps) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center"
        }}>
            {logo}
            <h4 style={ChannelClassificationCss}>
                {name}
            </h4>
        </div>
    )
}

interface MainModeProps {
    name: string
}

const MainModes: React.FC<MainModeProps> = ({ name }: MainModeProps) => {
    return (
        <h4 style={ContentClassificationCss}>
            {name}
        </h4>
    )
}

interface UserModeProps {
    name: string
}

const UserModes: React.FC<UserModeProps> = ({ name: UserModeProps }) => {
    return (
        <span
            className="material-icons"
            style={{
                fontSize: "15px",
                color: "white"
            }}
        >
            {name}
        </span>
    )
}

function extendedMenu() {
    return (
        <nav style={{
            width: "100%",
            height: "40px",
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "#18181B",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <div style={{
                display: "flex",
                height: "inherit",
                width: "300px",
                margin: "0",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <img
                    src="/viber.png"
                    alt="app-logo"
                    style={{
                        width: "45px",
                        height: "inherit",
                        objectFit: "cover"
                    }}
                />
                <MainModes name="Browse" />
                <MainModes name="Live" />
                <MainModes name="Esports" />
                <MainModes name="Music" />
            </div>
            <div style={{
                display: "flex",
                height: "inherit",
                width: "250px",
                margin: "0",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <PageModes name="Channel" logo={<i className="fa fa-user" style={{ color: "white", fontSize: "10px" }}></i>} />
                <PageModes name="Community" logo={<i className="fa fa-users" style={{ color: "white", fontSize: "10px" }}></i>} />
                <PageModes name="Content" logo={<span className="material-icons" style={{ color: "white", fontSize: "12px" }}>bookmark</span>} />
            </div>
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
        </nav>
    )
}

export default extendedMenu