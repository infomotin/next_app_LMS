import React from 'react';
import SiteFooter from '@/components/site-footer';
import MainNav from '@/components/main-nav';
const navItems = [
    {
        title: "Features",
        href: "/features", 
    },
    {
        title: "Pricing",
        href: "/pricing", 
    },
    {
        title: "Resources",
        href: "/resources", 
    },
    { 
        title: "Blog",
        href: "/blog", 
    },
];
const MainLayout = ({ children }) => {
    return (
        <div className='flex  min-h-screen flex-col'>
            <header className='z-40 bg-blackground/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b border-muted-foreground'>
                <div className='container flex h-20 items-center justify-between'>
                    <MainNav items={navItems} />
                </div>
            </header> 
            <main className='flex-1 pt-20 flex flex-col '>{children}</main>
            <SiteFooter />
        </div>
    );
};

export default MainLayout;