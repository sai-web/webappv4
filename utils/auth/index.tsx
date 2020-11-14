import React, { useEffect } from 'react'

import Link from 'next/link'

export function closeOnOutwardClick(ref: React.MutableRefObject<any>, stateSetter: React.Dispatch<React.SetStateAction<boolean>>) {
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

export function createInput(name: string, ref: React.MutableRefObject<any>, state: boolean, stateSetter: React.Dispatch<React.SetStateAction<boolean>>) {
    return (
        <input
            type="text"
            name="username"
            placeholder={name}
            ref={ref}
            spellCheck="false"
            autoComplete="off"
            style={{
                width: "calc(100% - 60px)",
                height: "50px",
                borderRadius: "10px",
                borderWidth: "0 0 2px",
                borderColor: state ? "#4B6DFF" : "#252A2E",
                fontFamily: "sans-serif",
                fontSize: "15px",
                backgroundColor: "#171A1D",
                paddingLeft: "20px",
                fontWeight: "bold",
                color: "silver",
                outline: "none"
            }}
            onClick={() => {
                stateSetter(true)
            }}
        />
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