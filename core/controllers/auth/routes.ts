import { auth_api as Api } from '../../api'

//return a json object with _csrf prop
async function csrf() {
    return await Api.get('csrf')
}

//pass in information and login within 24hrs to prevent account deletion
async function register(payload: { username: string, password: string, email: string }) {
    return await Api.post('register', payload)
}

async function login(payload: { username: string, password: string, device_name: string }, emailToken?: string) {
    if (emailToken) {
        return await Api.post(`login?token=${emailToken}`, payload, { overridePath: false })
    } else {
        return await Api.post('login', payload, { overridePath: false })
    }
}

async function sendResetPasscodeLink(email: string) {
    return await Api.post('advance/reset-passcode', { email })
}

async function resetPasscode(password: string, token: string) {
    return await Api.post(`advance/reset-passcode?token=${token}`, { password })
}

//if valid refresh token is provided it sets the tokens in the cookies
async function refresh() {
    return await Api.get('refresh')
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
    verifyTotp,
    sendResetPasscodeLink,
    resetPasscode
}