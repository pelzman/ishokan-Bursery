export interface IRegister {
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  gender: string;
  password: string;
  dob: string
  role?: string;
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
  accessToken: string;
  //refreshToken
}
export interface IRegisterResponse {
  accessToken: string;
  //refreshToken
}

export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  gender: string;
  password: string;
}
