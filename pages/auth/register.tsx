import React, { useState, useRef, useEffect } from 'react'
import Base from '../../components/auth/baseline'
import { closeOnOutwardClick, createInput, redirectLinks } from '../../utils/auth'

import { core } from '../../core'
import Router from 'next/router'

const test: React.FC = () => {
    const [selectedUsername, setSelectUsername] = useState<boolean>(false)
    const [selectedPassword, setSelectPassword] = useState<boolean>(false)
    const [selectedEmail, setSelectEmail] = useState<boolean>(false)

    const [filled, setFilled] = useState<boolean>(false)

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const usernameRef = useRef<any>()
    const passwordRef = useRef<any>()
    const emailRef = useRef<any>()

    closeOnOutwardClick(setSelectUsername, [usernameRef])
    closeOnOutwardClick(setSelectPassword, [passwordRef])
    closeOnOutwardClick(setSelectEmail, [emailRef])

    useEffect(() => {
        if (username.length > 0 && password.length > 0 && email.length > 0) setFilled(true)
        else setFilled(false)
    }, [username, password, email])

    function inputs() {
        return (
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "40px",
                height: "180px"
            }}>
                {createInput('Email', emailRef, selectedEmail, setSelectEmail, setEmail)}
                {createInput('Username', usernameRef, selectedUsername, setSelectUsername, setUsername)}
                {createInput('Password', passwordRef, selectedPassword, setSelectPassword, setPassword)}
            </div>
        )
    }

    function links() {
        return (
            <>
                {redirectLinks('/auth/login', "Already have an account! Login")}
            </>
        )
    }

    return (
        <Base
            header="Create an account"
            subHeader="Get started by creating a new account"
            height="430px"
            buttonName="Create Account"
            inputs={inputs}
            redirectLinks={links}
            filled={filled}
            onClickFunc={() => {
                if (filled) {
                    core.auth.register({
                        username,
                        password,
                        email
                    })
                        .then(accountCreated => {
                            if (accountCreated) {
                                Router.push('/app')
                            }
                        })
                }
            }}
        />
    )
}

export default test