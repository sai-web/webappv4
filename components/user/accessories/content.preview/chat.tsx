import React from 'react'
import { InputArea } from '../../channel/accessories'

export const ChatSection: React.FC = () => {
    return (
        <div style={{
            backgroundColor: "#1F1F23",
            width: "250px",
            height: "100%",
            position: "absolute",
            right: "0"
        }}>
            <div style={{
                // backgroundColor: "red",
                height: "50px",
                width: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgb(36, 36, 41)"
            }}>
                <img src="https://www.decentfashion.in/wp-content/uploads/2018/02/Cool-cool-profile-pictures-300x244.jpg"
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "15px",
                        objectFit: "cover",
                        marginLeft: "10px"
                    }}
                />
                <h4 style={{
                    fontFamily: "Whitney",
                    color: "silver",
                    fontSize: "20px",
                    lineHeight: "0",
                    marginLeft: "10px"
                }}>
                    AR
                </h4>
                <h4 style={{
                    fontFamily: "Poppins",
                    color: "grey",
                    fontSize: "15px",
                    lineHeight: "0",
                    // position: "relative",
                    // bottom: "20px"
                }}>
                    /ar
                </h4>
            </div>
            <div style={{
                // backgroundColor: "black",
                width: "calc(100% - 10px)",
                height: "calc(100% - 90px)",
                position: "absolute",
                top: "50px",
                right: "5px"
            }}>

            </div>
            <InputArea
                cols={28}
                rows={1}
                size={15}
                placeholder="write a comment..."
            />
        </div>
    )
}