import { connect } from "@/service/mongo";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "@/model/users-model";

export const POST = async (request) => {
    const {first_Name,last_Name, email, password,phone, userRole} = await request.json();
    //console.log(firstName,lastName, email, password, userRole);

    await connect();
    const hashedPassword = await bcrypt.hash(password,5);

    const newUser = {
        first_Name,
        last_Name,
        email,
        phone,
        password:hashedPassword,
        role: userRole
    }
//    console.log(newUser);

    try {
        await User.create(newUser);
        return new NextResponse("User has been created", {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return new NextResponse(error.message, {
            status: 500,
        });
    }


}