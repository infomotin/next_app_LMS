import React from 'react';
import { Presentation } from "lucide-react";
import { UsersRound } from "lucide-react";
import { Star } from "lucide-react";
import { MessageSquare } from "lucide-react";
import Image from 'next/image';
const CourseInstractor = ({course}) => {
    console.log(course?.instructor);
    const fullName = course?.instructor?.firstName + " " + course?.instructor?.lastName;
    return (
        <div className="bg-gray-50 rounded-md p-8">
                            <div className="md:flex md:gap-x-5 mb-8">
                                <div className="h-[310px] w-[270px] max-w-full  flex-none rounded mb-5 md:mb-0">
                                    <Image
                                        src={course?.instructor?.profilePicture}
                                        alt={fullName}
                                        className="w-full h-full object-cover rounded"
                                        width={270}
                                        height={310}
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="max-w-[300px]">
                                        <h4 className="text-[34px] font-bold leading-[51px]">
                                            {fullName}
                                        </h4>
                                        <div className="text-gray-600 font-medium mb-6">
                                            {course?.instructor?.designation}
                                        </div>
                                        <ul className="list space-y-4">
                                            <li className="flex items-center space-x-3">
                                                <Presentation className="text-gray-600" />
                                                <div>10+ Courses</div> 
                                            </li>
                                            <li className="flex space-x-3">
                                                <UsersRound className="text-gray-600" />
                                                <div>2k+ Student Learned</div>
                                            </li>
                                            <li className="flex space-x-3">
                                                <MessageSquare className="text-gray-600" />
                                                <div>1500+ Reviews</div>
                                            </li>
                                            <li className="flex space-x-3">
                                                <Star className="text-gray-600" />
                                                <div>4.9 Average Rating</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                {course?.instructor?.bio}
                            </p>
                        </div>
    );
};

export default CourseInstractor;