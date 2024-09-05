'use client'

import React from "react";
import { logout } from "@/actions/auth";

const LogoutButton = () => {
    return(
        <button className="border bg-white font-bold text-blue-600 text-sm px-4 py-2 rounded-sm" onClick={()=>{logout()}}>
            Logout
        </button>
    )
}

export default LogoutButton;