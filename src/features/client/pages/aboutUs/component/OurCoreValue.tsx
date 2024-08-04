
import { idileMajemuCore } from '../data'
import Card from '../../../../../globals/Card'

const OurCoreValue = () => {
    return (
        <div className='pt-[40px] lg:mb-[40px]'>
            <h2 className="text-center text-2xl font-bold mb-2">Idile Majemu Foundation</h2>
            <div className=" w-[100%] h-auto mx-auto  mb-[10px]  pt-[10px] md:flex md:justify-around md:items-center md:gap-x-[30px] gap-y-[20px]">

                {idileMajemuCore.map((item, index) => {
                    return (<Card image={item.imageUrl} key={index} className="py-[40px] lg:py-[50px] m-0  lg:h-[250px] lg:w-[300px] w-[100%] h-[280px]">
                        <div className="bg-black p-8 rounded shadow-lg h-full lg:flex lg:flex-col lg:justify-between lg:items-center bg-opacity-80">
                            <p className='text-white text-center text-[20px] font-bold'>{item.title}</p> <br />
                            <p className='text-[13px] text-center text-gray-300'>{item.text}</p>
                        </div>


                    </Card>)
                })}
            </div>
        </div>
    )
}

export default OurCoreValue