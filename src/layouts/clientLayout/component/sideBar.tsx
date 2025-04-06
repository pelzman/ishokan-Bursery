import { Link } from "react-router-dom"

const SideBar = ({ handleClose }: { handleClose: () => void }) => {


    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center text-white'>
            <button
                className='absolute top-5 right-5 text-2xl'
                onClick={handleClose}
            >
                &times;
            </button>
            <ul className='flex flex-col gap-y-6 text-center'>
                <Link onClick={handleClose} to='/'>Home</Link>
                <Link onClick={handleClose} to='/project'>Projects</Link>
                <Link onClick={handleClose} to='/auth/login'>To apply</Link>
                <Link onClick={handleClose} to='/donate'>To donate</Link>
                <Link onClick={handleClose} to='/about'>About Us</Link>
                <Link onClick={handleClose} to='/contact'>Contact Us</Link>
            </ul>
        </div>
    );
};

export default SideBar;