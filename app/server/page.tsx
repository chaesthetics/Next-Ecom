import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const Server = async() => {
    const session = await auth();
    if(!session?.user){
        redirect('/');
    }
    return(
        <div>
            Welcome to middleware page 
                {session?.user && 
                <h2>{session?.user?.email}</h2>
            }
        </div>
    )
}

export default Server;