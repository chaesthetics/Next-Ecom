'use server'

import { signIn, signOut } from "@/auth"
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { saltAndHashPassword } from "@/utils/helper";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs"
import { match } from "assert";
import { AuthError } from "next-auth";

export const login = async(provider: string) => {
    await signIn(provider, { redirectTo: "/" });
    revalidatePath("/");
}

export const logout = async() => {
    await signOut({redirectTo: "/"});
    revalidatePath("/");
}

const getUserByEmail = async(email: string) => {
    try{
        const user = await db.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    }catch(error){
        console.log(error);
        return null;
    }
}
 
export const signup = async(formData: FormData) => {

    let redirectPath: string | null = null
    try{
        if(!formData.get("name") || !formData.get("password") || !formData.get("email")){
            throw new Error("Invalid fields");
        }
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        const existingUser = await getUserByEmail(email);
        console.log(existingUser);

        const isPasswordConfirm = (password === confirmPassword);
        if(!isPasswordConfirm){
            throw new Error("Password does not match");
        }
        if(existingUser){
            throw new Error("email already exist");
        }
        const hashed = saltAndHashPassword(password);
        await db.user.create({
            data : {
                name : name,
                email : email,
                hashedPassword : hashed,
                role: "ADMIN",
                image: "https://w7.pngwing.com/pngs/744/940/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon-thumbnail.png",
        }
        });
        redirectPath = '/sign-in';
    }catch(err){
        console.log(err);
        redirectPath = '/sign-up';
    }
    redirect(redirectPath);
}

export const loginWithCreds = async(formData: FormData) => {
    const rawFormData = {
        email: formData.get("email"),
        password: formData.get("password"),
        role: "ADMIN",
        redirectTo: "/",
    }
    try{
        await signIn("credentials", rawFormData);
    }catch(error:any){
        if(error instanceof AuthError){
            switch (error.type){
                case "CredentialsSignin":
                    return { error: "Invalid Credentials" };
                default:
                    return { error: "Something went wrong!" };
            }
        }
        throw error;
    }
    revalidatePath("/");
    // try{
    //     const email = formData.get("email") as string;
    //     const password = formData.get("password") as string;

    //     if(!email || !password){
    //         throw new Error("Invalid fields");
    //     }

    //     const existingUser = await getUserByEmail(email);
    //     console.log(existingUser);

    //     if(!existingUser){
    //         throw new Error("Account is not registered");
    //     }

    //     const hash = saltAndHashPassword(password);
    //     const isMatch = bcrypt.compareSync(
    //         hash, existingUser.hashedPassword as string
    //     );

    //     if(!isMatch){
    //         throw new Error("Incorrect Password");
    //     }

    //     return existingUser;
    // }catch(err){
    //     console.log(err);
    // }
}