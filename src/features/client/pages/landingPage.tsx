import { Link } from "react-router-dom"


const LandingPage = () => {
    return (
        <div className="bg-[url('assets/images/welcome2.jpg')] h-screen w-[100%] overflow-hidden ">

            <section className=" " >
                <div className=' relative   px-[20px] w-[100%] flex items-center  justify-between lg:justify-start lg:items-center h-[60px] text-blue-500 shadow-lg'>
                    <div>Logo</div>
                    <div className='w-[100%] flex justify-end lg:justify-end items-center'>
                        <Link to='/auth/register'><button className=" px-[20px] py-[8px]  lg:px-[40px] lg:py-[12px] bg-blue-500 text-white rounded-[10px]">Get Started</button></Link>

                    </div>


                </div>

                <div>
                    <div className="flex justify-center items-center h-[80%] px-[20px] pt-[20px]">
                        <div className="text-white text-center">
                            <h1 className="text-4xl lg:text-6xl font-bold">Welcome to Ishokan Bursary</h1>
                            <p className="text-[15px] lg:text-[20px] py-[100px] lg:py-[150px]  text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil debitis officiis fugiat sunt, inventore nesciunt doloribus iure possimus ullam labore eligendi obcaecati enim dolore ipsum culpa eos mollitia eius unde.
                                Quae natus dolores maxime cumque rem adipisci. Porro excepturi nemo molestias? Iste consectetur veniam amet, quas corporis at ut neque saepe dicta commodi iure tempore aliquid esse nisi culpa eveniet?



                            </p>
                            <Link to='/auth/register'><button className=" px-[20px] py-[8px]  lg:px-[40px] lg:py-[12px] bg-blue-500 text-white rounded-[10px]">Get Started</button></Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>

    )
}

export default LandingPage