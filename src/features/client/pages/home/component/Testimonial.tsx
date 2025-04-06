import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TestimonialData } from "../data";
import { Testysettings } from "../../../../../utils";

const Testimonial = () => {
    const videoLinks = [
        "https://drive.google.com/file/d/1ji6ZwcRHSn86vaPlGmxIqfgVWDjg5eLp/preview",
        "https://drive.google.com/file/d/1jsVgvH9vA8EMyoxXc0p5KZkd3TBTbqgW/preview",
        "https://drive.google.com/file/d/1k4P3NIDdRQ4kLY45KmVICMKwzD1pGP-T/preview",
    ];

    // Slider settings for video testimonials
    const videoSliderSettings = {
        ...Testysettings,
        slidesToShow: 3, // Show 3 videos at a time
        slidesToScroll: 1, // Scroll one video at a time
        responsive: [
            {
                breakpoint: 1024, // For tablets and smaller screens
                settings: {
                    slidesToShow: 2, // Show 2 videos at a time
                },
            },
            {
                breakpoint: 768, // For mobile screens
                settings: {
                    slidesToShow: 1, // Show 1 video at a time
                },
            },
        ],
    };

    return (
        <div className="pt-[40px] w-full">
            {/* Text Testimonials */}
            <h2 className="text-center text-2xl font-bold mb-6">Text Testimonials</h2>
            <div className="w-full mb-12">
                <Slider {...Testysettings}>
                    {TestimonialData.map((testimonial, index) => (
                        <div key={index} className="px-4 py-[20px]">
                            <div className="bg-white rounded-lg p-6 h-full flex flex-col justify-between">
                                <p className="text-gray-700 text-base mb-4">“{testimonial.text}”</p>
                                <p className="text-gray-900 font-bold text-right">- {testimonial.name}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Video Testimonials */}
            <h2 className="text-center text-2xl font-bold mb-6">Video Testimonials</h2>
            <div className="w-full">
                <Slider {...videoSliderSettings}>
                    {videoLinks.map((link, index) => (
                        <div key={index} className="px-4 py-[20px]">
                            <div className="bg-white rounded-lg p-6 h-full flex justify-center items-center">
                                <iframe
                                    src={link}
                                    width="100%"
                                    height="315"
                                    allow="autoplay"
                                    className="rounded-lg shadow-lg"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;