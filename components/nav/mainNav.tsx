import React from 'react'

interface NavigationPageProps {
    name: string
    logo: string
}

const NavigationPages: React.FC<NavigationPageProps> = ({ name, logo }: NavigationPageProps) => {
    return (
        <div style={{ height: "40px", display: "flex", alignItems: "center" }}>
            <div style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#313130",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "5px"
            }}>
                <span className="material-icons" style={{ color: "white", fontSize: "17px" }}>
                    {logo}
                </span>
            </div>
            <h4 style={{ color: "white", fontFamily: "Roboto Condensed", fontSize: "15px", marginLeft: "10px" }}>{name}</h4>
        </div>
    )
}

function navigationMenu() {
    return (
        <nav style={{
            width: "200px",
            height: "calc(100% - 40px)",
            position: "absolute",
            top: "40px",
            left: "0",
            backgroundColor: "#1F1F23",
            display: "flex",
            flexDirection: "column"
        }}>
            <div style={{
                width: "100%",
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly"
            }}>
                <NavigationPages name="Trending" logo="local_fire_department" />
                <NavigationPages name="Favourite" logo="favorite" />
                <NavigationPages name="Subscription Manager" logo="drag_indicator" />
            </div>
            <div style={{
                width: "calc(100% - 10px)",
                height: "35px",
                backgroundColor: "#242429",
                marginLeft: "5px",
                marginTop: "10px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
                <i className="fa fa-user" style={{ color: "white", fontSize: "15px" }}></i>
                <span className="material-icons" style={{ color: "white", fontSize: "17px" }}>
                    favorite_border
                </span>
                <span className="material-icons" style={{ color: "white", fontSize: "17px" }}>
                    notifications_off
                </span>
            </div>
        </nav>
    )
}

export default navigationMenu