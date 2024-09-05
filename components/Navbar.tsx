import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

const Navbar = async() => {
    const session = await auth();
    return <nav className="border-b bg-background w-full flex items-center">
        <div className="flex w-full items-center justify-between my-4 mx-4 md:mx-0">
            <Link className="font-bold" href="/">
                Home
            </Link>

            <div className="flex items-center gap-x-5">
                <Link href="/middleware">Middleware</Link>
                <Link href="/server">Server</Link>
            </div>

            <div className="flex items-center gap-x-5">
                {session?.user ? 
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2 items-center">
                            {session?.user?.image && 
                                <Image className="rounded-full" height={32} width={32} src={session?.user?.image || ""} alt="image"/>
                            }
                            <h6>{session?.user?.email}</h6>
                        </div>
                        <LogoutButton />
                    </div>
                    :
                    <Link href="/sign-in">
                        <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm">Login</div>
                    </Link>
                }
                
            </div>
        </div>
    </nav>;
}

export default Navbar;