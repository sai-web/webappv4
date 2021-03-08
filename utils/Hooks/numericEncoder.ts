export function convertNumericTypeToPresentableString(value: number) {
    if (value > 1000000000) {
        const valueDivBillion = (value / 1000000000)
        if (valueDivBillion - Math.floor(valueDivBillion) < 0.1) return valueDivBillion.toFixed(0) + 'B'
        return valueDivBillion.toFixed(1) + 'B'
    }
    else if (value > 1000000) {
        const valueDivMillion = (value / 1000000)
        if (valueDivMillion - Math.floor(valueDivMillion) < 0.1) return valueDivMillion.toFixed(0) + 'M'
        return valueDivMillion.toFixed(1) + 'M'
    }
    else if (value > 1000) {
        const valueDivThousand = (value / 1000)
        if (valueDivThousand - Math.floor(valueDivThousand) < 0.1) return valueDivThousand.toFixed(0) + 'K'
        return valueDivThousand.toFixed(1) + 'K'
    }
    else return String(value)
}

export function convertPublicationDateToPresentableString(started_at: Date, date = new Date()) {
    started_at.setHours(started_at.getHours() - 4)
    const [min1, min2] = [Math.floor(started_at.getTime() / 60000), Math.floor(date.getTime() / 60000)]
    const minutes = (min2 - min1)
    if (minutes < 1) return "now"
    else if (minutes < 60) return `${minutes} minutes ago`
    else {
        const hours = Math.floor(minutes / 60)
        if (hours < 24) return `${hours} hours ago`
        else {
            const days = Math.floor(hours / 24)
            if (days < 30) return `${days} days ago`
            else {
                const months = Math.floor(days / 30)
                if (months < 12) return `${months} months ago`
                else {
                    const years = Math.floor(months / 12)
                    return `${years} years ago`
                }
            }
        }
    }
}

export function compileAvgPublishTime(vods: any[]) {
    let date = new Date()
    date.setDate(date.getDate() - 7)
    let counter = 0
    vods.forEach(vod => {
        var vodDate = new Date(vod.published_at.replace('T', ' ').replace('Z', ' '))
        if (vodDate.getTime() > date.getTime()) counter += 1
    })
    return counter
}