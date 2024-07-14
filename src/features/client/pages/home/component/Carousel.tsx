
import { useEffect, useState } from 'react';

const images = [
  'https://via.placeholder.com/600x300/0000/FFFFFF?text=Image+1',
  'https://via.placeholder.com/600x300/0000/FFFFFF?text=Image+2',
  'https://via.placeholder.com/600x300/0000/FFFFFF?text=Image+3'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className= "overflow-x-hidden relative h-[400px] group">
      <div className="">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full object-cover h-[400px]" />
      </div>
      <button
        className="absolute lg:hidden lg:group-hover:block top-1/3 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={goToPrevious}
      >
        &#10094;
      </button>
      <button
        className="absolute  lg:hidden lg:group-hover:block top-1/3 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={goToNext}
      >
        &#10095;
      </button>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-[5px] h-[5px] mx-1 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

    </div>
  );
};

export default Carousel;