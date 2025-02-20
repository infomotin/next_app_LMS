import React from 'react';
import { cn } from '@/lib/utils';
import  Image from 'next/image';

const Support = () => {
    return (
        <div className="bg-darkBlue text-black py-5 px-5 md:py-6 md:px-6" >
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row intems-center space-y-12 md:space-y-0 md:space-x-12 '>
                <div className='flex-1'>
                    <p className='mt-5 text-3xl font-bold leading-tight text-gray-900 font-popins'>
                        <span className="relative inline-flex sm:inline">
                            <span className="bg-gradient-to-r from-[#44bcff] via-[#ff44ec] to-[#ff675e] blur-lg filter opacity-30 w-full h-full absolute inset-0">
                               
                            </span>
                            <span className='relative'>Let us know for any support</span>
                        </span>
                    </p>
                    <p className='text-black leading-relaxed mt-8 mb-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        more text Best support team you can your choise 
                    </p>
                    <div className='flex flex-wrap gap-4'>
                    <a href="#" className='bg-fuchsia-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-fuchsia-800 transition'>Contact us</a>
                    <a href="#" className='bg-gray-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition'>Call For Support</a>
                    </div>
                </div>
                <div className='flex-1 flex justify-center items-center'>
                <Image src="/assets/images/support.png" alt="element" width={400} height={400} className='rounded-lg'/>    
                </div>
            </div>
        </div>
    );
};

export default Support;