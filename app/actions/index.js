'use server'
import  {singIn}  from "@/auth"

export async function credentialLogin(formData) {
    try {
        const credentials = {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        }
       const response = await singIn("credentials", credentials);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}