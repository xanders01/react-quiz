import { createContext, useRef, useState } from "react";

export const InputContext = createContext()

export function InputContextProvider({ children, value }) {
    const [username, setUsername] = useState("")
    const usernameRef=useRef("")

    const providerValue = {
        usernameRef,
        username, 
        setUsername
    }

    return (
        <InputContext.Provider value={providerValue}>{children}</InputContext.Provider>
    )
}