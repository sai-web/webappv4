import React, { useEffect, useState } from 'react'
import { core } from '../../../core'

import { PageModes } from '../../../components/nav/top/components/pageMode'
import Template from '../../../components/app/template'

import { WatchLater } from '../../../components/fav/library/watch_later'
import { PlayList } from '../../../components/fav/library/playlists'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes
                name="Creators"
                page="Library"
                url="/app/fav/favourite"
                logo={
                    <span className="material-icons"
                        style={{ fontSize: "12px" }}
                    >
                        person
                    </span>
                }
            />
            <PageModes
                name="Library"
                page="Library"
                url="/app/fav/library"
                logo={
                    <span className="material-icons"
                        style={{ fontSize: "12px" }}
                    >
                        archive
                    </span>
                }
            />
        </>
    )
}

function Library() {
    return (
        <Template PageMode={<Pages />} width="200px" page="Favourite" >
            <div style={{
                width: "100%",
                height: "100%",
                // backgroundColor: "green"
            }}>
                <WatchLater />
                <hr
                    color="#1F1F23"
                    style={{
                        width: "calc(100% - 100px)",
                        marginTop: "10px"
                    }}
                />
                <PlayList />
            </div>
        </Template>
    )
}

export default Library