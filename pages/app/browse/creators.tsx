import React from 'react'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Categories" page="Creators" url="/app/browse/categories" logo={<span className="material-icons" style={{ fontSize: "12px" }}>bookmark</span>} />
            <PageModes name="Creators" page="Creators" url="/app/browse/creators" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
        </>
    )
}

function Creators() {
    return (
        <Template PageMode={<Pages />} width="180px" page="Browse" >
            <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "40px", lineHeight: "0", marginLeft: "50px" }}>Creators</h4>
        </Template>
    )
}

export default Creators