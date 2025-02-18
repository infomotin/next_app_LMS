import React from 'react';
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from 'next/image';

const StartRating = ({ rating }) => {
    const ratings = new Array(rating).fill(0);
    console.log(ratings);
    return (
        <div>
            {ratings.map((rating, index) => (
                <Image
                    key={index}
                    src={`/assets/star.svg`}
                    alt="Rating"
                    width={20}
                    height={20}
                    style={{ display: "inline-block" }}
                />
            ))}
        </div>
    );
};

export default StartRating;