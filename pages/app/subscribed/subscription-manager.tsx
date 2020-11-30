import React, { useState } from 'react'

import { creators } from '../../../components/home/fakeData/sideNav'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import { ChannelCategory } from '../../../components/subscription-manager/categories'
import { categories } from '../../../components/subscription-manager/fakeData'
import Template from '../../../components/app/template'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="creators" page="creators" url="/app/subscribed/subscription-manager" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="viewers" page="creators" url="/app/subscribed/viewers" logo={<span className="material-icons" style={{ fontSize: "15px" }}>local_fire_department</span>} />
        </>
    )
}

function SubscriptionManager() {
    const [allCreators, setAllCreators] = useState(creators)
    return (
        <Template PageMode={<Pages />} width="180px" page="Subscription Manager" >
            <div style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "100%"
            }}>
                {
                    categories.map((category, index) => {
                        const channels = allCreators.filter((channel, index) => {
                            return channel.type === category.type
                        })
                        return (
                            <ChannelCategory category={category} channelArr={channels} changeCreatorstate={setAllCreators} key={index} />
                        )
                    })
                }
            </div>
        </Template>
    )
}

export default SubscriptionManager