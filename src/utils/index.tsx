
import CountUp from 'react-countup';


const getInitialCount = () => {
  const storedCount = localStorage.getItem("counter");

  return storedCount ? parseInt(storedCount, 1000) : 0;
};

const incrementCount = (count: any) => {
  const newCount = count + 20;
  localStorage.setItem("counter", newCount);
  return newCount;
};
const initialCount = getInitialCount();
export const updatedCount = incrementCount(initialCount);

export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};


const ReusableCountUp = ({ start = 0, end, duration = 2.5 }: any) => {
  return <CountUp start={start} end={end} duration={duration} />;
};



export default ReusableCountUp;
