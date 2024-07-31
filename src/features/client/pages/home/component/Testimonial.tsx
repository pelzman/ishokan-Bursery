import Card from "../../../../../globals/Card"
import { TestimonialData } from "../data"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Testysettings } from "../../../../../utils";

const Testimonial = () => {
    return (
        <div className="pt-[40px] w-full ">
            <h2 className="text-center text-2xl font-bold mb-2" >Testimonial</h2>



            <div className="w-full">
                <Slider {...Testysettings}>
                    {TestimonialData.map((testimonial, index) => (
                        <div key={index} className="px-4  py-[20px]">
                            <div className="bg-white  rounded-lg p-6 h-full flex flex-col justify-between">
                                <p className="text-gray-700 text-base mb-4">“{testimonial.text}”</p>
                                <p className="text-gray-900 font-bold text-right">- {testimonial.name}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* <div className="w-full p-4">
                <Slider {...Testysettings}>

                    <div className=" w-[1000px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {TestimonialData.map((testimonial, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between">
                                <p className="text-gray-700 text-base mb-4">“{testimonial.text}”</p>
                                <p className="text-gray-900 font-bold text-right">- {testimonial.name}</p>
                            </div>
                        ))}
                    </div>

                    <div>

                    </div>
                </Slider>
            </div> */}





        </div>

    )
}

export default Testimonial