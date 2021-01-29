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
            if (data.status === 400) Error.emit({ type: "Email Verification", message: "we couldn't authenticate you as your email wasn't verified. The max time for verifying your email is 24 hours." })
            else if (data.status === 404) Error.emit({ type: "Authentication Error", message: "we were not able to authenticate you. This is because you've provided invalid credentials. Contact our dev team for support." })
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
            Error.emit({ type: "Invalid Behaviour", message: "please report this issue as soon as possible. This could be because our servers were down or there's been a data breach." })
            return false
        })
}

//register function which requires login within 24hrs
function register(payload: { username: string, password: string, email: string }) {
    return routes.register(payload)
        .then(data => {
            if (data.status === 400) Error.emit({ type: "Registration Error", message: "we were not able to register this account. This may have been due to invalid format in providing the credentials." })
            else if (data.status === 409) {
                if ((data.data.exception as string).includes('Username')) Error.emit({ type: "Username Exists", message: "this username has already been taken, please use another one. For looking into the usernames taken you may check the /username/taken route. You may also negotiate for a certain username." })
                else if ((data.data.exception as string).includes('Email')) Error.emit({ type: "Email Exists", message: "an account with this email exists, try reclaiming it or notify our dev team to get it checked for you. If you forgot your password you can change it by going to the /refresh route." })
            } else {
                delete data.status
                userStates.user.set(data)
                return true
            }
            return false
        })
        .catch(() => {
            Error.emit({ type: "Invalid Behaviour", message: "please report this issue as soon as possible. This could be because our servers were down or there's been a data breach." })
            return false
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