import React, { useState } from 'react'

import { PageModes } from '../../components/nav/top/components/pageMode'
import Template from '../../components/app/template'

import Carousel from '../../components/home/carousel'
import Content from '../../components/home/mainContent'

import { CarouselData, mainContentData } from '../../components/home/fakeData/home'

const Pages: React.FC<{ PageArr: Array<boolean>, setPageMode: React.Dispatch<React.SetStateAction<Array<boolean>>> }> = ({ PageArr, setPageMode }: { PageArr: Array<boolean>, setPageMode: React.Dispatch<React.SetStateAction<Array<boolean>>> }) => {
    return (
        <>
            <PageModes name="Subscriptions" page="Subscriptions" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Youtube" page="Subscriptions" logo={<i className="fa fa-youtube-play" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Twitch" page="Subscriptions" logo={<i className="fa fa-twitch" style={{ fontSize: "10px" }}></i>} />
        </>
    )
}

function ViberHome() {
    const [Modes, setPageMode] = useState<Array<boolean>>([false, false, false])
    return (
        <Template PageMode={<Pages PageArr={Modes} setPageMode={setPageMode} />} width="250px" page="home" >
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