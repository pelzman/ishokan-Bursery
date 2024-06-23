


import { Link, useNavigate } from 'react-router-dom'
import Input from '../../../globals/input/index'
import image from '../../../../public/assets/images/worship.jpg'
import { Formik, Form, ErrorMessage } from 'formik'
import { userLoginSchema } from '../../../validations'
import { ILogin } from '../../../types'
import TextError from '../../../globals/TextError'
import { useState } from 'react'

const ForgotPassword = () => {
    const initialValues: ILogin = {
        email: '',
        password: ''
    }

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = () => {

        navigate('/auth/reset-password')
    }
    return (
        <div className=' lg:w-[100%] lg:h-screen pt-[50px] lg:pt-0  lg:flex lg:justify-start gap-x-[100px] '>

            <div className='hidden lg:flex  lg:w-[55%] blur-[2px]'>
                <img src={image} alt="" />
            </div>
            <div className='px-[20px] lg:pt-[50px] lg-w-1/3 space-y-[25px]'>
                <h2 className='font-open-sans text-[20px] mb-[15px] font-bold'>Forgot Password</h2>

                <p className='lg:w-[500px] font-open-sans'>A code will be sent to your email provided. This code will be used to reset your password</p>

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={userLoginSchema}
                >{(formikProps) => (
                    <Form className='space-y-[40px] lg:w-[500px]  w-{100%] '>
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




                        <button onClick={handleSubmit} className='bg-blue-500 text-white py-2.5 px-4 rounded-lg mt-4 w-[100%]'>continue</button>
                    </Form>
                )



                    }

                </Formik>
                <Link to='/auth/login'>
                    <p className='text-center pt-[40px]'>I remember my Password </p>
                </Link>



            </div>



        </div>
    )
}

export default ForgotPassword