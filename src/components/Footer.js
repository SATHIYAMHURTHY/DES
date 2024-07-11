import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';




const iconContainerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const defaultSvgStyle = {
  fill: 'grey', // Default color
  transition: 'fill 0.3s ease',
};

const hoverSvgStyle = {
  fill: 'red', // Color on hover
};


const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-0">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-red-700 p-8 bg-gray-50  text-red-700 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-2xl mb-4">Delta Engineering Services</h3>
                            <div className='text-md font-medium text-gray-600'>
                                {/* <h5>Delta Engineering Services</h5> */}
                                <p>No.23 Parthasarathy Street,</p>
                                <p>Muthamizh Nagar,Pammal,</p>
                                <p> Chennai - 600075.</p>
                                
                                <a href="https://maps.app.goo.gl/VgbynoVvRbZxCksG9" style={{ display: 'inline-block', width: '25px', height: '25px', position: 'relative' }}>
      <div style={iconContainerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={isHovered ? hoverSvgStyle : defaultSvgStyle}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 4.25 7 13 7 13s7-8.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
    </a>

                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-red-700 p-8 bg-gray-50 text-red-700 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-2xl mb-4">Contact Us</h3>
                            <div className='text-md font-medium text-gray-600'>
                            <ul className="text-md">
                            <li className="mb-2">
                                <p className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">Phone </p>
                            {/* <HashLink smooth to="#hero" className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">Home</HashLink> */}
                        </li>
                        <li className="mb-2">
                        <p className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">Whatsapp : +91 99623 15051</p>
                            {/* <HashLink smooth to="#about" className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink> */}
                        </li>
                        <li className="mb-2">
                            {/* <HashLink smooth to="#services" className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">E-mail</HashLink> */}
                            <p className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">E-mail</p>
                        </li>
                        <li className="mb-2">
                            {/* <HashLink smooth to="#contact" className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">E-mail : service.deltaengineering@gmail.com</HashLink> */}
                            <p className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out"> service.deltaengineering@gmail.com</p>
                        </li>                            
                        </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-red-700 p-8 bg-gray-50 text-red-700 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-2xl mb-4">Our Service</h3>
                            <div className='text-md font-medium text-gray-600'>
                            <ul className="text-md">
                        <li className="mb-2">
                            <Link to="#" className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">Pump Service</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">AMC</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">General Consultation</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">Irrigation Systems</Link>
                        </li>
                        </ul>
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    {/* <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                        <h6 className="text-[#CC1512] text-xl font-bold mb-4">LINKS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#CC1512] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#CC1512] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#CC1512] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                        </li>                            
                        </ul>
                    </div> */}

                    {/* 3rd block */}
                    {/* <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                        <h6 className="text-[#CC1512] text-xl font-bold mb-4">OUR SERVICES</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link to="#" className="text-[#CC1512] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Pump Service</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#CC1512] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">AMC</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#CC1512] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">General Consultation</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#CC1512] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Irrigation Systems</Link>
                        </li>
                        </ul>
                    </div> */}

                    {/* 4th block */}
                    {/* <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-red-700">
                        <div className="text-xl mb-6">
                            Social Media Links.
                        </div>

                                <div className="text-md font-medium mb-6">
                                    Follow us on social media.
                                </div>
                        <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li>
                                        <Link to="#" className="flex justify-center items-center text-red-700 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                        </svg>
                                        </Link>
                                    </li>
                                    <li className="ml-4">
                                        <Link to="#" className="flex justify-center items-center text-red-700 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                        </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                    </div>           */}

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        Delta Engineering Services
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;