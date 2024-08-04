// import Card from "../../../../globals/Card"
import { BoardData } from "../data"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from "../../../../../utils";
import { FaLinkedin } from "react-icons/fa6";
import { Modal } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import TrusteeInfo from "../../../component/TrusteeInfo";
const BoardOfTrustees = () => {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)

    const [trustee, setTrustee] = useState<any>({})
    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleSeemore = (item: any) => {
        setTrustee(item)
        handleOpenModal()
    }
    return (
        <div className="pt-[40px] " >
            <h2 className="text-center text-2xl font-bold mb-2">Board of Trustees</h2>
            <div className="w-full   mx-auto mb-5 pt-[10px]">
                <Slider {...settings}>
                    {BoardData.map((item, index) => (
                        <div key={index} className="p-5">
                            <div className="bg-white p-8 rounded shadow-lg  flex flex-col justify-center items-center">
                                <img src={item.imageUrl} alt="" className="w-[300px] h-[300px] rounded-full object-contain" />
                                <div className="flex items-center">
                                    <p className="text-lg font-medium mr-4">{item.name} </p>
                                    <a href={item.linkedInUrl}><FaLinkedin className="w-6 h-6 hover:text-blue-500 transition-colors duration-300" /></a>
                                </div>
                                <p className="text-sm mt-2">{item.profile}</p>
                                <div className="w-full text-right mt-2">
                                    <p onClick={() => handleSeemore(item)} className="hover:text-blue-400 text-sm">
                                        See More...
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="mt-[100px] "
            >
                <TrusteeInfo handleCloseModal={handleCloseModal} trustee={trustee} />
            </Modal>
        </div>
    );
};

export default BoardOfTrustees;