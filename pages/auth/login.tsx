import React, { useState, useRef } from 'react'
import Base from '../../components/auth/baseline'
import { closeOnOutwardClick, createInput, redirectLinks } from '../../utils/auth'

const Login: React.FC = () => {
    const [selectedUsername, setSelectUsername] = useState<boolean>(false)
    const [selectedPassword, setSelectPassword] = useState<boolean>(false)

    const username = useRef<any>()
    const password = useRef<any>()

    closeOnOutwardClick(username, setSelectUsername)
    closeOnOutwardClick(password, setSelectPassword)

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
                {createInput('Username', username, selectedUsername, setSelectUsername)}
                {createInput('Password', password, selectedPassword, setSelectPassword)}
            </div>
        )
    }

    function links() {
        return (
            <>
                {redirectLinks('#', "Forgot your password? click here to reset password")}
                {redirectLinks('/auth/register', "Don't have an account! create a new one")}
            </>
        )
    }

    return (
        <Base
            header="Welcome back"
            subHeader="We're so excited to see you again"
            height="400px"
            buttonName="Login"
            redirectURL="/auth/login"
            inputs={inputs}
            redirectLinks={links}
        />
    )
}

export default Login