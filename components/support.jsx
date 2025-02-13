import React from 'react';
import { cn } from '@/lib/utils';
import  Image from 'next/image';

const Support = () => {
    return (
        <div className="bg-darkBlue main-h-screen px-2 py-12">
            <div className='w-full bg-blue-50 p-6 flex flex-col md:flex-row items-center pt-12 pb-10 pl-12 pr-12 justify-center'> 
                <div className='md:w-1/2 text-center md:text-left pt-5 md:pt-0 pb-10 md:pb-0'>
                    <Image src="/assets/images/one.png" alt="element" width={400} height={400} className='rounded-lg'/>
                </div>
                <div className='md:w-1/2 text-center md:text-left pt-5 md:pt-0 pb-10 md:pb-0'>
                    <h3 className="text-blue-600 font-semibold text-lg md:text-3xl mb-2">Step By Step Guide</h3>
                    <h2 className='text-3xl font-bold text-gray-800 font-heading md:text-6xl pb-10 md:pb-0 mb-2'>
                        Put Your Learning To Practice 
                    </h2>
                    <p className='text-gray-500 font-semibold text-lg mb-4 px-12 text-justify text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Support;