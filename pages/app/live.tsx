import React, { useState } from 'react'

import { PageModes } from '../../components/nav/top/components'
import Template from '../../components/app/template'

const Pages: React.FC<{ PageArr: Array<boolean>, setPageMode: React.Dispatch<React.SetStateAction<Array<boolean>>> }> = ({ PageArr, setPageMode }: { PageArr: Array<boolean>, setPageMode: React.Dispatch<React.SetStateAction<Array<boolean>>> }) => {
    return (
        <>
            <PageModes name="Subscriptions" color={PageArr[0] ? "grey" : undefined} setPageModes={setPageMode} pos={0} logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Youtube" color={PageArr[1] ? "grey" : undefined} setPageModes={setPageMode} pos={1} logo={<i className="fa fa-youtube-play" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Twitch" color={PageArr[2] ? "grey" : undefined} setPageModes={setPageMode} pos={2} logo={<i className="fa fa-twitch" style={{ fontSize: "10px" }}></i>} />
        </>
    )
}

function Live() {
    const [Modes, setPageMode] = useState<Array<boolean>>([false, false, false])
    return (
        <Template PageMode={<Pages PageArr={Modes} setPageMode={setPageMode} />} width="250px" >
            <div style={{
                width: "100%",
                height: "200px",
                position: "absolute",
                top: "0"
            }}>
                <h4 style={{ fontFamily: "Poppins", color: "white", fontSize: "40px", lineHeight: "0", marginLeft: "50px" }}>Live</h4>
            </div>
        </Template>
    )
}

export default Live