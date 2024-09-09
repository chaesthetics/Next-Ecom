'use client'

import React from "react";
import { FaGithub } from "react-icons/fa6";
import { login } from "@/actions/auth";

const LoginGithub = () => {
    return(
        <div onClick={()=> login("github")} className="flex items-center justify-center gap-2 w-full border px-6 py-2 bg-black text-white font-semibold rounded-md mt-4">
            <FaGithub className="text-white"/>
            <p className="text-white">Login With Github</p>
        </div>
    );
}

export default LoginGithub;