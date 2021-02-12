import React, { useState } from 'react'

import { EditAccountDetails } from './editAccount'
import { DisplayAccountDetails } from './displayAccount'

export const AccounCredentialSettings: React.FC = () => {
    const [editAccount, setEditStatus] = useState<boolean>(false)
    return (
        <div style={{
            width: "calc(100% - 100px)",
            height: editAccount ? "400px" : "150px",
            borderRadius: "5px",
            backgroundColor: "#0E0E10",
            display: "flex",
            alignItems: editAccount ? "" : "center",
            position: "relative"
        }}>
            {
                editAccount ?
                    <EditAccountDetails setEditStatus={setEditStatus} /> :
                    <DisplayAccountDetails setEditStatus={setEditStatus} />
            }
        </div>
    )
}