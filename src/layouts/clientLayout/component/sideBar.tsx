import { Link } from "react-router-dom"

const SideBar = ({ handleClose }:{handleClose:()=>void}) => {
    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center text-white'>
            <button
                className='absolute top-5 right-5 text-2xl'
                onClick={handleClose}
            >
                &times;
            </button>
            <ul className='flex flex-col gap-y-6 text-center'>
                <li>Home</li>
                <li>About Us</li>
                <li>Bursery</li>
                <li>Contact Us</li>
            </ul>
        </div>
    );
};

export default SideBar;