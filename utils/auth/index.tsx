import React, { useEffect, useState } from 'react'

import Link from 'next/link'

export function closeOnOutwardClick(ref: React.MutableRefObject<any>, stateSetter: React.Dispatch<React.SetStateAction<boolean>> | Function) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                stateSetter(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export function createInput(
    name: string,
    ref: React.MutableRefObject<any>,
    state: boolean,
    stateSetter: React.Dispatch<React.SetStateAction<boolean>>,
    valueSetter: React.Dispatch<React.SetStateAction<string>>
) {
    var MainCredential: boolean = name.includes("Password")
    const [showCreds, setShowCreds] = useState<boolean>(false)
    return (
        <label style={{
            width: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "center"
        }}>
            <input
                type={MainCredential && !showCreds ? "password" : "text"}
                name={name}
                placeholder={name}
                ref={ref}
                spellCheck="false"
                autoComplete="off"
                onChange={e => valueSetter(e.target.value)}
                style={{
                    width: "calc(100% - 100px)",
                    height: "50px",
                    borderRadius: "10px",
                    borderWidth: "0 0 2px",
                    borderColor: state ? "#4B6DFF" : "#252A2E",
                    fontFamily: "sans-serif",
                    fontSize: "18px",
                    backgroundColor: "#171A1D",
                    paddingLeft: "20px",
                    paddingRight: "40px",
                    fontWeight: "bold",
                    color: "silver",
                    outline: "none"
                }}
                onClick={() => {
                    stateSetter(true)
                }}
            />
            {
                MainCredential ?
                    <span
                        className="material-icons"
                        style={{
                            position: "absolute",
                            right: "35px",
                            top: "15px",
                            color: "#3A3A3D"
                        }}
                        onClick={() => setShowCreds(prev => (!prev))}
                    >
                        {showCreds ? "visibility_off" : "visibility"}
                    </span>
                    : ""
            }
        </label>
    )
}

export function redirectLinks(link: string, message: string) {
    return (
        <Link href={link}>
            <a style={{
                color: "silver",
                fontFamily: "sans-serif",
                fontSize: "10px",
                textDecoration: "none",
                marginTop: "10px"
            }}>
                {message}
            </a>
        </Link>
    )
}