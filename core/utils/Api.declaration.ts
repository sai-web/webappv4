import axios from 'axios'

type APIConfigOptions = {
    overridePath?: boolean,
    headers?: Record<string, any>
}

export class API {
    public base: string
    public path: string

    private defaultRequestConfig: APIConfigOptions = {
        overridePath: false
    }
    constructor(
        baseURL: string,
        subPath: string
    ) {
        this.base = baseURL
        this.path = subPath
    }

    public async get(
        endpoint: string,
        options: APIConfigOptions = this.defaultRequestConfig,
        data?: Record<string, any>
    ): Promise<any> {
        const fullURL: string = this.base + '/' + (options.overridePath ? '' : this.path + '/') + endpoint
        return await axios.get(fullURL, { withCredentials: true, data })
            .then(data => (data.data))
            .catch(err => (err.response))
    }

    public async post(
        endpoint: string,
        payload: Record<string, any> = {},
        options: APIConfigOptions = this.defaultRequestConfig
    ): Promise<any> {
        const fullURL: string = this.base + '/' + (options.overridePath ? '' : this.path + '/') + endpoint
        return await axios.post(
            fullURL,
            payload,
            { withCredentials: true, ...options }
        )
            .then(data => {
                return data.data
            })
            .catch(err => (err.response))
    }
}