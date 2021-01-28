import routes from './routes'
import states from './states'
import { Error } from './events'

import userStates from '../user/states'

//funciton to handle the csrf tokens
function csrf(access_token: string) {
    routes.csrf(access_token)
        .then(data => {
            states.csrf_token.set(data._csrf)
        })
}

//login function that sets the user states
function login(payload: { username: string, password: string, device_name: string }, emailToken?: string) {
    return routes.login(payload, emailToken)
        .then(data => {
            if (data.status === 400) Error.emit({ type: "Email Verification", message: "we couldn't authenticate you as your email wasn't verified." })
            else if (data.status === 404) Error.emit({ type: "Authentication Error", message: "we were not able to authenticate you." })
            else {
                delete data.status
                delete data.type
                states.loggedIn.set(true)
                states.emailVerification.set(true)
                userStates.user.set(data)
                return true
            }
            return false
        })
        .catch(() => {
            Error.emit({ type: "Invalid Behaviour", message: "please report this issue as soon as possible." })
            return false
        })
}

//register function which requires login within 24hrs
function register(payload: { username: string, password: string, email: string }) {
    routes.register(payload)
        .then(data => {
            if (data.status === 400) Error.emit({ type: "Registration Error", message: "we were not able to register this account. This may have been due to invalid format in providing the credentials." })
            else {
                delete data.data.status
                delete data.data.type
                userStates.user.set(data.data)
            }
        })
}

//the refresh token will automatically be extracted from the cookie storage so no need to pass them explicitly
function refreshAccessToken() {
    routes.refresh()
}

//set the totp secret and auth url
function totp() {
    routes.totp()
        .then(data => {
            states.otp_secret.set(data.secret)
            states.otp_url.set(data.otpauth_url)
        })
}

//returns a boolean 
async function verifyTotp(token: number) {
    return (await routes.verifyTotp({ secret: states.otp_secret.value, token })).data.verified
}

export default {
    csrf,
    login,
    register,
    refreshAccessToken,
    totp,
    verifyTotp
}