import React, { useState } from 'react'

import { PageModes } from '../../components/nav/top/components'
import Template from '../../components/app/template'

import Carousel from '../../components/home/carousel'
import Content from '../../components/home/mainContent'

import { CarouselData, mainContentData } from '../../components/home/fakeData'

const Pages: React.FC<{ PageArr: Array<boolean>, setPageMode: React.Dispatch<React.SetStateAction<Array<boolean>>> }> = ({ PageArr, setPageMode }: { PageArr: Array<boolean>, setPageMode: React.Dispatch<React.SetStateAction<Array<boolean>>> }) => {
    return (
        <>
            <PageModes name="Channel" color={PageArr[0] ? "grey" : undefined} setPageModes={setPageMode} pos={0} logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Community" color={PageArr[1] ? "grey" : undefined} setPageModes={setPageMode} pos={1} logo={<i className="fa fa-users" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Content" color={PageArr[2] ? "grey" : undefined} setPageModes={setPageMode} pos={2} logo={<span className="material-icons" style={{ fontSize: "12px" }}>bookmark</span>} />
        </>
    )
}

function ViberHome() {
    const [Modes, setPageMode] = useState<Array<boolean>>([false, false, false])
    return (
        <Template PageMode={<Pages PageArr={Modes} setPageMode={setPageMode} />} width="250px" >
            <div style={{
                width: "100%",
                height: "300px",
                overflowX: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Carousel Data={CarouselData} />
            </div>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "30px"
            }}>
                <Content mainContentData={mainContentData} />
            </div>
        </Template>
    )
}

export default ViberHome