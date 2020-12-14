import React from 'react'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Subscriptions" page="Trending" url="/app/" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Trending" page="Trending" url="/app/trending" logo={<span className="material-icons" style={{ fontSize: "15px" }}>local_fire_department</span>} />
            <PageModes name="Recommended" page="Trending" url="/app/recommended" logo={<span className="material-icons" style={{ fontSize: "15px" }}>layers</span>} />
        </>
    )
}

function Favourites() {
    return (
        <Template PageMode={<Pages />} width="320px" page="Favourite" >
            <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "40px", lineHeight: "0", marginLeft: "50px", position: "absolute" }}>Trending</h4>
        </Template>
    )
}

export default Favourites