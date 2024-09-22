import React from "react";
import Link from "next/link";
import { signup } from "@/actions/auth";
import Footer from "@/components/Footer";

const SignUp = () =>{

    return(
        <>
        <div className="w-full flex justify-center items-center h-auto md:h-screen text-center py-32 md:py-0  px-6 md:px-0">
            <section className="flex flex-col w-[400px]">
                <h1 className="text-3xl w-full text-center font-bold mb-6">Sign up</h1>  
                <form action={signup} className="flex flex-col gap-2">
                    <input type="text" name="name" className="w-full border px-6 py-2 border-[1px] border-gray-400 rounded-md" placeholder="Enter Full name or Shop name"/>
                    <input type="text" name="email" className="w-full border px-6 py-2 border-[1px] border-gray-400 rounded-md" placeholder="Enter your email"/>
                    <input type="password" name="password" className="w-full border px-6 py-2 border-[1px] border-gray-400 rounded-md" placeholder="Enter your password"/>
                    <input type="password" name="confirmPassword" className="w-full border px-6 py-2 border-[1px] border-gray-400 rounded-md" placeholder="Confirm password"/>
                    <button className="w-full border px-6 py-2 bg-blue-600 text-white font-semibold rounded-md mt-4" type="submit">Register</button>
                </form>
                <div className="text-blue-600 flex items-center text-sm justify-center gap-1 mt-2">
                    <p className="text-black">Already have an account ?</p>
                    <Link href={'/sign-in'}>Sign in</Link>
                </div>
            </section>
        </div>
        <Footer />
        </>
    )
}

export default SignUp; 