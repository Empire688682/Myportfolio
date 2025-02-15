import React, { useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const router = useRouter();
    const logoutAdmin = async () => {
        try {
            const response = await axios.post("api/auth/logout");
            if (response.data.success) {
                localStorage.removeItem("userAccessData");
                router.push("/");
            }
        } catch (error) {
            console.log("LogoutError:", error);
            alert("Unable to logout admin");
        }
    }
    return <AppContext.Provider value={{
        logoutAdmin
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}