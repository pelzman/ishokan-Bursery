import { Link, useNavigate } from 'react-router-dom'
import Input from '../../../globals/input/index'
import image from '../../../../public/assets/images/worship.jpg'
import { Formik, Form, ErrorMessage } from 'formik'
import { userLoginSchema } from '../../../validations'
import { ILogin } from '../../../types'
import TextError from '../../../globals/TextError'
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useUsers } from '../../../hooks/useUser'

const Login = () => {
    const initialValues: ILogin = {
        email: '',
        password: ''
    }
    const [showPassword, setShowPassword] = useState(false)
    const { loginUser } = useUsers()
    // const navigate = useNavigate()

    const handleSubmit = async (values: any) => {
        await loginUser(values)
        // navigate('/bursary')
    }
    return (
        <div className=' lg:w-[100%] lg:h-screen pt-[50px] lg:pt-0  lg:flex lg:justify-start gap-x-[100px] '>
            <div className='hidden lg:flex  lg:w-[55%] blur-[2px]'>
                <img src={image} alt="" />
            </div>
            <div className='px-[20px] lg:pt-[50px] lg-w-1/3'>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={userLoginSchema}
                >{(formikProps) => (
                    <Form className='space-y-[20px] lg:w-[500px]  w-{100%] '>
                        <div>
                            <Input
                                label='Email'
                                type="text"
                                name='email'
                                isRequired
                                className='lg:w-[100%]'
                                onBlur={formikProps.handleBlur}
                                onChange={formikProps.handleChange}
                                value={formikProps.values.email}

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
                            <p onClick={() => setShowPassword(!showPassword)} className='absolute right-[20px] top-[50px] cursor-pointer'>{!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</p>
                            <ErrorMessage name="password" component={TextError} />
                        </div>


                        <button onClick={handleSubmit} className='bg-blue-500 text-white py-2.5 px-4 rounded-lg mt-4 w-[100%]'>Login</button>
                    </Form>
                )



                    }

                </Formik>
                <Link to='/auth/forgot-password'>
                    <p className='pt-[10px]'>Forgot Password ?</p>
                </Link>


                <span className='mt-10 flex justify-center items-center gap-[5px]'>don't have an account: <Link to={'/auth/register'} className='text-blue-500 text-[14px]'>Register here</Link></span>
            </div>



        </div>
    )
}

export default Login