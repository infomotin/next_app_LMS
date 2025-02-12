 import React from 'react';
 import {Button} from './button';
 import {cn} from '@/lib/utils';
 const TestText = () => {
    return (
        <div className={cn('flex items-center justify-center h-screen')}>
            <Button className="bg-red-500 text-white" variant="secondary">Test Button</Button>
        </div>
    );
 };
 
 export default TestText;