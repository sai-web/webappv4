import React from 'react'

export const AboutChannel: React.FC = () => {
    return (
        <div style={{
            width: "100%",
            paddingLeft: "10px",
            marginTop: "70px",
            position: "sticky",
            top: "110px",
            scrollSnapAlign: "start"
        }}>
            <h4 style={{ fontFamily: "Poppins", fontSize: "15px", color: "grey", lineHeight: "0" }}>About Channel</h4>
            <h4 style={{
                fontFamily: "Poppins",
                fontWeight: "lighter",
                color: "silver",
                fontSize: "13px"
            }}>
                I'm a pretty average dude with no expertise in anything, but I'm okay with it as I feel that I took a glimpse of everything.
                There are many things I've tried over the year 2020. This is when I got to know the most of myself. I've got to experiment with
                millions of new things which I feel have made me the person I am today. This is my story as the guy who learnt everything from
                the internet.
            </h4>
        </div>
    )
}