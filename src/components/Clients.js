import React from 'react';
import Xylem from '../images/d.png';


const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-red-700 uppercase font-bold">Authorised Service Partner</h2>
                        <div className='flex justify-center'>
                            <div className='w-56 border-b-4 border-red-900'></div>
                        </div>
                        
                    </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div >
                    
                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center ">
                            <img src={Xylem} width={1200} height={800}  alt="client" />                            
                        </div> 

                        
                                           
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;