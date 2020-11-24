import React from 'react'
import { motion } from 'framer-motion'

import { clips, subClips } from '../../../components/home/fakeData/clips'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import { TopClips } from '../../../components/home/esports/clips/topClips'
import Template from '../../../components/app/template'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Live" page="Clips" url="/app/esports/live" logo={<i className="fa fa-bullseye" style={{ fontSize: "13px" }}></i>} />
            <PageModes name="Clips" page="Clips" url="/app/esports/clips" logo={<span className="material-icons" style={{ fontSize: "15px" }}>insert_link</span>} />
        </>
    )
}

function Clips() {
    return (
        <Template PageMode={<Pages />} width="150px" page="Esports" >
            <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "40px", lineHeight: "0", marginLeft: "50px" }}>Clips</h4>
            <TopClips clips={clips} />
            <h4 style={{ fontFamily: "sans-serif", color: "silver", fontSize: "30px", lineHeight: "0", margin: "70px 15px 10px" }}>Recommended</h4>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "50px",
                marginLeft: "10px"
            }}>
                {
                    subClips.map((clip, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    width: "200px",
                                    margin: "5px"
                                }}
                            >
                                <motion.img
                                    src={clip.thumbnail}
                                    alt="sub-clips"
                                    style={{
                                        width: "200px",
                                        cursor: "pointer"
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                />
                                <h4 style={{
                                    fontFamily: "Roboto Condensed",
                                    fontWeight: "lighter",
                                    color: "white",
                                    fontSize: "13px",
                                    position: "relative",
                                    bottom: "10px"
                                }}>
                                    {clip.title.length > 50 ? clip.title.slice(0, 50) + '...' : clip.title}
                                </h4>
                            </div>
                        )
                    })
                }
            </div>
        </Template>
    )
}

export default Clips