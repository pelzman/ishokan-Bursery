import Card from "../../../../../globals/Card"
import { TestimonialData } from "../data"

const Testimonial = () => {
    return (
        <div className="pt-[40px] ">
            <h2 className="text-center text-2xl font-bold mb-2" >Testimonial</h2>
            <div className=" w-[100%] h-auto mx-auto  mb-[20px]  pt-[5px] md:flex md:justify-around md:items-center md:gap-x-[30px] gap-y-[20px]">

                {TestimonialData.map((item, index) => {
                    return (<Card key={index} className="py-[40px] lg:py-[40px] ">
                        <div className="lg:flex lg:flex-col lg:justify-center lg:items-center text-center">
                            <p>{item.count}</p> <br />
                            <p>{item.text}</p>
                        </div>


                    </Card>)
                })}




            </div>
        </div>

    )
}

export default Testimonial