 'use client';
 import React from 'react';
 import {Button} from './button';
 import {cn} from '@/lib/utils';
 import { toast } from 'sonner';
 const TestText = () => {
    const clickHandler = (mode) => {
        if(mode) {
            toast.success('Success')
        } else {
            toast.error('Error')
        }
    }
     return (
         <div className={cn('flex items-center justify-center h-screen')}>
             <Button className="bg-red-500 text-white" variant="default" onClick={() => clickHandler(false)}>Test Button</Button>
         </div>
     );
 };
 
 export default TestText;