import BursaryIllustrator from "../../../../../../public/assets/images/bursaryillustrator.jpg"

const Hero = () => {
    return (
        <div className="w-[100%] h-[300px] overflow-hidden ">

            <div className="md:flex md:justify-between md:items-start md:px-[20px] ">

                <div className=" w-[100%] lg:w-[600px] px-[20px] lg:px-0">
                    <h1 className="text-[40px] italic pt-[50px] px">BURSARY</h1>
                    <p className="text-justify ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione molestias atque dolorum quod illo laudantium saepe harum mollitia aliquam esse minima excepturi, obcaecati eum labore temporibus! Aliquid perferendis repudiandae doloribus?
                        Reprehenderit autem amet in asperiores ea saepe ut ipsa aliquam deleniti, expedita blanditiis quod optio? Tempore impedit, dolor nam corporis, accusantium in natus at, dolorem accusamus quod dolore? Veritatis, obcaecati?
                        Reiciendis et laboriosam sequi officiis, amet odit beatae commodi veniam facere molestiae. Quam dolor cumque sunt. Quos autem suscipit necessitatibus ex praesentium ducimus quaerat! Possimus, nobis. Illo quaerat perferendis beatae!
                    </p>
                </div>
                <div>
                    <img src={BursaryIllustrator} alt="" className="w-[700px] h-[400px] object-cover" />
                </div>


            </div>

        </div>
    )
}

export default Hero