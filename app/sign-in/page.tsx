import React from "react";
import LoginGithub from "@/components/LoginGithub";
import Link from "next/link";
import { loginWithCreds } from "@/actions/auth";
import Footer from "@/components/Footer";

const SignIn = () => {
    return(
        <>
        <div className="w-full flex justify-center items-center h-auto md:h-screen text-center py-32 md:py-0  px-6 md:px-0">
            <section className="flex flex-col w-[400px]">
                <h1 className="text-3xl w-full text-center font-bold mb-6">Sign in</h1>  
                <form action={loginWithCreds} className="flex flex-col gap-2">
                    <input name="email" type="text" className="w-full border px-6 py-2 border-[1px] border-gray-400 rounded-md" placeholder="Enter your email"/>
                    <input name="password" type="password" className="w-full border px-6 py-2 border-[1px] border-gray-400 rounded-md" placeholder="Enter your password"/>
                    <button className="w-full border px-6 py-2 bg-blue-600 text-white font-semibold rounded-md mt-4" type="submit">Login</button>
                </form>
                <p className="mt-2">or</p>
                <LoginGithub />
                <div className="text-blue-600 flex items-center text-sm justify-center gap-1 mt-2">
                    <p className=" text-black">Don't you have an account ?</p>
                    <Link href={'/sign-up'}>Sign up</Link>
                </div>
            </section>
        </div>
        <Footer />
        </>
    )
}

export default SignIn;