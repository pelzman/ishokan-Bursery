import BursaryIllustrator from "../../../../../../public/assets/images/bursaryillustrator.jpg"

const Hero = () => {
    return (
        <div className="w-[100%] h-[300px] overflow-hidden ">

            <div className="md:flex md:justify-between md:items-start md:px-[20px] ">

                <div className=" w-[100%] lg:w-[800px] px-[20px] lg:px-0">
                    <h1 className="text-[35px] italic pt-[50px] px">ABOUT US</h1>
                    <p className="text-justify ">
                        Idile Majemu Human Empowerment Foundation, Isokan, Ile-Ife was birthed in 2019 by five former members of the Cherubim & Seraphim (C&S) Fellowship (popularly known as Covenant Family or Isokan) of Obafemi Awolowo University, Ile-Ife. Motivated by a passion for promoting academic excellence, they began by sponsoring the tuition and accommodation expenses of undergraduate members within the fellowship who were excelling in their academics, but experiencing financial challenges. This initiative, which started as a bursary scheme, has evolved into a fully-fledged non-profit organization, officially registered with the Corporate Affairs Commission (CAC).
                        The foundation remains a closed membership group, exclusively open to former members of the C&S Fellowship of Obafemi Awolowo University, Ile-Ife.

                    </p>
                </div>
                <div>
                    <img src={BursaryIllustrator} alt="" className="w-[700px] h-[500px] object-cover" />
                </div>


            </div>

        </div>
    )
}

export default Hero