import React, { useEffect, useState } from "react"
import Router from 'next/router'

import { ContentMenu } from '../menu/content'
import { ConnectionMenu } from '../menu/connections'
import { ContentPreviewOptions } from '../user/accessories/content.preview/ContentPreview'
import { ChannelPreview } from '../user/channel/channelPreview'
import { ChannelSettingsDropDownMenu } from '../menu/channelSettingsDropDown'
import { SelectPlaylistMenu } from '../menu/selectPlaylistMenu'
import { ContextMenu } from '../menu/contextMenu'
import { UploadSection } from './upload'
import { showMenuType, contentPreviewDetails } from './template'

interface PopUpProps {
    showMenu: showMenuType,
    position: {
        x: number;
        y: number;
        width: number;
        height: number;
    },
    references: React.MutableRefObject<any>[],
    contentPreviewDetails: contentPreviewDetails
}

enum pages {
    channel
}

export const PopUpMenus: React.FC<PopUpProps> = ({
    showMenu,
    position,
    references,
    contentPreviewDetails
}) => {
    const [page, setPage] = useState<pages>()
    useEffect(() => {
        if (Router.pathname.includes('/channel/')) setPage(pages.channel)
    }, [Router])
    // useEffect(() => console.log('rendered popup menus'))
    return (
        <>
            <ContentMenu
                display={showMenu.ContentMenu.display}
                position={position}
                reference={references[0]}
            />
            {
                page === pages.channel ?
                    <ConnectionMenu
                        display={showMenu.ConnectionMenu.display}
                        domain={showMenu.ConnectionMenu.domain}
                        color={showMenu.ConnectionMenu.color}
                        position={position}
                        reference={references[1]}
                    /> : ""
            }
            <ContextMenu
                display={showMenu.ContextMenu.display}
                position={showMenu.ContextMenu.position}
                reference={references[4]}
            />
            <ContentPreviewOptions
                display={contentPreviewDetails.show}
                reference={references[2]}
            />
            <ChannelPreview
                display={showMenu.Profile}
                position={position}
            />
            <ChannelSettingsDropDownMenu
                display={showMenu.ChannelDropDown}
            />
            <UploadSection
                display={showMenu.ShareLinkComponent}
                reference={references[3]}
            />
            <SelectPlaylistMenu
                display={showMenu.SelectPlaylistMenu.display}
                reference={references[5]}
                position={showMenu.SelectPlaylistMenu.position}
            />
        </>
    )
}