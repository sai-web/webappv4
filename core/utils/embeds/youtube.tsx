import React from 'react'

enum content_types {
    content = "content",
    channel = "channel"
}

type EmbedDetails = {
    src: string,
    width: number | string,
    height: number | string,
    style?: any
}

export class Youtube {
    private _url: string
    public content_type: content_types | void
    private _id: string
    public thumbnail?: string
    constructor(url: string, thumbnail?: string) {
        this._url = url
        this.thumbnail = thumbnail
        this.content_type = this._deduceContentType()
        this._id = this._extract_id(this.content_type)
    }

    private _deduceContentType(): content_types | void {
        if (this._url.includes('/watch')) return content_types.content
        else if (this._url.includes('/c/') || this._url.includes('/channel/')) return content_types.channel
    }

    private _extract_id(type: string | void = ""): string {
        if (type === content_types.channel) {
            return (this._url.replace("https://www.youtube.com/channel/", "") as string)
                .replace("https://www.youtube.com/c/", "")
                .split('&')[0]
        }
        else return (this._url.replace("https://www.youtube.com/watch?v=", "") as string).split('&')[0]
    }

    private _getEmbedDetails(): EmbedDetails {
        if (this.content_type === content_types.content) {
            return (
                {
                    src: "https://www.youtube.com/embed/" + this._id,
                    width: 424,
                    height: 238,
                    style: {
                        marginTop: "20px"
                    }
                }
            )
        } else {
            return (
                {
                    src: "unidentified source",
                    width: 0,
                    height: 0
                }
            )
        }
    }

    public getEmbed(): JSX.Element {
        const details: EmbedDetails = this._getEmbedDetails()
        if (this.content_type === content_types.content) return React.createElement('iframe', {
            ...details,
            frameBorder: "0",
            allowtransparency: "true",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            className: "custom-embed-player"
        })
        return (
            <script
                src={`http://www.gmodules.com/ig/ifr?url=http://www.google.com/ig/modules/youtube.xml&amp;up_channel=${this._id}&amp;synd=open&amp;w=320&amp;h=390&amp;title=&amp;border=%23ffffff%7C3px%2C1px+solid+%23999999&amp;output=js`}
            >

            </script>
        )
    }
}