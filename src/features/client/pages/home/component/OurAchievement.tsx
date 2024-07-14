
import Card from '../../../../../globals/Card'
import { data } from '../data'

const OurAchievement = () => {
  return (
    <div className='pt-[40px]'>
      <h2 className="text-center text-2xl font-bold mb-2">Our Achivements</h2>
      <div className=" w-[100%] h-auto mx-auto  mb-[10px]  pt-[10px] md:flex md:justify-around md:items-center md:gap-x-[30px] gap-y-[20px]">

        {data.map((item, index) => {
          return (<Card key={index} className="py-[40px] lg:py-[40px] ">
            <div className="lg:flex lg:flex-col lg:justify-center lg:items-center text-center">
              <p className='text-[40px] font-bold'>{item.count}+</p> <br />
              <p>{item.text}</p>
            </div>


          </Card>)
        })}




      </div>
    </div>

  )
}

export default OurAchievement