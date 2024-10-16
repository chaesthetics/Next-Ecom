import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials"; 
import { db } from "./db";
import bcrypt from "bcryptjs"
import credentials from "next-auth/providers/credentials";
import { saltAndHashPassword } from "./utils/helper";
 
export const { 
    handlers: { GET, POST },
    signIn, 
    signOut, 
    auth,
} = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    providers: [
        Github({
            clientId: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string,
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "email@example.com",
                },
                password : { label: "Password", type: "password" },
            },
            authorize: async(credentials) => {
                if(!credentials || !credentials.email || !credentials.password){
                    throw new Error("Invalid fields");
                }

                const email = credentials.email as string;
                const hash = saltAndHashPassword(credentials.password);

                let user: any = await db.user.findUnique({
                    where: {
                        email,
                    }
                });

                if(!user){
                    throw new Error("Email not registered");
                }else{
                    const isMatch = bcrypt.compareSync(
                        credentials.password as string, user.hashedPassword
                    );

                    if(!isMatch){
                        throw new Error("Incorrect Password");
                    }
                }
                return user;
            }
        }),
    ],
})