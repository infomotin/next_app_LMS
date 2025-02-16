import React from 'react';
import { useLockBody } from '@/hooks/use-lock-body';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { buttonVariants, Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Link from 'next/link';

const MobileNav = ({ items, children }) => {
    useLockBody();
    return (
        <div className={cn("fixed inset-0 top-16 z-30 grid h-[calc(100vh-4rem)]  grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden")}>
            <div className='relative z-0 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md border'>
                <nav className='grid grid-flow-row auto-rows-max text-sm'>
                    {

                        items.map((item, index) => (
                            <Link key={index} href={item.disabled ? '#' : item.href} className={cn("flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline", item.disabled && "cursor-not-allowed opacity-60")}>
                                {item.title}
                            </Link>
                        ))

                    }
                </nav>
                <div className='items-center gap-3 flex lg:hidden'>
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
                                <Link href={'/student'}>Student</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <Link href={'/instructor'}>Instructor</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <Link href={'/logout'}>Logout</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>
        </div>
    );
};

export default MobileNav; 