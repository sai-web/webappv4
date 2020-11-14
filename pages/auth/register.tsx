import React, { useState, useRef } from 'react'
import Base from '../../components/auth/baseline'
import { closeOnOutwardClick, createInput, redirectLinks } from '../../utils/auth'

const test: React.FC = () => {
    const [selectedUsername, setSelectUsername] = useState<boolean>(false)
    const [selectedPassword, setSelectPassword] = useState<boolean>(false)
    const [selectedEmail, setSelectEmail] = useState<boolean>(false)

    const username = useRef<any>()
    const password = useRef<any>()
    const email = useRef<any>()

    closeOnOutwardClick(username, setSelectUsername)
    closeOnOutwardClick(password, setSelectPassword)
    closeOnOutwardClick(email, setSelectEmail)

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
                {createInput('Email', email, selectedEmail, setSelectEmail)}
                {createInput('Username', username, selectedUsername, setSelectUsername)}
                {createInput('Password', password, selectedPassword, setSelectPassword)}
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
            redirectURL='/updates/authLog'
            inputs={inputs}
            redirectLinks={links}
        />
    )
}

export default test