import React from 'react';
import img from '../images/aboutus.jpg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
                <div className='about'id='about'>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6"  >
                <h1 className="text-3xl  text-red-700 font-bold">&nbsp;</h1>
                <p>&nbsp;</p>
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-red-700 font-bold">Welcome to Delta Engineering Services!</h3>
                            <div>
                                <p className='my-3 text-xl text-justify text-gray-600 font-semibold'>Established in 2019, Delta Engineering Services stands as a trusted name in the realm of pump solutions and servicing. As an authorized dealer for industry giants Xylem and Lubi, we pride ourselves on delivering top-tier services across a comprehensive spectrum of pump-related needs.</p>
                            </div>
                            <div>
                        <p className='my-3 text-xl text-justify text-gray-600 font-semibold'>At Delta Engineering Services, our core expertise lies in the meticulous servicing of a wide array of pumps, ranging from monoblock to VT pumps, including positive displacement pumps. With a keen eye for detail and a commitment to excellence, our seasoned professionals excel in fault diagnosis and precision servicing of control panels, valves, VFDs, and other equipment integral to pump systems.</p>
                     </div>
                            
                        </div>
                        
                    </div>
                    
                    <div data-aos="zoom-in" data-aos-delay="500">
                        <p className='my-3 text-xl text-justify text-gray-600 font-semibold'>Beyond our proficiency in servicing, we specialize in the seamless installation and maintenance of irrigation equipment, ensuring optimal performance and longevity for agricultural and industrial applications alike. Our dedication to quality extends to international projects, where we offer bespoke pump solutions tailored to diverse and specialized applications.</p>
                    </div> 
                    <div data-aos="zoom-in" data-aos-delay="500">
                        <p className='my-3 text-xl text-justify text-gray-600 font-semibold'>What sets Delta Engineering Services apart is our unwavering dedication to customer satisfaction. We prioritize understanding the unique requirements of each client, offering personalized solutions that guarantee efficiency, reliability, and cost-effectiveness. Our commitment to excellence, coupled with a passion for innovation, drives us to continuously raise the bar in the realm of pump servicing and solutions.</p>
                    </div> 
                    <div data-aos="zoom-in" data-aos-delay="500">
                        <p className='my-3 text-xl text-justify text-gray-600 font-semibold'>Partner with Delta Engineering Services today and experience the difference expertise makes in optimizing your pump systems for peak performance and longevity.</p>
                    </div>        
                </div>
                </div>
        </>
    )
}

export default Intro;