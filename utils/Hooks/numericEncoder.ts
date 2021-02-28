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

export function convertPublicationDateToPresentableString(started_at: string, date = new Date()) {
    const passedDate = started_at.split('-')
    const passedTime = started_at.split('T')[1]
    const [year, month, day, hours, minutes] = [
        eval(passedDate[0]),
        eval(passedDate[1].charAt(0) === "0" ? passedDate[1].charAt(1) : passedDate[1]),
        eval(passedDate[2].slice(0, 2).charAt(0) === "0" ? passedDate[2].slice(0, 2).charAt(1) : passedDate[2].slice(0, 2)),
        eval(passedTime.split(':')[0].charAt(0) === "0" ? passedTime.split(':')[0].charAt(1) : passedTime.split(':')[0]),
        eval(passedTime.split(':')[1].charAt(0) === "0" ? passedTime.split(':')[1].charAt(1) : passedTime.split(':')[1])
    ]
    // console.log(year, month, day, hours, minutes)
    if (year === eval(date.getFullYear().toString())) {
        if (month === eval((date.getMonth() + 1).toString())) {
            if (day === eval(date.getDate().toString())) {
                if (hours === eval(date.getHours().toString())) {
                    if (minutes === eval(date.getMinutes().toString())) return "now"
                    else return String(eval(date.getMinutes().toString()) - minutes) + (eval(date.getMinutes().toString()) - minutes === 1 ? ' minute ago' : " minutes ago")
                } else return String(eval(date.getHours().toString()) - hours) + (eval(date.getHours().toString()) - hours === 1 ? ' hour ago' : ' hours ago')
            } else {
                var dif = eval(date.getDate().toString()) - day
                if (dif % 7 === 0) return String(dif / 7) + ' weeks ago'
                else return String(dif) + (dif === 1 ? " day ago" : ' days ago')
            }
        } else return String(eval((date.getMonth() + 1).toString()) - month) + (eval(date.getMonth().toString() + 1) - month === 1 ? ' month ago' : " months ago")
    } else return String(eval(date.getFullYear().toString()) - year) + (eval(date.getFullYear().toString()) - year === 1 ? ' year ago' : " years ago")
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