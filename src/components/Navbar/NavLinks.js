import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-red-700" smooth to="/#hero">
                Home
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-red-700" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-red-700" smooth to="/#services">
                Services
            </HashLink>
            {/* <HashLink className="px-4 font-extrabold text-gray-500 hover:text-red-700" smooth to="/#contact">
                Contact Us
            </HashLink> */}
         
        </>
    )
}

export default NavLinks;
