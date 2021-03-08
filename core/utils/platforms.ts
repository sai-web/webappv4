type platform = {
    key: string,
    name: string,
    url: string,
    hex: string,
    wideThumb: boolean,
    urlMatch: RegExp,
    extract?: (link: string) => any,
    defaultTags: string[],
    parseHTML: (doc: Document) => any,
    logo?: string
}

export const platforms: Record<string, platform> = {
    discord: {
        key: 'discord',
        name: 'Discord',
        url: 'discord.gg',
        hex: '#7289da',
        wideThumb: false,
        urlMatch: /^(?:https?:\/\/)?(?:www\.)?(?:discord\.gg\/|discordapp\.com\/invite)(?:\S+)?$/,
        extract: (link: string) => (link.includes('discordapp.com/invite') ? link.split('discordapp.com/invite')[1].split('/')[1] : link.split('discord.gg/')[1].split('/')[0]),
        defaultTags: [
            'Gamming',
            'Just Chat'
        ],
        parseHTML: (doc: Document) => null,
    },
    dlive: {
        key: 'dlive',
        name: 'DLive',
        url: 'dlive.com',
        hex: '#ffd300',
        wideThumb: false,
        urlMatch: /http(?:s)?:\/\/(?:www\.)?dlive\.tv\/([a-zA-Z0-9_]+)/,
        extract: (link: string) => link.split('dlive.tv/')[1].split('/')[1],
        defaultTags: [

        ],
        parseHTML: (doc: Document) => null,
    },
    facebook: {
        key: 'facebook',
        name: 'Facebook',
        url: 'facebook.com',
        hex: '#4267b2',
        wideThumb: false,
        urlMatch: /http(?:s)?:\/\/(?:www\.)?facebook\.com\/([a-zA-Z0-9_]+)/,
        extract: undefined,
        defaultTags: [
            'Photos'
        ],
        parseHTML: (doc: Document) => null,
    },
    github: {
        key: 'github',
        name: 'Github',
        url: 'github.com',
        hex: '#24292e',
        wideThumb: true,
        urlMatch: /http(?:s)?:\/\/(?:www\.)?(?:gist\.)?github\.com\/([a-zA-Z0-9_]+)/,
        extract: undefined,
        defaultTags: [
            'Programming'
        ],
        parseHTML: (doc: Document) => null,
    }, instagram: {
        key: 'instagram',
        name: 'Instagram',
        url: 'instagram.com',
        hex: '#e33567',
        wideThumb: false,
        urlMatch: /http(?:s)?:\/\/(?:www\.)?instagram\.com\/([a-zA-Z0-9_]+)/,
        extract: undefined,
        defaultTags: [
            'Photos'
        ],
        parseHTML: (doc: Document) => null,
    }, patreon: {
        key: 'patreon',
        name: 'Patreon',
        url: 'patreon.com',
        hex: '#f96854',
        wideThumb: false,
        urlMatch: /http(?:s)?:\/\/(?:www\.)?patreon\.com\/([a-zA-Z0-9_]+)/,
        extract: undefined,
        defaultTags: [

        ],
        parseHTML: (doc: Document) => null,
    }, pinterest: {
        key: 'pinterest',
        name: 'Pinterest',
        url: 'pinterest.com',
        hex: '#cb2027',
        wideThumb: true,
        urlMatch: /http(?:s)?:\/\/(?:www\.)?pinterest\.com\/([a-zA-Z0-9_]+)/,
        extract: (link: string) => link.split('pinterest.com/')[1].split('/')[0],
        defaultTags: [
            'Art & Design'
        ],
        parseHTML: (doc: Document) => null,
    }, snapchat: {
        key: 'snapchat',
        name: 'snapchat',
        url: 'snapchat.com',
        hex: '#FFFC00',
        wideThumb: true,
        urlMatch: /http(?:s)?:\/\/(?:www\.)?snapchat\.com\/add\/([a-zA-Z0-9_]+)/,
        extract: (link: string) => link.split('snapchat.com/')[1].split('/')[0],
        defaultTags: [
            'Dubsmash'
        ],
        parseHTML: (doc: Document) => null,
    },
    soundcloud: {
        key: 'soundcloud',
        name: 'SoundCloud',
        url: 'soundcloud.com',
        hex: '#ff8800',
        wideThumb: false,
        urlMatch: /((https:\/\/)|(http:\/\/)|(www.)|(m\.)|(\s))+(soundcloud.com\/)+[a-zA-Z0-9\-\.]+(\/)+[a-zA-Z0-9\-\.]+/,
        extract: undefined,
        defaultTags: [
            'Music',
            'Podcast'
        ],
        parseHTML: (doc: Document) => null,
    },
    spotify: {
        key: 'spotify',
        name: 'Spotify',
        url: 'spotify.com',
        hex: '#1DB954',
        wideThumb: false,
        urlMatch: /http(?:s)?:\/\/(?:www\.)?open.spotify\.com\/([a-zA-Z0-9_]+)/,
        extract: undefined,
        defaultTags: [
            'Music',
            'Podcast'
        ],
        logo: "/spotify.png",
        parseHTML: (doc: Document) => ({
            title: doc.querySelectorAll("meta[property=\"og:title\"]")[0].attributes[1].value,
            thumbnail: doc.querySelectorAll("meta[property=\"og:image\"]")[0].attributes[1].value,
            logo: "/spotify.png"
        }),
    },
    twitch: {
        key: 'twitch',
        name: 'Twitch',
        url: 'twitch.tv',
        hex: '#6441A4',
        wideThumb: true,
        urlMatch: /http(?:s)?:\/\/(?:www\.)?twitch\.tv\/([a-zA-Z0-9_]+)/,
        extract: (link: string) => link.split('twitch.tv/')[1].split('/')[0],
        defaultTags: [
            'Streaming'
        ],
        parseHTML: (doc: Document) => null,
    },
    twitter: {
        key: 'twitter',
        name: 'Twitter',
        url: 'twitter.com',
        hex: '#00aced',
        wideThumb: false,
        urlMatch: /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/,
        extract: undefined,
        defaultTags: [
            'Tweet'
        ],
        parseHTML: (doc: Document) => null,
    }, youtube: {
        key: 'youtube',
        name: 'YouTube',
        url: 'youtube.com',
        hex: '#ff0000',
        wideThumb: true,
        urlMatch: /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
        extract: (link: string) => link.match(/^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/)!.filter(result => result.length === 11)[0],
        defaultTags: [
            'Vlog',
            'Commentary',
            'Just Chat'
        ],
        logo: "/youtube.jpg",
        parseHTML: (doc: Document) => ({
            title: doc.querySelectorAll("meta[property=\"og:title\"]")[0].attributes[1].value,
            thumbnail: doc.querySelectorAll("meta[property=\"og:image\"]")[0].attributes[1].value,
            logo: "/youtube.jpg"
        }),
    },
}