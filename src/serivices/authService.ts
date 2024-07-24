import { ILogin, IRegister } from "../types";
import { apiRequest } from "../api/index";
import { storeTokens } from "../api/index";
import { useNavigate } from "react-router-dom";


export const register = async (credentials: IRegister) => {
  const response = await apiRequest.post("/register", credentials);
  localStorage.setItem("accesssToken", response.data.accessToken);
  return response.data;
};

export const login = async (credentials: ILogin)=> {
  const response = await apiRequest.post("/login", credentials);
  const accesssToken = response.data.accessToken;
  const refreshToken = response.data.refreshToken;
  storeTokens(accesssToken, refreshToken);
  return response.data;
};

export const logout = () => {
 const navigate = useNavigate()
  localStorage.removeItem("accessToken");
  navigate('/login')
  //navigate to login
};
