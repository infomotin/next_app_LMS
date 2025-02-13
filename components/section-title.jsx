import {cn} from "@/lib/utils";

export const SectionTitle = ({children,className}) => {
    return (
       
            <h2 className={cn("text-2xl font-bold",className)}>{children}</h2>
        
    );
};

