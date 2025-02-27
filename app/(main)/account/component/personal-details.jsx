"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {useState} from "react"
const PersonalDetails = async ({userInfo}) => {
    const [infoState,setInfoState] = useState({
        "firstName":userInfo.firstName,
        "lastName":userInfo.lastName,
        "email":userInfo.email,
        "designation":userInfo.designation,
        "bio":userInfo.bio
    });

    return (
        <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
                        <form>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                <div>
                                    <Label className="mb-2 block">
                                        First Name : <span className="text-red-600">*</span>
                                    </Label>
                                    <Input
                                        type="text"
                                        placeholder="First Name:"
                                        id="firstname"
                                        name="firstName"
                                        value={userInfo.firstName}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label className="mb-2 block">
                                        Last Name : <span className="text-red-600">*</span>
                                    </Label>
                                    <Input
                                        type="text"
                                        placeholder="Last Name:"
                                        name="lastName"
                                        value={userInfo.lastName}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label className="mb-2 block">
                                        Your Email : <span className="text-red-600">*</span>
                                    </Label>
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={userInfo.email}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label className="mb-2 block">Occupation :</Label>
                                    <Input
                                        name="designation"
                                        id="occupation"
                                        type="text"
                                        value={userInfo.designation}
                                        placeholder="Occupation :"
                                    />
                                </div>
                            </div>
                            {/*end grid*/}
                            <div className="grid grid-cols-1">
                                <div className="mt-5">
                                    <Label className="mb-2 block">Description :</Label>
                                    <Textarea
                                        id="comments"
                                        name="bio"
                                        value={userInfo.bio}
                                        placeholder="Message :"
                                    />
                                </div>
                            </div>
                            {/*end row*/}
                            <Button className="mt-5" asChild>
                                <input type="submit" name="send" value="Save Changes" />
                            </Button>
                        </form>
                        {/*end form*/}
                    </div>
    );
};

export default PersonalDetails;