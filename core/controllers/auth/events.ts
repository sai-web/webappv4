import { App } from '../../app'

export const Error = App.Event<{ type: string, message: string }>({
    name: "Error"
})

export const Token = App.Event<{ token: string }>({
    name: "token must be refreshed"
})