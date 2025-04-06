import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../globals/input/index';
import image from '../../../../public/assets/images/worship.jpg';
import { Formik, Form, ErrorMessage } from 'formik';
import { userLoginSchema } from '../../../validations';
import { ILogin } from '../../../types';
import TextError from '../../../globals/TextError';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useUsers } from '../../../hooks/useUser';

const Login = () => {
    const initialValues: ILogin = {
        email: '',
        password: '',
    };
    const [showPassword, setShowPassword] = useState(false);
    const { users, loading, error, loginUser } = useUsers();
    const navigate = useNavigate();

    const handleSubmit = async (values: any) => {
        const response = await loginUser(values);
        if (response?.status === 200) {
            navigate('/bursary');
        } else {
            return error;
        }
    };

    return (
        <div className="lg:w-full lg:h-screen pt-[50px] lg:pt-0 lg:flex lg:justify-start gap-x-[100px] bg-gradient-to-b from-blue-50 to-blue-100">
            {/* Left Section with Image */}
            <div className="hidden lg:flex lg:w-[55%]">
                <img src={image} alt="Login Illustration" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>

            {/* Right Section with Form */}
            <div className="px-[20px] lg:pt-[50px] lg:w-1/3 bg-white shadow-lg rounded-lg p-8 mx-auto lg:mx-0 x-auto lg:mx-0">
                <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">Welcome Back!</h2>
                <p className="text-center text-gray-600 mb-8">
                    Please login to access your account and continue your journey with us.
                </p>

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={userLoginSchema}
                >
                    {(formikProps) => (
                        <Form className="space-y-[20px] lg:w-[100%] w-full">
                            {/* Email Input */}
                            <div>
                                <Input
                                    label="Email"
                                    type="text"
                                    name="email"
                                    isRequired
                                    className="w-full"
                                    onBlur={formikProps.handleBlur}
                                    onChange={formikProps.handleChange}
                                    value={formikProps.values.email}
                                />
                                <ErrorMessage name="email" component={TextError} />
                            </div>

                            {/* Password Input */}
                            <div className="w-full relative">
                                <Input
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    isRequired
                                    name="password"
                                    value={formikProps.values.password}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                    className="w-full"
                                />
                                <p
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-[20px] top-[50px] cursor-pointer text-gray-500 hover:text-blue-500 transition-colors"
                                >
                                    {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                </p>
                                <ErrorMessage name="password" component={TextError} />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg mt-4 w-full hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-lg"
                            >
                                {loading ? 'Loading...' : 'Login'}
                            </button>
                        </Form>
                    )}
                </Formik>

                {/* Forgot Password */}
                <Link to="/auth/forgot-password">
                    <p className="pt-[10px] text-center text-blue-500 hover:underline">Forgot Password?</p>
                </Link>

                {/* Register Link */}
                <div className="mt-10 flex justify-center items-center gap-[5px]">
                    <span className="text-gray-600">Don't have an account?</span>
                    <Link to="/auth/register" className="text-blue-500 text-[14px] hover:underline">
                        Register here
                    </Link>
                </div>

                {/* Go Back Home */}
                <div className="mt-2 flex justify-center items-center gap-x-[5px]">
                    <span className="text-gray-600">Go back</span>
                    <Link to="/" className="text-[14px] text-blue-500 hover:underline">
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;