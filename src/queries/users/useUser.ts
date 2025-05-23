import AuthService from "../../serivices/authService";

import { useMutation, UseMutationResult  } from "@tanstack/react-query";
import { ILogin, ILoginResponse, IRegister, IRegisterResponse} from "../../types";

export const useRegister = ():UseMutationResult <

IRegisterResponse,
Error

> => {
   
    return useMutation({
        mutationFn: (credential:IRegister)=>AuthService.instance.register(credential)
    })
}
export const useLogin = ():UseMutationResult<

ILoginResponse
> => {
   
    return useMutation({
        mutationFn: (credential:ILogin)=>AuthService.instance.login(credential)
    })
}
