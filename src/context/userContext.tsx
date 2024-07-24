
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import  {getUsers} from '../serivices/userService'
import { ILogin, IRegister} from "../types";
import { register, login, logout } from "../serivices/authService";

interface UserContextType {
  users: IRegister[];
  loading: boolean;
  error   : string | null;
  addUser: (user:IRegister)=>Promise<void>
  loginUser: (user:ILogin)=>Promise<void>
  logout: ()=>void
}
const UserContext = createContext<UserContextType | undefined>(undefined);

 const UserProvider = ({children}:{children:ReactNode})=>{
 const [users, setUser] = useState<IRegister[]>([])
 const [loading, setLoading] = useState<boolean>(true)
 const [error, setError] = useState< string| null>(null)

 useEffect(()=>{  
const fetchUser = async()=>{
    try {
        const data = await getUsers() 
        setUser(data)
        setLoading(false)
    } catch (error:any) {
        setError(error.message)
    }
   
}
fetchUser()
   },[])

   const addUser = async(user:IRegister)=>{
    try {
       const newUser = await register(user) 
       setUser((prev)=>[...prev, newUser])
    } catch (error) {
        
    }
    
   }
   const loginUser = async(user:ILogin)=>{
    try {
       const newUser = await login(user) 
         setUser((prev)=>[...prev, newUser])
    } catch (error) {
        
    }
   }

 return(
    <UserContext.Provider value={{users ,error, loading, addUser, loginUser, logout}}>{children}</UserContext.Provider>
 )
}


const useUserContext = ()=>{
    const context = useContext(UserContext)
    if(context === undefined){
        throw new Error("useUserContext must be used within a UserProvider")
    }
    return context
}

export {UserProvider, useUserContext}

