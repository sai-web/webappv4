import React, { useState, useRef, useEffect } from 'react'
import Base from '../../components/auth/baseline'
import { closeOnOutwardClick, createInput, redirectLinks } from '../../utils/auth'

import { core } from '../../core'
import Router from 'next/router'

const Login: React.FC = () => {
    const [selectedUsername, setSelectUsername] = useState<boolean>(false)
    const [selectedPassword, setSelectPassword] = useState<boolean>(false)

    const [filled, setFilled] = useState<boolean>(false)

    const usernameRef = useRef<any>()
    const passwordRef = useRef<any>()

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    closeOnOutwardClick(setSelectUsername, [usernameRef])
    closeOnOutwardClick(setSelectPassword, [passwordRef])

    useEffect(() => {
        if (username.length > 0 && password.length > 0) setFilled(true)
        else setFilled(false)
    }, [username, password])

    function inputs() {
        return (
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "40px",
                height: "120px"
            }}>
                {createInput('Username', usernameRef, selectedUsername, setSelectUsername, setUsername)}
                {createInput('Password', passwordRef, selectedPassword, setSelectPassword, setPassword)}
            </div>
        )
    }

    function links() {
        return (
            <>
                {redirectLinks('/auth/reset/get_reset_link', "Forgot your password? click here to reset password")}
                {redirectLinks('/auth/register', "Don't have an account! create a new one")}
            </>
        )
    }

    return (
        <>
            <Base
                header="Vibe Beta"
                subHeader="We're so excited to see you again"
                height="400px"
                buttonName="Login"
                inputs={inputs}
                redirectLinks={links}
                filled={filled}
                onClickFunc={() => {
                    if (filled) {
                        core.auth.login({
                            username: username,
                            password: password,
                            device_name: navigator.platform
                        })
                            .then((connected) => {
                                if (connected) Router.push('/app')
                            })
                    }
                }}
            />
        </>
    )
}

export default Login