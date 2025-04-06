import { projectData } from '../data/data';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? projectData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === projectData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 10000); // Change slide every 10 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div
            className="w-full h-[500px] overflow-hidden relative bg-opacity-50"
            style={{
                backgroundImage:  projectData[currentIndex].image ? `url(${projectData[currentIndex].image})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Ensure the heading is visible */}
            <div className="relative z-10 pt-[80px]">
                <h2 className="text-center text-2xl font-bold text-white mb-6">PROJECTS</h2>
            </div>

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                {/* Carousel Content */}
                <div className="text-center text-white px-4">
                    <h3 className="text-[24px] font-bold mb-2">{projectData[currentIndex].title}</h3>
                    <p className="text-[16px] text-gray-300">{projectData[currentIndex].description}</p>
                </div>

                {/* Navigation Buttons */}
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-20 hover:bg-opacity-70"
                    onClick={goToPrevious}
                >
                    &#10094;
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-20 hover:bg-opacity-70"
                    onClick={goToNext}
                >
                    &#10095;
                </button>
            </div>

            {/* Dots Navigation */}
            <div className="relative z-10 flex justify-center mt-4">
                {projectData.map((_, index) => (
                    <button
                        key={index}
                        className={`w-[12px] h-[12px] mx-2 rounded-full ${
                            currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'
                        } border-2 border-white`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Hero;