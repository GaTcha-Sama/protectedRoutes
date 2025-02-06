import {createContext, ReactNode, useContext, useState } from 'react'
import { UserData } from "./pages/Home";

type User= {
    isConnected: boolean,
    logIn: (data: UserData)=> void,
    logOut: ()=> void
}

type AuthProviderProps = {
    children: ReactNode
}

const AuthContext = createContext<User | undefined>(undefined)

const useAuthContext = ():User => {
    const context = useContext(AuthContext)

    if(!context){
        throw new Error("useAuthContext doit être utilisé dans un AuthProvider")
    }

    return context;
}

export const AuthProvider = ({children}:AuthProviderProps) => {
    const [isConnected, setIsConnected] = useState(false)

    const logIn = ({email, password}:UserData) => {
        if(email === "toto@gmail.bzh" && password === "123456"){
            setIsConnected(true);
        }
    }

    const logOut = () => {
        setIsConnected(false);
    }

    return (
        <AuthContext.Provider value={{ isConnected, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}


