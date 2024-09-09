'use server'

import { signIn, signOut } from "@/auth"
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { saltAndHashPassword } from "@/utils/helper";
import { redirect } from "next/navigation";

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

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const role =  "ADMIN";

    const existingUser = await getUserByEmail(email);
    console.log(existingUser);

    const isPasswordConfirm = (password === confirmPassword);
    
    if(isPasswordConfirm){
        if(!existingUser){
            try{
                const hashed = saltAndHashPassword(password);
                await db.user.create({
                    data : {
                        name : name,
                        email : email,
                        hashedPassword : hashed,
                        role: "ADMIN",
                    }
                });
            }catch(error:any){
                console.log(error);
            };
        
        redirect('/sign-in');
        }else{
            return {error: "Email is already taken"};
        }
    }else{
        return {error: "Password does not match"};
    }
}