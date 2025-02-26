import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import Menu from "./account-menu";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { getUserByEmail } from "@/queries/users";

const AccountSidebar = async () => {
    const userSession = await auth();
    //if user not login in 
    if (!userSession?.user) {
        redirect("/login");
      }
    const loginUserInfo = await getUserByEmail(userSession?.user?.email);
    // console.log(loginUserInfo);
    // const fullName = 

    return (
        <div className="lg:w-1/4 md:px-3">
            <div className="relative">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                    <div className="profile-pic text-center mb-5">
                        <input
                            id="pro-img"
                            name="profile-image"
                            type="file"
                            className="hidden"

                        />
                        <div>
                            <div className="relative size-28 mx-auto">
                                <Image
                                    src={loginUserInfo?.profilePicture}
                                    className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                                    id="profile-banner"
                                    alt={`${loginUserInfo?.profilePicture}`}
                                    width={112}
                                    height={112}
                                />
                                <label
                                    className="absolute inset-0 cursor-pointer"
                                    htmlFor="pro-img"
                                />
                            </div>
                            <div className="mt-4">
                                <h5 className="text-lg font-semibold">
                                {`${loginUserInfo?.firstName} ${loginUserInfo?.lastName}`}
                                </h5>
                                <p className="text-slate-400">
                                    {loginUserInfo?.email}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-100 dark:border-gray-700">
                        <Menu profile={loginUserInfo} auth={userSession}/>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default AccountSidebar;