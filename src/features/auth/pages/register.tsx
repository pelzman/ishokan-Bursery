import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../globals/input/index';
import image from '../../../../public/assets/images/worship.jpg';
import { Formik, Form, ErrorMessage } from 'formik';
import { IRegister } from '../../../types';
import { userRegisterSchema } from '../../../validations';
import { useState } from 'react';
import TextError from '../../../globals/TextError';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useUsers } from '../../../hooks/useUser';

const Register = () => {
    const initialValues: IRegister = {
        firstname: '',
        lastname: '',
        phone_number: '',
        gender: '',
        email: '',
        password: '',
        dob: '',
    };

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const { loading, addUser, error } = useUsers();

    const handleSubmit = async (values: any) => {
        try {
            const response = await addUser(values);
            if (response?.status === 201) {
                navigate('/auth/login');
            } else {
                return error;
            }
        } catch (error: any) {
            return error.message;
        }
    };

    return (
        <div className="lg:w-full lg:h-screen pt-[50px] lg:pt-0 lg:flex lg:justify-start gap-x-[100px] bg-gradient-to-b from-blue-50 to-blue-100">
            {/* Left Section with Image */}
            <div className="hidden lg:flex lg:w-[55%]">
                <img src={image} alt="Registration Illustration" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>

            {/* Right Section with Form */}
            <div className="px-[20px] lg:pt-[50px] lg:w-1/3 bg-white shadow-lg rounded-lg p-8 mx-auto lg:mx-0 overflow-y-auto max-h-[90vh]">
                <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">Create Your Account</h2>
                <p className="text-center text-gray-600 mb-8">
                    Join us today and start your journey with Ishokan!
                </p>

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={userRegisterSchema}
                >
                    {(formikProps) => (
                        <Form className="space-y-[20px] w-full max-w-[400px] mx-auto">
                            {/* First Name */}
                            <div>
                                <Input
                                    label="First Name"
                                    type="text"
                                    isRequired
                                    name="firstname"
                                    className="w-full"
                                    value={formikProps.values.firstname}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                />
                                <ErrorMessage name="firstname" component={TextError} />
                            </div>

                            {/* Last Name */}
                            <div>
                                <Input
                                    label="Last Name"
                                    type="text"
                                    isRequired
                                    name="lastname"
                                    className="w-full"
                                    value={formikProps.values.lastname}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                />
                                <ErrorMessage name="lastname" component={TextError} />
                            </div>

                            {/* Email */}
                            <div>
                                <Input
                                    label="Email"
                                    type="text"
                                    isRequired
                                    name="email"
                                    className="w-full"
                                    value={formikProps.values.email}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                />
                                <ErrorMessage name="email" component={TextError} />
                            </div>

                            {/* Password */}
                            <div className="w-full relative">
                                <Input
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    isRequired
                                    name="password"
                                    className="w-full"
                                    value={formikProps.values.password}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                />
                                <p
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-[20px] top-[50px] cursor-pointer text-gray-500 hover:text-blue-500 transition-colors"
                                >
                                    {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                </p>
                                <ErrorMessage name="password" component={TextError} />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <Input
                                    label="Phone Number"
                                    type="text"
                                    isRequired
                                    name="phone_number"
                                    className="w-full"
                                    value={formikProps.values.phone_number}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                />
                                <ErrorMessage name="phone_number" component={TextError} />
                            </div>

                            {/* Gender */}
                            <div>
                                <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
                                    Gender <span className="text-red-400">*</span>
                                </label>
                                <select
                                    id="gender"
                                    name="gender"
                                    className="w-full py-2.5 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={formikProps.values.gender}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                >
                                    <option value="">Select...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <ErrorMessage name="gender" component={TextError} />
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <Input
                                    label="Date of Birth"
                                    type="date"
                                    isRequired
                                    name="dob"
                                    className="w-full"
                                    value={formikProps.values.dob}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                />
                                <ErrorMessage name="dob" component={TextError} />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg mt-4 w-full hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-lg"
                            >
                                {loading ? 'Loading...' : 'Register'}
                            </button>
                        </Form>
                    )}
                </Formik>

                {/* Login Link */}
                <div className="mt-6 flex justify-center items-center gap-[5px]">
                    <span className="text-gray-600">Already have an account?</span>
                    <Link to="/auth/login" className="text-blue-500 text-[14px] hover:underline">
                        Login here
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

export default Register;