import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiAlignRight } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

const Navbar = async() => {
    const session = await auth();
    return <nav className="bg-white w-full flex items-center sticky top-0 z-50">
        <div className="flex w-full items-center justify-between my-4 mx-6 md:mx-12">
            <Link className="logo font-black text-blue-800 text-2xl flex items-center gap-2" href="/">
                <Image width={30} height={30} alt="logo" src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAVFBMVEUMIU4WL2cfP4IsUqUuVqsePH4WMWkMIE0HGkAJGUMAAAAnS5gvVKcjRYwuVqsrUKEnS5glR5EiQ4ogQIQePH4bOHYYM28VL2cTK18QJlcNIk8JHEXcW5ykAAAADnRSTlPf39/t36Cfn10fAC9ZX0CfO88AAADVSURBVHjatZTNDoJADIRnNh5ITPTi+7+dR+NBvRh1BArlpymSELtL+em3pR3I8gCARDto3m4uBb2VhqkPP9HdYIYL8xAjxLA4ZJonYAIllkJMISZxh+hcZjtAtPjVpOh9NYEIY4anm7rjGgiboV0aURlBTD7w6yihmXgsv05DTfxduJbTqIWYyqRUgshpgP6ruHoxP33R++e0qXftHfJlJ0A2zI3FDCZ3sGURUriaQVrXnRDpR1UWOlfHfFKd1KH3SihpHjrjUCjK5q3S9B8/x12htAy+i+5EJWkG0ucAAAAASUVORK5CYII='} />
                <p className="hidden sm:block">CSLVEO</p>
            </Link>
            <div className="flex items-center gap-20 w-full  justify-end lg:justify-between">
                <div className="w-full hidden lg:flex items-center text-[11px] font-medium gap-10 justify-end">
                    <div className="flex items-center hover:border-b-2 py-2 border-b-2 border-white hover:border-black animation-300 duration-200 hover:cursor-pointer">
                        Watches
                    </div>
                    <div className="flex items-center hover:border-b-2 py-2 border-b-2 border-white hover:border-black animation-300 duration-200 hover:cursor-pointer">
                        Shoes
                    </div>
                    <div className="flex items-center hover:border-b-2 py-2 border-b-2 border-white hover:border-black animation-300 duration-200 hover:cursor-pointer">
                        Bags
                    </div>
                    <div className="flex items-center hover:border-b-2 py-2 border-b-2 border-white hover:border-black animation-300 duration-200 hover:cursor-pointer">
                        Gaming
                    </div>
                    <div className="flex items-center hover:border-b-2 py-2 border-b-2 border-white hover:border-black animation-300 duration-200 hover:cursor-pointer">
                        Electronics
                    </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                    <div className="flex relative items-center">
                        <input className="focus:outline-none border-b text-xs pl-2 pr-6 py-2 placeholder-text-green" placeholder="Search..." />
                        <div className="absolute right-0 mb-1">
                            <IoIosSearch size={20}/>
                        </div>
                    </div>
                    <div className="hover:cursor-pointer">
                        <FiShoppingBag size={20}/>
                    </div>
                    <div className="hover:cursor-pointer">
                        <LuHeart size={20}/>
                    </div>
                    <div className="hover:cursor-pointer">
                        <IoPersonOutline size={20}/>
                    </div>
                    <div className="hover:cursor-pointer">
                        <FiAlignRight size={24}/>
                    </div>
                </div>
            </div>
        </div>
    </nav>;
}

export default Navbar;