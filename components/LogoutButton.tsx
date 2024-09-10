'use client'

import React from "react";
import { logout } from "@/actions/auth";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
    return(
        <div className="px-2 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100"onClick={()=>{logout()}}>
            <FiLogOut />
            <p className="text-lg md:text-sm font-medium md:font-semibold">Log Out</p>
        </div>
    )
}

export default LogoutButton;