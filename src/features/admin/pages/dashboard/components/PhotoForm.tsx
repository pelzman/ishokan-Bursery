import { ErrorMessage, Form, Formik } from 'formik'

import Input from '../../../../../globals/input'
import TextError from '../../../../../globals/TextError'

const PhotoForm = () => {

    const initialValues = {
        firstname: '',
        lastname: '',
        phone_number: '',
        gender: '',
        email: '',
        password: '',
        dob: ''
    }
    return (


        <div className=' w-[100%] lg:h-[500px] lg:w-[60%]  lg:pt-0  lg:mx-[400px] my-auto mx:auto  gap-x-[100px] bg-[#fff] rounded-lg'>

            <div className='hidden lg:flex  lg:w-[55%] blur-[2px]'>
                {/* <img src={image} alt="" /> */}
            </div>
            <div className=' mt-[-20px] px-[20px] lg:pt-[20px] '>
                <Formik
                    initialValues={initialValues}
                    onSubmit={() => { }}
                    validationSchema={{}}
                >
                    {(formikProps) => (
                        <Form className=" gap-y-[10px] lg:gap-[10px] lg:grid lg:grid-cols-2 lg:items-center lg:px-[20px]   w-{100%] pt-[20px]">

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



                            <div>
                                <Input
                                    label='Phone Number'
                                    type="text"
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

                                    value={formikProps.values.dob}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}

                                />
                                <ErrorMessage name="dob" component={TextError} />
                            </div>






                            <button className='bg-blue-500 text-white py-2.5 px-4 rounded-lg mt-[20px] w-[100%]'>Register</button>

                        </Form>

                    )}
                </Formik>

            </div>



        </div>

    )
}

export default PhotoForm