import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>Home</li>
                <Link to='/profile/client/about'>About Us</Link>
                <li>Bursery</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default Navbar