import {createContext, ReactNode, useState } from 'react'
import { UserData } from "./pages/Home";

export type User= {
    isConnected: boolean,
    logIn: (data: UserData)=> void,
    logOut: ()=> void
}

type AuthProviderProps = {
    children: ReactNode;
    isSignedIn?: boolean;
}

export const AuthContext = createContext<User | undefined>(undefined)

export const AuthProvider = ({children, isSignedIn}:AuthProviderProps) => {
    const [isConnected, setIsConnected] = useState(isSignedIn || false);

    const logIn = ({email, password}:UserData) => {
        if(email === "toto@gmail.bzh" && password === "123456") {
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


