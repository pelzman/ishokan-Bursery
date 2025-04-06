import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from './sideBar';
import ishokanLogo from '../../../../public/assets/images/Ishokan logo.jpeg';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [sideBar, setSideBar] = useState(false);
    const location = useLocation(); // Get the current route

    const handleToggle = () => {
        setToggle((prev) => !prev);
        setSideBar(true);
    };

    const handleClose = () => {
        setToggle(false);
        setSideBar(false);
    };

    const isActive = (path: string) =>
        location.pathname === path
            ? 'text-blue-800 font-bold bg-blue-100 px-3 py-1 rounded-lg'
            : 'text-blue-500';

    return (
        <div className='fixed z-50 px-[20px] w-[100%] flex items-center justify-between lg:justify-start lg:items-center h-[60px] bg-white text-blue-500 shadow-lg'>
            <div>
                <img src={ishokanLogo} alt="Ishokan Logo" width={75} height={75} />
            </div>
            <div className='w-[100%] flex justify-end lg:justify-end items-center'>
                <ul className='hidden lg:flex lg:justify-end lg:items-center lg:gap-x-[30px] cursor-pointer'>
                    <Link to='/' className={isActive('/')}>Home</Link>
                    <Link to='/project' className={isActive('/project')}>Projects</Link>
                    <Link to='/auth/login' className={isActive('/auth/login')}>To apply</Link>
                    <Link to='/donate' className={isActive('/donate')}>To donate</Link>
                    <Link to='/about' className={isActive('/about')}>About Us</Link>
                    <Link to='/contact' className={isActive('/contact')}>Contact Us</Link>
                </ul>

                <div
                    onClick={handleToggle}
                    className="lg:hidden flex justify-center flex-col gap-y-[5px] py-[10px] items-center align-middle bg-[#989898] rounded-sm cursor-pointer relative w-[30px] h-[30px]"
                >
                    <div
                        className={`w-[15px] h-[2px] bg-[#fff] transition-transform duration-300 absolute ${toggle ? 'rotate-45 translate-y-[5px]' : 'translate-y-[-5px]'}`}
                    ></div>
                    <div
                        className={`w-[15px] h-[2px] bg-[#fff] transition-opacity duration-300 absolute ${toggle ? 'opacity-0' : 'opacity-100 translate-y-[0px]'}`}
                    ></div>
                    <div
                        className={`w-[15px] h-[2px] bg-[#fff] transition-transform duration-300 absolute ${toggle ? '-rotate-45 translate-y-[5px]' : 'translate-y-[5px]'}`}
                    ></div>
                </div>
            </div>
            {sideBar && toggle && (
                <div className='fixed inset-0 z-50'>
                    <SideBar handleClose={handleClose} />
                </div>
            )}
        </div>
    );
};

export default Navbar;