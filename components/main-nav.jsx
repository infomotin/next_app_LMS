import React from 'react';
import  Link  from 'next/link';
import Logo from './logo';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const MainNav = ({items,children }) => {
    return (
        <>
            <div className='flex gap-4 lg:gap-10'>
               <Link href={'/'}>
                 <Logo />
               </Link>
         {
            items?.length ? (
                <nav className='hidden gap-6 lg:flex'>
                    {
                        items.map((item,index)=>(
                            <Link key={index} href={item.disabled ? '#' : item.href} className={cn("flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm")}>
                                {item.title}
                            </Link>
                       ))
                    }
                </nav>
            ) : null
        }
            </div>
            
        </>
    );
};

export default MainNav; 

