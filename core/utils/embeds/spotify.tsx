import React from 'react'

enum content_types {
    album = "album",
    track = "track",
    artist = "artist",
    playlist = "playlist",
    podcastShow = "show",
    podcastEp = "episode"
}

type EmbedDetails = {
    src: string,
    width: number | string,
    height: number | string,
    style?: any
}

export class Spotify {
    private _url: string
    public content_type: content_types | void
    private _id: string
    constructor(url: string) {
        this._url = url
        this.content_type = this._deduceContentType()
        this._id = this._extract_id(this.content_type)
    }

    private _deduceContentType(): content_types | void {
        if (this._url.includes('/album/')) return content_types.album
        else if (this._url.includes('/track/')) return content_types.track
        else if (this._url.includes('/artist/')) return content_types.artist
        else if (this._url.includes('/playlist/')) return content_types.playlist
        else if (this._url.includes('/show/')) return content_types.podcastShow
        else if (this._url.includes('/episode/')) return content_types.podcastEp
    }

    private _extract_id(type: string | void = ""): string {
        return (this._url.replace("https://open.spotify.com/" + type + "/", "") as string).split('?')[0]
    }

    private _getEmbedDetails(): EmbedDetails {
        if (this.content_type === content_types.album) {
            return ({
                src: "https://open.spotify.com/embed/album/" + this._id,
                width: "100%",
                height: 380
            })
        } else if (this.content_type === content_types.track) {
            return ({
                src: "https://open.spotify.com/embed/track/" + this._id,
                width: "100%",
                height: 380
            })
        } else if (this.content_type === content_types.playlist) {
            return ({
                src: "https://open.spotify.com/embed/playlist/" + this._id,
                width: "100%",
                height: 380
            })
        } else if (this.content_type === content_types.podcastShow) {
            return ({
                src: "https://open.spotify.com/embed-podcast/show/" + this._id,
                width: "90%",
                height: 250,
                style: {
                    marginTop: "20px"
                }
            })
        } else if (this.content_type === content_types.podcastEp) {
            return ({
                src: "https://open.spotify.com/embed-podcast/episode/" + this._id,
                width: "90%",
                height: 250,
                style: {
                    marginTop: "20px"
                }
            })
        } else if (this.content_type === content_types.artist) {
            return ({
                src: "https://open.spotify.com/embed/artist/" + this._id,
                width: "100%",
                height: 380
            })
        }
        return {
            src: "unidentified spotify source",
            width: 300,
            height: 380
        }
    }

    public getEmbed(): JSX.Element {
        const details: EmbedDetails = this._getEmbedDetails()
        return React.createElement('iframe', {
            ...details,
            frameBorder: "0",
            allowtransparency: "true",
            allow: "encrypted-media",
            className: "custom-embed-player"
        })
    }
}