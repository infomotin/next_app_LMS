import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./model/users-model";
import bcrypt from 'bcryptjs';
import { authConfig } from "./auth.config";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                if (credentials == null) return null;
                try {
                    // console.log(credentials);
                    const user = await User.findOne({ email: credentials?.email });
                    // console.log(user);
                    if (user) {
                        const isMatch = await bcrypt.compare(credentials.password, user.password)
                        if (isMatch) {
                        // console.log(user);
                            return user;
                        } else {
                            console.error("Password Mismatch");
                            throw new Error("Check your password");
                        }
                    } else {
                        console.error("User not found");
                        throw new Error("User not found");
                    }
                } catch (err) {
                    console.error(err);
                    throw new Error(err);
                }
            }
        })
    ]
});