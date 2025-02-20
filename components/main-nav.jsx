"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './logo';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { buttonVariants, Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import MobileNav from '@/components/mobile-nev';
import { useSession } from 'next-auth/react';

const MainNav = ({ items, children }) => {
    const { data: session } = useSession();

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [loginSession, setLoginSession] = useState(null);
    //use useEffect store login data 
    useEffect(() => {
        console.log("session",session);
        setLoginSession(session);
    }, [session]);
    // const toggleMobileMenu = () => {
    //     setShowMobileMenu(!showMobileMenu);
    // }

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
                                items.map((item, index) => (
                                    <Link key={index} href={item.disabled ? '#' : item.href} className={cn("flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm")}>
                                        {item.title}
                                    </Link>
                                ))
                            }
                        </nav>
                    ) : null
                }
                {
                    showMobileMenu && items && (
                        <MobileNav items={items}>
                            {children}
                        </MobileNav>
                    )
                }
            </div>

            <nav className='flex gap-4 lg:gap-10 items-center'>
                {
                    !loginSession && (
                        <div className='items-center hidden lg:flex gap-4'>
                            <Link href={'/login'} className={cn(buttonVariants({ size: "sm" }), "px-4")}>
                                Login
                            </Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm">
                                        <Avatar>
                                            <AvatarFallback>Register </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56 space-y-2 mt-2">
                                    <DropdownMenuItem className="cursor-pointer">
                                        <Link href={'/register/student'}>Student</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="cursor-pointer">
                                        <Link href={'/register/instructor'}>Instructor</Link>
                                    </DropdownMenuItem>

                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    )
                }

                {
                    loginSession && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className='cursor-pointer hover:opacity-80 transition-all'>
                                    <Avatar >
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" size="sm" className='rounded-full max-h-[40px] max-w-[40px]' />
                                        <AvatarFallback>Profile</AvatarFallback>
                                    </Avatar>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56 space-y-2 mt-2">
                                <DropdownMenuItem className="cursor-pointer">
                                    <Link href={''}>Profile</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                    <Link href={'/certificate'}>Testimonial & Certificate</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                    <Link href={'account/courses'}>My Courses</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                    <Link href={'/logout'}>Logout</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}


                <button className='flex items-center gap-2 cursor-pointer hover:opacity-80 lg:hidden' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {showMobileMenu ? <X /> : <Menu />}
                </button>
            </nav>

        </>
    );
};

export default MainNav;

