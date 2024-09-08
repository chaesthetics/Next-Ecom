import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiAlignRight } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { Button, Popover } from "flowbite-react";
import { FiSettings } from "react-icons/fi";
import { GrCircleQuestion } from "react-icons/gr";
import LogoutButton from "./LogoutButton";
import SearchDrawer from "./SearchDrawer";

const Navbar = async() => {

    const session = await auth();
    return <nav className={`backdrop-blur-sm bg-opacity-80 shadow border-black bg-white w-full flex items-center sticky top-0 z-50 ` + (session?.user ? '' : 'hidden')}>
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
                    <SearchDrawer />
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
                        <Popover
                            aria-labelledby="default-popover"
                            content={
                                <div className="flex flex-col px-4 py-4 shadow w-screen md:w-[300px] min-width-[520px] md:min-width-[400px] h-screen md:h-auto">
                                    <div className="px-2 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100">
                                        <img src={session?.user?.image} className="w-8 h-8 rounded-full"/>
                                        <p className="text-lg md:text-sm font-medium md:font-semibold">{session?.user?.name}</p>
                                    </div>
                                    <hr className="flex my-2" />
                                    <div className="px-2 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100">
                                        <FiSettings />
                                        <p className="text-lg md:text-sm font-medium md:font-semibold">Settings & privacy</p>
                                    </div>
                                    <div className="px-2 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100">
                                        <GrCircleQuestion />
                                        <p className="text-lg md:text-sm font-medium md:font-semibold">Help & Support</p>
                                    </div>
                                    <LogoutButton />
                                </div>
                            }
                            >
                            <FiAlignRight size={24}/>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    </nav>;
}

export default Navbar;