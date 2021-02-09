import routes from './routes'
import states from './states'
import { Error, Token } from './events'

import userActions from '../user/actions'

import userStates from '../user/states'

//funciton to handle the csrf tokens
function csrf() {
    routes.csrf()
        .then(data => {
            if (data.status === 400) Token.emit({ token: "access" })
            else {
                states.csrf_token.set(data._csrf)
                userActions.info()
            }
        })
        .catch(() => {
            Error.emit({ type: "Invalid Behaviour", message: "the csrf token could not be set. Please report this issue as soon as possible." })
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
                userStates.info.set(data)
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
                userStates.info.set(data)
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
        .then(data => {
            if (data.status === 403) Token.emit({ token: "refresh" })
        })
        .catch(() => {
            Error.emit({ type: "Invalid Behaviour", message: "please report this issue as soon as possible. This could be because our servers were down or there's been a data breach." })
        })
}

function sendResetPasscodeLink(email: string) {
    return routes.sendResetPasscodeLink(email)
        .then(data => {
            if (data.status === 404) Error.emit({ type: "SMTP Error", message: "there was an issue with the mail processing. Please report this issue." })
            else if (data.status === 400) Error.emit({ type: "Invalid Email", message: "there is no account registered with this email. Try creating a new account. If this is an unexpected behaviour then you can report it on our discord server." })
            else return true
        })
        .catch(() => {
            Error.emit({ type: "Invalid Behaviour", message: "please report this issue as soon as possible. This could be because our servers were down or there's been a data breach." })
            return false
        })
}

function resetPasscode(password: string, token: string) {
    return routes.resetPasscode(password, token)
        .then(data => {
            if (data.status === 401) Error.emit({ type: "Unauthorised attempt", message: "we could not reset the password because the token provided was invalid. If this was an unexpected behaviour then you may notify our dev team on discord." })
            else if (data.status === 400) Error.emit({ type: "Invalid Format", message: "the password entered did follow proper format. It can have any number of characters between 10 and 30." })
            else return true
        })
        .catch(() => {
            Error.emit({ type: "Invalid Behaviour", message: "please report this issue as soon as possible. This could be because our servers were down or there's been a data breach." })
            return false
        })
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
    verifyTotp,
    sendResetPasscodeLink,
    resetPasscode
}