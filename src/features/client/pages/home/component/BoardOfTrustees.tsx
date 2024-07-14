// import Card from "../../../../globals/Card"
import { BoardData } from "../data"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from "../../../../../utils";

const BoardOfTrustees = () => {

    return (
        <div className="pt-10">
            <h2 className="text-center text-2xl font-bold mb-2">Board of Trustees</h2>
            <div className="w-full h-auto mx-auto mb-5 pt-[10px]">
                <Slider {...settings}>
                    {BoardData.map((item, index) => (
                        <div key={index} className="p-5">
                            <div className="bg-white p-8 rounded shadow-lg text-center">
                                <p className="text-lg font-medium">{item.name}</p>
                                <p className="text-sm mt-2">{item.position}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default BoardOfTrustees;