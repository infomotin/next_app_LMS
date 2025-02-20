import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./model/users-model";
import bcrypt from "bcryptjs";
import { connect } from "./service/mongo";


export const {
    handlers:{GET,POST},
    auth,
    singIn,
    signOut,
} = NextAuth({
    session:{
        strategy:"jwt"
    },
    providers: [
        CredentialsProvider({
            name:"credentials", 
            credentials: {
                email:{
                    label:"Email",
                    type:"email",
                },
                password:{
                    label:"Password",
                    type:"password",
                }
            },
            async authorize(credentials){
                const {email,password} = credentials;
                await connect();
                const user = await User.findOne({email});
                if(!user){
                    throw new Error("User not found");
                }
                const isPasswordCorrect = await bcrypt.compare(password,user.password);
                if(!isPasswordCorrect){
                    throw new Error("Incorrect password");
                }
                return user;
            }
        })
    ],
})


// export const values = NextAuth({
//     session:{
//         strategy:"jwt"
//     },
//     providers: [
//         CredentialsProvider({
//             name:"credentials", 
//             credentials: {
//                 email:email,
//                 password:password 
//             },
//             async authorize(credentials){
//                 const {email,password} = credentials;
//                 await connect();
//                 const user = await User.findOne({email});
//                 if(!user){
//                     throw new Error("User not found");
//                 }
//                 const isPasswordCorrect = await bcrypt.compare(password,user.password);
//                 if(!isPasswordCorrect){
//                     throw new Error("Incorrect password");
//                 }
//                 return user;
//             }
//         })
//     ],
// })

