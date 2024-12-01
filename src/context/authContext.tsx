
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ILogin, IRegister } from "../types";
import AuthService from "../serivices/authService";

const { register, login, logout } = new AuthService()

interface UserContextType {
    users: IRegister[];
    loading: boolean;
    error: string | null;
    addUser: (user: IRegister) =>Promise<{status:number, data:any} | null | undefined>
    loginUser: (user: ILogin) => Promise<{status:number, data:any} | null | undefined>
    logout: () => void
}
const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUser] = useState<IRegister[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    //  useEffect(()=>{  
    // const fetchUser = async()=>{
    //     try {
    //         const data = await getUsers() 
    //         setUser(data)
    //         setLoading(false)
    //     } catch (error:any) {
    //         setError(error.message)
    //     }

    // }
    // fetchUser()
    //    },[])
  

    const addUser = async (user: IRegister):Promise<{status:number, data:any} | null | undefined> => {
        try {
            setLoading(true)
            const response = await register(user)
            if (response.status == 201) {                
                setUser((prev) => [...prev, response?.data?.user])
                toast.success( response.data.data.message || "User registered successfully!");
                setLoading(false) 
                return response

            }
       else{
                
                    setError(response.data.error)
                    toast.error(response.data.error)
                     setLoading(false)
     }
            } 
            catch (error: any) {
            setError(error.error)
            toast.error(error.message)
        }

    }
    const loginUser = async (user: ILogin):Promise<{status:number, data:any} | null | undefined> => {

        try {
            setLoading(true)  
            const response = await login(user)          
            if (response.status == 200) {               
            setUser((prev) => [...prev, response.data.user])
            toast.success("User login successfully!");
            setLoading(false)
            return response
            }
           
            else{
                if(response.status == 400){
                    setError(response.data.error.error)
                    toast.error(response.data.error|| 'An error occured')
                    setLoading(false)
                    
  }
}
} catch (error: any) {
            
            setError(error.message)
            toast.error(error.message)
            setLoading(false)
        }
    }

    return (
        <UserContext.Provider value={{ users, error, loading, addUser, loginUser, logout }}>{children}</UserContext.Provider>
    )
}


const useUserContext = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error("useUserContext must be used within a UserProvider")
    }
    return context
}

export { UserProvider, useUserContext }

