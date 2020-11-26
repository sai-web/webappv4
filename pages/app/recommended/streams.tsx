import React from 'react'
import { motion } from 'framer-motion'

import { streams } from '../../../components/home/fakeData/esports'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'
import { Filters } from '../../../components/home/recommended/filter'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Subscriptions" page="Recommended" url="/app/" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Trending" page="Recommended" url="/app/trending" logo={<span className="material-icons" style={{ fontSize: "15px" }}>local_fire_department</span>} />
            <PageModes name="Recommended" page="Recommended" url="/app/recommended/streams" logo={<span className="material-icons" style={{ fontSize: "15px" }}>layers</span>} />
        </>
    )
}

function RecommendedContent() {
    return (
        <Template PageMode={<Pages />} width="320px" page="home" >
            <div style={{
                width: "100%",
                height: "35px",
                // backgroundColor: "#1a1a1a",
                display: "flex",
                alignItems: "center"
            }}>
                <Filters name="streams" />
                <Filters name="clips" />
                <Filters name="tracks" />
                <Filters name="albumns" />
            </div>
            <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "40px", lineHeight: "0", marginLeft: "20px" }}>Streams for you</h4>
            <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "5px" }}>
                {
                    streams.map((stream, index) => {
                        return (
                            <div key={index} style={{ margin: "10px 5px" }}>
                                <motion.img
                                    src={stream.thumbnail}
                                    alt="recommended-stream"
                                    initial={{
                                        scale: 0.9
                                    }}
                                    animate={{
                                        scale: 1
                                    }}
                                    whileTap={{
                                        scale: 0.9
                                    }}
                                    transition={{
                                        type: "spring",
                                        bounce: 0.35
                                    }}
                                    style={{
                                        width: "200px",
                                        height: "100px",
                                        objectFit: "cover",
                                        cursor: "pointer"
                                    }}
                                />
                                <h4 style={{
                                    fontFamily: "Roboto Condensed",
                                    color: "white",
                                    fontSize: "15px",
                                    lineHeight: "0"
                                }}>
                                    {stream.title.length > 30 ? stream.title.slice(0, 30) + '...' : stream.title}
                                </h4>
                            </div>
                        )
                    })
                }
            </div>
        </Template>
    )
}

export default RecommendedContent