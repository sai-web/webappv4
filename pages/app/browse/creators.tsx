import React from 'react'

import { Overlay } from '../../../components/home/browse/creators/overlay'
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
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px"
            }}>
                <input
                    type="text"
                    placeholder="Search"
                    style={{
                        width: "500px",
                        height: "30px",
                        borderRadius: "5px",
                        borderWidth: "0",
                        paddingLeft: "10px",
                        backgroundColor: "#464649",
                        color: "white",
                        outline: "none"
                    }}
                />
            </div>
        </Template>
    )
}

export default Creators