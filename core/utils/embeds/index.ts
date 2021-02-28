import { platforms } from '../platforms'
import { Spotify } from './spotify'
import { Youtube } from './youtube'

interface PlatformProps {
    url: string
    thumbnail?: string
}

const mapPlatformToClass: Record<string, any> = {
    "spotify": (url: string, thumbnail?: string) => new Spotify(url).getEmbed(),
    "youtube": (url: string, thumbnail?: string) => new Youtube(url, thumbnail).getEmbed()
}

export class Embed {
    private _platform: string
    private _url: string
    private _thumbnail?: string

    constructor({ url, thumbnail }: PlatformProps) {
        this._url = url
        this._thumbnail = thumbnail
        this._platform = Object.values(platforms).filter(platform => {
            return platform.urlMatch.test(this._url)
        })[0]?.key
        // console.log(url)
    }

    get embed() {
        return mapPlatformToClass[this._platform]?.(this._url, this._thumbnail)
    }
}