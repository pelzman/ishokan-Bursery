import { ILogin, IRegister } from "../types";
import { apiRequest } from "../api/index";
import { storeTokens } from "../api/index";
import { useNavigate } from "react-router-dom";

class AuthService { 

  async register  (credentials: IRegister){
    const response = await apiRequest.post("/auth/signup", credentials);
    localStorage.setItem("accesssToken", response.data.accessToken);
    return  response.data;
  };
  
   async login (credentials: ILogin)   {
    const response = await apiRequest.post("/auth/login", credentials);
    const accesssToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;
    storeTokens(accesssToken, refreshToken);
    return  response.data;
  };
  
  async logout (){
    const navigate = useNavigate();
    localStorage.removeItem("accessToken");
    navigate("/login");
    //navigate to login
  };
  

}
export default AuthService
