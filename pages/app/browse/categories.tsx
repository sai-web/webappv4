import React, { useState } from 'react'

import { categories } from '../../../components/home/fakeData/browse'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import { Filter } from '../../../components/home/browse/filter'
import { AllCategories } from '../../../components/home/browse/categoriesRender'
import Template from '../../../components/app/template'

const Pages: React.FC<{ PageArr: Array<boolean>, setPageMode: React.Dispatch<React.SetStateAction<Array<boolean>>> }> = ({ PageArr, setPageMode }: { PageArr: Array<boolean>, setPageMode: React.Dispatch<React.SetStateAction<Array<boolean>>> }) => {
    return (
        <>
            <PageModes name="Categories" page="Categories" logo={<span className="material-icons" style={{ fontSize: "12px" }}>bookmark</span>} />
            <PageModes name="Creators" page="Categories" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
        </>
    )
}

function Browse() {
    const [Modes, setPageMode] = useState<Array<boolean>>([false, false])
    const [renderCategory, setRenderCategory] = useState(categories)
    return (
        <Template PageMode={<Pages PageArr={Modes} setPageMode={setPageMode} />} width="180px" page="Browse" >
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