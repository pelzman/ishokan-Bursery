import {ILogin, ILoginResponse, IRegister, IRegisterResponse} from '../types'
import  {apiRequest} from '../api/index'
import { storeTokens } from '../api/index'


export const register  = async(credentials :IRegister):Promise<IRegisterResponse> =>{
 const response = await apiRequest.post<ILoginResponse>('/register', credentials)
 localStorage.setItem('accesssToken', response.data.accessToken)
return response.data
}



export const login  = async(credentials :ILogin):Promise<ILoginResponse> =>{
    const response = await apiRequest.post<ILoginResponse>('/login', credentials)
    const accesssToken = response.data.accessToken
    const refreshToken = response.data.refreshToken
    storeTokens(accesssToken, refreshToken)  
   return response.data
   }


   export const logout  = ()=>{
  localStorage.removeItem('accessToken')
  //navigate to login
   
   }
