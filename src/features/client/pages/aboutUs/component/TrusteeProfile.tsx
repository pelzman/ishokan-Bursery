import { trustees } from '../data/index'
const TrusteesGrid = () => {
    return (
        <div className='w-[100%]  py-[50px] px-[20px]'>
            {trustees.map((trustee, index) => {
                return (
                    <section key={index} className='lg:flex  lg:justify-between lg:items-start lg:h-[350px] lg:gap-y-[50px] lg:my-[50px]'>

                        <div className=' w-[100%] lg:w-[40%] rounded-md s'>
                            <img src={trustee.image} alt="" className='h-[380px] w-[100%] object-center' />
                        </div>
                        <div className=' w-[100%] lg:w-[60%]  px-[20px]'>
                            <h1 className='text-bold  text-[18px]'>{trustee.name}</h1>
                            <p className='text-start w-[100%] text-[14px] not-italic font-Open-Sans'>{trustee.description}</p>
                        </div>
                    </section>
                )
            }

            )

            }


        </div>
    );
};

export default TrusteesGrid;
