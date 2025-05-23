export interface IRegister {
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  gender: string;
  password: string;
  dob: string
  role?: string;
  message? :string
}
export interface ILogin {
  email: string;
  password: string;
}

export interface IReset {
  pin: string;
  password: string;
  confirm_password: string;
}
export interface ILoginResponse {
  status:number,
  data:{
    user: IUserResponse,
    refreshToken: string
    accessToken: string;
  }

  //refreshToken
}
export interface IRegisterResponse {
  status:number,

  //refreshToken
  data: IUserResponse
}
 
export interface IUser {

  id: number | string
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  gender: string;
  password: string;  
  dob: string
  role?: string;
}


export type IUserResponse = Omit<IRegister, "password" | "role">
