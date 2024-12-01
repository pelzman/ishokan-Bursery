import { ILogin, IRegister } from "../types";
import { apiRequest } from "../api/index";
import { storeTokens } from "../api/index";
import { useNavigate } from "react-router-dom";

class AuthService { 

  async register  (credentials: IRegister){
    
    const response = await apiRequest.post("/auth/signup", credentials);
    
      console.log("Register response:", response.data);
      localStorage.setItem("accesssToken", response.data.token);
    

   
      return  { status:response.status, data:response.data}
  };
  
   async login (credentials: ILogin)   {
    const response = await apiRequest.post("/auth/login", credentials);
    console.log(response?.data?.data.user, 'datau')
    const accesssToken = response.data.data.token
    const refreshToken = response.data.refreshToken;
    storeTokens(accesssToken, refreshToken);
    return  { status:response.status, data:response.data}
  };
  
  async logout (){
    const navigate = useNavigate();
    localStorage.removeItem("accessToken");
    navigate("/auth/login");
    //navigate to login
  };
  

}
export default AuthService
