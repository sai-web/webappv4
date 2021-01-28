import { App } from './app';

export const auth_api = App.API({
    baseURL: 'https://localhost:5001',
    path: 'auth',
    options: {
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': 'localhost'
        },
        cache: "no-cache",
    },
    responseIntercept: (response: any) => {
        return response.json()
    }
});

export const rest_api = App.API({
    baseURL: 'https://localhost:5002',
    path: 'app',
    options: {
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': 'localhost'
        },
        cache: "default"
    },
    responseIntercept: (response: any) => {
        return response.json()
    }
});

export const integrations_api = App.API({
    baseURL: 'https://localhost:5003',
    options: {
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': 'localhost'
        },
        cache: "default"
    },
    responseIntercept: (response: any) => {
        return response.json()
    }
});