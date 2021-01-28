import { auth_api as Api } from '../../api'
import axios from 'axios'

import { Error } from './events'
import { LoginError } from '../../Errors/loginError'

//return a json object with _csrf prop
async function csrf(access_token: string) {
    return (await Api.post('auth/crsf', { access_token })).data
}

//pass in information and login within 24hrs to prevent account deletion
async function register(payload: { username: string, password: string, email: string }) {
    return await axios.post('http://localhost:5001/auth/register', payload)
        .then(data => (data.data))
        .catch(err => (err.response))
}

async function login(payload: { username: string, password: string, device_name: string }, emailToken?: string) {
    if (emailToken) {
        return await axios.post(`http://localhost:5001/auth/login?token=${emailToken}`, payload)
            .then(data => (data.data))
            .catch(err => (err.response))
    } else {
        return await axios.post('http://localhost:5001/auth/login', payload)
            .then(data => (data.data))
            .catch(err => (err.response))
    }
}

//if valid refresh token is provided it sets the tokens in the cookies
async function refresh() {
    return (await Api.post('refresh')).data
}

//retrieve totp secret and otpauth_url
async function totp() {
    return (await Api.get('totp')).data
}

//provide a token and return an object with verified<boolean>
async function verifyTotp(payload: { secret: string, token: number }) {
    return (await Api.post('totp/verify', payload)).data
}

export default {
    csrf,
    register,
    login,
    refresh,
    totp,
    verifyTotp
}