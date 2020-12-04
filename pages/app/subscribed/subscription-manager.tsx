import React, { useState } from 'react'

import { creators } from '../../../components/home/fakeData/sideNav'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import { ChannelCategory } from '../../../components/subscription-manager/categories'
import { Settings } from '../../../components/subscription-manager/settings/'
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
    const [allCategories, setCategories] = useState(categories)
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
                width: "100%",
                height: "100%",
                display: "flex"
            }}>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "calc(100% - 220px)",
                    height: "100%",
                    overflowX: "scroll"
                }} className="main-content-div">
                    {
                        // Object.entries(curatedChannels).map(([group, channels], index) => {
                        //     var category = categories.find(category => (category.type === group))
                        //     return (
                        //         <ChannelCategory category={category!} channelArr={channels} changeCreatorstate={setAllCreators} GlobalArray={allCreators} key={index} />
                        //     )
                        // })
                        allCategories.map((category, index) => {
                            const channels = allCreators.filter(creator => {
                                return creator.type === category.type
                            })
                            return (
                                <ChannelCategory
                                    category={category!}
                                    channelArr={channels}
                                    changeCreatorstate={setAllCreators}
                                    changeCategoryOrder={setCategories}
                                    GlobalArray={allCreators}
                                    position={index}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
                <Settings />
            </div>
        </Template>
    )
}

export default SubscriptionManager