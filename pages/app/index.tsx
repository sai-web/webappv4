import React from 'react'

import Link from 'next/link'

import { PageModes } from '../../components/nav/top/components/pageMode'
import Template from '../../components/app/template'

import Carousel from '../../components/home/carousel'
import Content from '../../components/home/mainContent'

import { CarouselData, mainContentData } from '../../components/home/fakeData/home'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Subscriptions" page="Subscriptions" url="/app/" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Trending" page="Subscriptions" url="/app/trending" logo={<span className="material-icons" style={{ fontSize: "15px" }}>local_fire_department</span>} />
            <PageModes name="Recommended" page="Subscriptions" url="/app/recommended" logo={<span className="material-icons" style={{ fontSize: "15px" }}>layers</span>} />
        </>
    )
}

function ViberHome() {
    return (
        <Template PageMode={<Pages />} width="320px" page="home" >
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