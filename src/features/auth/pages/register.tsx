
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../../globals/input/index'
import image from '../../../../public/assets/images/worship.jpg'
import { Formik, Form, ErrorMessage } from 'formik'
import { IRegister } from '../../../types'
import { userRegisterSchema } from '../../../validations'
import { useState } from 'react'
import TextError from '../../../globals/TextError'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
const Register = () => {
    const initialValues: IRegister = {
        firstname: '',
        lastname: '',
        phone_number: '',
        gender: '',
        email: '',
        password: '',
    }


    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)



    const handleSubmit = (values) => {
        console.log(values)
        // navigate('/auth/login')
    }

    return (
        <div className=' lg:w-[100%] lg:h-screen pt-[50px] lg:pt-0   lg:flex lg:justify-start gap-x-[100px] '>

            <div className='hidden lg:flex  lg:w-[55%] blur-[2px]'>
                <img src={image} alt="" />
            </div>
            <div className=' mt-[-20px] px-[20px] lg:pt-[30px] lg-w-1/3'>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={userRegisterSchema}
                >
                    {(formikProps) => (
                        <Form className=" space-y-[10px]  lg:space-y-[20px] lg:px-[20px] lg:w-[500px]  w-{100%]   ">

                            <div>
                                <Input
                                    label='First Name'
                                    type="text"
                                    isRequired
                                    name="firstname"
                                    className='lg:w-[100%]'
                                    value={formikProps.values.firstname}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}

                                />
                                <ErrorMessage name="firstname" component={TextError} />
                            </div>

                            <div>
                                <Input
                                    label='Last Name'
                                    type="text"
                                    isRequired
                                    name="lastname"
                                    className='lg:w-[100%]'
                                    value={formikProps.values.lastname}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}

                                />
                                <ErrorMessage name="lastname" component={TextError} />
                            </div>


                            <div>
                                <Input
                                    label='Email'
                                    type="text"
                                    isRequired
                                    name='email'
                                    value={formikProps.values.email}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                    className='lg:w-[100%]'

                                />
                                <ErrorMessage name="email" component={TextError} />
                            </div>

                            <div className=' w-[100%]  relative'>
                                <Input
                                    label='Password'

                                    type={showPassword ? 'text' : 'password'}
                                    isRequired
                                    name='password'
                                    value={formikProps.values.password}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                    className='lg:w-[100%]'

                                />
                                <p onClick={() => setShowPassword(!showPassword)} className='absolute right-[20px] top-[40px] cursor-pointer'>{!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</p>
                                <ErrorMessage name="password" component={TextError} />
                            </div>

                            <div>
                                <Input
                                    label='Phone Number'
                                    type="number"
                                    isRequired
                                    name="phone_number"
                                    className='lg:w-[100%]'

                                    value={formikProps.values.phone_number}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}

                                />
                                <ErrorMessage name="phone_number" component={TextError} />
                            </div>
                            <div >
                                <label htmlFor="gender" className='text-[13px] text-gray-500'>Gender</label> <span className='text-red-400 text-[15px]'>*</span>

                                <br />
                                <select id="gender" className=' w-[100%] py-2.5 px-4  outline-none   rounded-lg bg-white shadow-inner '

                                    name='gender'
                                    value={formikProps.values.gender}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                >
                                    <option value="">select....</option>
                                    <option value="1">male</option>
                                    <option value="2">female</option>
                                </select>
                                <ErrorMessage name="gender" component={TextError} />
                            </div>

                            <div>
                                <Input
                                    label='Date of birth'
                                    type="date"
                                    isRequired
                                    name="dob"
                                    className='lg:w-[100%]'

                                    value={formikProps.values.phone_number}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}

                                />
                                <ErrorMessage name="dob" component={TextError} />
                            </div>





                            <button onClick={handleSubmit} className='bg-blue-500 text-white py-2.5 px-4 rounded-lg mt-[20px] w-[100%]'>Register</button>


                        </Form>
                    )}
                </Formik>
                <span className=' mt-7 flex justify-center items-center gap-[5px]'>Already have an account: <Link to={'/auth/login'} className='text-[14px] text-blue-500'>Login here</Link></span>
            </div>



        </div>
    )
}

export default Register