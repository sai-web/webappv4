import React from 'react'
import { motion } from 'framer-motion'

import { albums } from '../../../components/home/fakeData/music'

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
            <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "40px", lineHeight: "0", marginLeft: "20px" }}>Albumns for you</h4>
            <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "5px" }}>
                {
                    albums.map((albumn, index) => {
                        return (
                            <motion.div
                                className="spotify-tracks"
                                key={index}
                                initial={{
                                    scale: 0.9
                                }}
                                animate={{
                                    scale: 1
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    borderRadius: "10px"
                                }}
                                whileTap={{
                                    scale: 0.9
                                }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.35
                                }}
                                style={{ margin: "10px 5px", position: "relative", cursor: "pointer", overflow: "hidden" }}
                            >
                                <img
                                    src={albumn.thumbnail}
                                    alt="recommended-albumn"
                                    style={{
                                        width: "200px"
                                    }}
                                />
                                <div
                                    className="track-overlay"
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        backgroundColor: "rgba(0,0,0,0.5)",
                                        width: "100%",
                                        height: "100%",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <h4 style={{
                                        fontFamily: "Roboto Condensed",
                                        color: "white",
                                        fontSize: "15px",
                                        lineHeight: "0"
                                    }}>
                                        {albumn.title.length > 30 ? albumn.title.slice(0, 30) + '...' : albumn.title}
                                    </h4>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </Template>
    )
}

export default RecommendedContent