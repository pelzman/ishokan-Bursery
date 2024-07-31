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
                            <h1 className="text-4xl lg:text-6xl font-bold">Welcome to Isokan Bursary</h1>
                            <p className="text-[15px] lg:text-[20px] py-[100px] lg:py-[150px]  text-center">

                                Idile Majemu Human Empowerment Foundation, Isokan, Ile-Ife was birthed in 2019 by five former members of the Cherubim & Seraphim (C&S) Fellowship (popularly known as Covenant Family or Isokan) of Obafemi Awolowo University, Ile-Ife. Motivated by a passion for promoting academic excellence, they began by sponsoring the tuition and accommodation expenses of undergraduate members within the fellowship who were excelling in their academics, but experiencing financial challenges. This initiative, which started as a bursary scheme, has evolved into a fully-fledged non-profit organization, officially registered with the Corporate Affairs Commission (CAC).
                                The foundation remains a closed membership group, exclusively open to former members of the C&S Fellowship of Obafemi Awolowo University, Ile-Ife.

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