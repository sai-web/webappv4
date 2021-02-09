import { App } from './app';
import { API } from './utils/Api.declaration'

import authStates from './controllers/auth/states'

export const auth_api = new API('http://localhost:5001', 'auth');

export const rest_api = new API('http://localhost:5002', 'app');

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