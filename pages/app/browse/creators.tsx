import React from 'react'

import { Overlay } from '../../../components/home/browse/creators/overlay'
import { Filter } from '../../../components/home/browse/creators/filter'
import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Creators" page="Creators" url="/app/browse/creators" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Categories" page="Creators" url="/app/browse/categories" logo={<span className="material-icons" style={{ fontSize: "12px" }}>bookmark</span>} />
        </>
    )
}

function Creators() {
    return (
        <Template PageMode={<Pages />} width="180px" page="Browse" >
            <Overlay />
            <Filter />
        </Template>
    )
}

export default Creators