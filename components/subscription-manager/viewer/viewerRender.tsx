import React from 'react'
import { creators } from '../../home/fakeData/sideNav'

const ViewerCategory: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div style={{
            height: "20px",
            borderRadius: "10px",
            padding: "0 5px",
            backgroundColor: "#373737",
            display: "flex",
            alignItems: "center",
            marginLeft: "5px"
        }}>
            <h4 style={{ fontFamily: "Poppins", fontSize: "10px", color: "grey" }}>{name}</h4>
        </div>
    )
}

const NavigateViewers: React.FC = () => {
    return (
        <div style={{
            width: "calc(100% - 30px)",
            height: "40px",
            borderRadius: "5px",
            backgroundColor: "#18181B",
            display: "flex",
            alignItems: "center",
            overflowX: "scroll"
        }} className="main-content-div">
            <ViewerCategory name="subscriber" />
            <ViewerCategory name="patron" />
            <ViewerCategory name="streaker" />
        </div>
    )
}

const UserElement: React.FC<{
    viewer: {
        photo: string;
        name: string;
        domain: string;
        type: string;
    }
}> = ({ viewer }) => {
    return (
        <>
            <div style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#363639",
                marginTop: "10px"
            }}>

            </div>
            <div style={{
                width: "100%",
                height: "50px",
                marginTop: "10px",
                display: "flex",
                alignItems: "center"
            }}>
                <img
                    src={viewer.photo}
                    alt="viewer-type"
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        objectFit: "cover"
                    }}
                />
                <div style={{
                    marginLeft: "10px"
                }}>
                    <h4 style={{
                        fontFamily: "sans-serif",
                        color: "silver",
                        lineHeight: "0",
                        fontSize: "15px"
                    }}>
                        {viewer.name}
                    </h4>
                    <h4 style={{
                        fontFamily: "sans-serif",
                        color: "grey",
                        lineHeight: "0",
                        fontSize: "10px",
                        position: "relative",
                        bottom: "5px"
                    }}>
                        {viewer.domain}
                    </h4>
                </div>
            </div>
        </>
    )
}

export const Viewers: React.FC = () => {
    return (
        <div style={{
            width: "calc(100% - 350px)",
            height: "calc(100% - 50px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <NavigateViewers />
            <div style={{
                width: "calc(100% - 30px)",
                height: "calc(100% - 40px)",
                overflowY: "scroll"
            }}
                className="main-content-div">
                {
                    creators.map(viewer => {
                        return (
                            <UserElement viewer={viewer} />
                        )
                    })
                }
                <div style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#363639",
                    marginTop: "10px"
                }}>

                </div>
            </div>
        </div>
    )
}