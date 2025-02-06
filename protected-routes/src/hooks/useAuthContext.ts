import { useContext } from "react";
import { AuthContext, User } from "../AuthContext.tsx";

export const useAuthContext = ():User => {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error("useAuthContext doit être utilisé dans un AuthProvider");
    }

    return context;
}