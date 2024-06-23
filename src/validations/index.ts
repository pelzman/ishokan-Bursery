import * as yup from "yup";

export const userLoginSchema = yup.object().shape({
  email: yup.string().email().required("Please provide valid email"),
  password: yup.string().min(4).max(10).required("Provide stronger password"),
});
export const userRegisterSchema = yup.object().shape({
  firstname: yup.string().required("please provide first name"),
  lastname: yup.string().required("please provide last name"),
  phone_number: yup.string().required("please provide phone number"),
  dob: yup.string().required("please provide date of birth"),
  gender: yup.string().required("please select gender"),
  email: yup.string().email().required("Please provide valid email"),
  password: yup.string().min(4).max(10).required("Provide stronger password"),
});

export const userResetSchema = yup.object().shape({
  pin: yup.string().required("Pin is required"),
  password: yup.string().min(4).max(10).required("Provide stronger password"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});
