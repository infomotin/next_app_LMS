import React from 'react';
import SiteFooter from '@/components/site-footer';

const MainLayout = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
            <SiteFooter />
        </div>
    );
};

export default MainLayout;