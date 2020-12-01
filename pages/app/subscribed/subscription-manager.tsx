import React, { useState, useMemo, useEffect } from 'react'

import { creators } from '../../../components/home/fakeData/sideNav'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import { ChannelCategory } from '../../../components/subscription-manager/categories'
import { categories } from '../../../components/subscription-manager/fakeData'
import Template from '../../../components/app/template'

// interface channel {
//     name: string;
//     photo: string;
//     domain: string;
//     type: string;
// }

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
    // const curatedChannels = useMemo(() => {
    //     const curatedCategories = categories.reduce((total: { [key: string]: channel[] }, category) => {
    //         total[category.type] = []
    //         return total
    //     }, {})

    //     creators.reduce((total, creator) => {
    //         total[creator.type]?.push(creator)
    //         return total
    //     }, curatedCategories)
    //     return { ...curatedCategories }
    // }, [allCreators])

    return (
        <Template PageMode={<Pages />} width="180px" page="Subscription Manager" >
            <div style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "100%"
            }}>
                {
                    // Object.entries(curatedChannels).map(([group, channels], index) => {
                    //     var category = categories.find(category => (category.type === group))
                    //     return (
                    //         <ChannelCategory category={category!} channelArr={channels} changeCreatorstate={setAllCreators} GlobalArray={allCreators} key={index} />
                    //     )
                    // })
                    categories.map((category, index) => {
                        const channels = allCreators.filter(creator => {
                            return creator.type === category.type
                        })
                        return (
                            <ChannelCategory category={category!} channelArr={channels} changeCreatorstate={setAllCreators} GlobalArray={allCreators} key={index} />
                        )
                    })
                }
            </div>
        </Template>
    )
}

export default SubscriptionManager