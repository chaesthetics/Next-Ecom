'use client'

import React from "react";
import { FaGithub } from "react-icons/fa6";
import { login } from "@/actions/auth";

const LoginGithub = () => {
    return(
        <div onClick={()=> login("github")} className="w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-black rounded-md p-4 flex justify-center items-center">
            <FaGithub className="text-white"/>
            <p className="text-white">Login With Github</p>
        </div>
    );
}

export default LoginGithub;