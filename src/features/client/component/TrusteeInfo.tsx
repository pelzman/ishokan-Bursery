
const TrusteeInfo = ({ trustee, handleCloseModal }: { trustee: any, handleCloseModal: () => void }) => {

    return (
        <div onClick={handleCloseModal} className="w-[100%] lg:rounded-lg    lg:w-[60%] h-[80%] px-[50px] mx-auto my-auto  bg-white  py-[40px]">
            <div className=" lg:flex lg:gap-x-[10px]  lg:items-start justify-center">

                <div className=" hidden  md:block md:w-[300px] md:h-[70%]">
                    <img src={trustee.imageUrl} alt="" className="  lg:h-[100%] lg:w-[300px] d" />
                </div>

                <div className=' w-[100%] lg:w-[60%]  '>
                    <h1 className='text-bold  text-[18px]'>{trustee.name}</h1>

                    <p className='text-justify w-[100%] text-[14px] not-italic font-Open-Sans'>{trustee.description}</p>
                </div>


            </div>

        </div>
    )
}

export default TrusteeInfo