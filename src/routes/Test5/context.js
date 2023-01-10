import { createContext } from "react";

export const InputContext=createContext()

export function InputContextProvider({children,value}){
    return (
        <InputContext.Provider value={value}>{children}</InputContext.Provider>
    )
}