import React from 'react';
import { cn } from '@/lib/utils';
import Logo from '@/components/logo';

const SiteFooter = () => {
    return (
        <footer>
           <div className='container flex flex-col md:flex-row items-center justify-between gap-4 md:flex-row'>
            <div className='flex flex-col items-center md:items-start gap-2 px-4 md:px-0 '>
                 <Logo />
                 <p className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 </p>
            </div>
            <div className='flex flex-col items-center md:items-end px-4 md:px-0 '>
                <p className='text-sm text-muted-foreground'>
                    &copy; {new Date().getFullYear()} EasyLMS. All rights reserved.
                </p>
            </div>
           </div>
        </footer>
    );
};

export default SiteFooter;

