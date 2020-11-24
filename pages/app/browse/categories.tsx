import React, { useState } from 'react'

import { categories } from '../../../components/home/fakeData/browse'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import { Filter } from '../../../components/home/browse/categories/filter'
import { AllCategories } from '../../../components/home/browse/categories/categoriesRender'
import Template from '../../../components/app/template'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Creators" page="Categories" url="/app/browse/creators" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Categories" page="Categories" url="/app/browse/categories" logo={<span className="material-icons" style={{ fontSize: "12px" }}>bookmark</span>} />
        </>
    )
}

function Browse() {
    const [renderCategory, setRenderCategory] = useState(categories)
    return (
        <Template PageMode={<Pages />} width="180px" page="Browse" >
            <div style={{
                width: "100%",
                height: "200px",
                position: "absolute",
                top: "0"
            }}>
                <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "40px", lineHeight: "0", marginLeft: "50px" }}>Browse</h4>
                <Filter setRenderCategory={setRenderCategory} categories={categories} />
            </div>
            <AllCategories renderCategory={renderCategory} />
        </Template>
    )
}

export default Browse