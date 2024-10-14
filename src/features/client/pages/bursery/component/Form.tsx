import { ErrorMessage, Formik, Form } from "formik"
import Input from "../../../../../globals/input"
import TextError from "../../../../../globals/TextError"
import { FaCheck, FaFloppyDisk } from "react-icons/fa6";

import { userRegisterSchema } from "../../../../../validations"

const BursaryForm = () => {
   
    return (
        <div className="overflow-x-hidden-hidden ">

            <div className='px-[20px] border-red-500'>
                <Formik
                    initialValues={{}}
                    onSubmit={() => { }}
                    validationSchema={userRegisterSchema}
                >
                    {(formikProps) => (
                        <Form className="  lg:mt-[10px] lg:mb-[10px]  lg:flex lg:flex-col   lg:border lg:rounded-lg lg:items-center lg:pt-[20px] lg:pb-[20px]">
                            <div className="text-start lg:w-[900px]">
                                <h2 className="pb-[10px] pt-[20px]">Kindly fill your Information</h2>
                            </div>

                            <div className="md:grid md:grid-cols-2 md:gap-x-[20px] md:border md:px-[10px] md:py-[20px] md:rounded-md md:shadow-md lg:grid-cols-2 lg:w-[900px] lg:border lg:rounded-md lg:shadow-md lg:pr-[80px] lg:pl-[80px] lg:pb-[20px]">
                                <div>
                                    <Input
                                        label='First Name'
                                        type="text"
                                        isRequired
                                        name="firstname"
                                        className='lg:w-[350px]'
                                        // value={formikProps.values.firstname}
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
                                        className='lg:w-[350px]'
                                        // value={formikProps.values.lastname}
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
                                        // value={formikProps.values.email}
                                        onChange={formikProps.handleChange}
                                        onBlur={formikProps.handleBlur}
                                        className='lg:w-[350px]'

                                    />
                                    <ErrorMessage name="email" component={TextError} />
                                </div>

                                <div className=' w-[100%]  relative'>
                                    <Input
                                        label='Password'
                                        type='text'
                                        isRequired
                                        name='password'
                                        // value={formikProps.values.password}
                                        onChange={formikProps.handleChange}
                                        onBlur={formikProps.handleBlur}
                                        className='lg:w-[350px]'

                                    />

                                    <ErrorMessage name="password" component={TextError} />
                                </div>

                                <div>
                                    <Input
                                        label='Phone Number'
                                        type="number"
                                        isRequired
                                        name="phone_number"
                                        className='lg:w-[350px]'

                                        // value={formikProps.values.phone_number}
                                        onChange={formikProps.handleChange}
                                        onBlur={formikProps.handleBlur}

                                    />
                                    <ErrorMessage name="phone_number" component={TextError} />
                                </div>
                                <div className="py-[5px]" >
                                    <label htmlFor="gender" className='text-[13px] text-gray-500 '>Gender</label> <span className='text-red-400 text-[15px]'>*</span>

                                    <br />
                                    <select id="gender" className='w-[100%] lg:w-[350px] py-2.5 mt-[7px] px-4  outline-none   rounded-lg bg-white shadow-inner '

                                        name='gender'
                                        // value={formikProps.values.gender}
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
                                        className='lg:w-[350px]'

                                        // value={formikProps.values.dob}
                                        onChange={formikProps.handleChange}
                                        onBlur={formikProps.handleBlur}

                                    />
                                    <ErrorMessage name="dob" component={TextError} />
                                </div>

                            </div>

                            <div className="flex justify-center items-center gap-[20px] py-[20px]">
                                <button className="flex items-center justify-center gap-2 px-[100px] py-[10px] bg-green-500 text-[15px] rounded-[5px] text-[#fff] ">Save <FaFloppyDisk /></button>
                                <button className="flex items-center justify-center gap-2 px-[100px] py-[10px] bg-blue-500 text-[15px] rounded-[5px] text-[#fff]">Submit <FaCheck /></button>
                            </div>
                        </Form>


                    )}

                </Formik>

            </div>

        </div>
    )
}

export default BursaryForm