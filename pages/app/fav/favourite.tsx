import React from 'react'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'

const Pages: React.FC = () => {
    return (
        <></>
    )
}

function Favourites() {
    return (
        <Template PageMode={<Pages />} width="320px" page="Favourite" >
            <div style={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h4 style={{
                    fontFamily: "sans-serif",
                    color: "silver",
                    fontSize: "20px",
                    lineHeight: "0"
                }}>
                    Realtime API will come out soon.
                </h4>
                <h4 style={{
                    fontFamily: "sans-serif",
                    color: "grey",
                    fontSize: "15px",
                    lineHeight: "0"
                }}>
                    This feature will be available then.
                </h4>
            </div>
        </Template>
    )
}

export default Favourites