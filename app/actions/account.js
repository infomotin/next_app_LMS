"use server"
import { User } from "@/model/users-model";
import { revalidatePath } from "next/cache"; 
import bcrypt from 'bcryptjs';
export async function updateUserInfo(email,updateData){
    console.log(updateData);
    try {
        const filter = {email: email};
        await User.findOneAndUpdate(filter,updateData);
        revalidatePath('/account');
    } catch (error) {
        throw new Error(error);
    }
}
//End Method 