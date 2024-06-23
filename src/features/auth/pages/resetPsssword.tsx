


import { Link, useNavigate } from 'react-router-dom'
import Input from '../../../globals/input/index'
import image from '../../../../public/assets/images/worship.jpg'
import { Formik, Form, ErrorMessage } from 'formik'
import { userResetSchema } from '../../../validations'
import { IReset } from '../../../types'
import TextError from '../../../globals/TextError'
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const ResetPassword = () => {
    const initialValues: IReset = {
        pin: '',
        password: '',
        confirm_password: ''

    }
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = () => {

        navigate('/auth/login')
    }
    return (
        <div className=' lg:w-[100%] lg:h-screen pt-[50px] lg:pt-0  lg:flex lg:justify-start gap-x-[100px] '>

            <div className='hidden lg:flex  lg:w-[55%] blur-[2px]'>
                <img src={image} alt="" />
            </div>
            <div className='px-[20px] lg:pt-[50px] lg-w-1/3 space-y-[25px] '>
                <h2 className='font-open-sans text-[20px] mb-[15px] font-bold '>Reset Password</h2>



                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={userResetSchema}
                >{(formikProps) => (
                    <Form className=' w-{100%] space-y-[40px] lg:w-[500px]'>

                        <div className=' w-[100%]  relative'>
                            <Input
                                label=' New Password'

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

                        <div className=' w-[100%]  relative'>
                            <Input
                                label='Confirm Password'
                                type="text"
                                name='confirm_password'
                                isRequired
                                className='lg:w-[100%]'
                                onBlur={formikProps.handleBlur}
                                onChange={formikProps.handleChange}
                                value={formikProps.values.confirm_password}

                            />
                            <p onClick={() => setShowPassword(!showPassword)} className='absolute right-[20px] top-[40px] cursor-pointer'>{!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</p>
                            <ErrorMessage name="confirm_password" component={TextError} />
                        </div>




                        <button onClick={handleSubmit} className='bg-blue-500 text-white py-2.5 px-4 rounded-lg mt-4 w-[100%]'>Reset</button>
                    </Form>
                )



                    }

                </Formik>




            </div>



        </div>
    )
}

export default ResetPassword