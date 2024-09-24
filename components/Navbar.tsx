import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiAlignRight } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { BsCart } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { Button, Popover } from "flowbite-react";
import { FiSettings } from "react-icons/fi";
import { GrCircleQuestion } from "react-icons/gr";
import LogoutButton from "./LogoutButton";
import SearchDrawer from "./SearchDrawer";
import { CiShop } from "react-icons/ci";
import nobg from "@/public/static/images/nobg.png"
import { getCartItems } from "@/actions/cart";



const Navbar = async() => {

    const session = await auth();
    const cartItems = await getCartItems();

    return <nav className={`backdrop-blur-sm bg-opacity-80 shadow border-black bg-white w-full flex items-center sticky top-0 z-50 ` + (session?.user ? '' : 'hidden ')}>
        <div className="flex w-full items-center justify-between my-2 mx-6 md:mx-12">
            <Link className="logo font-black text-yellow-700 text-2xl flex items-center gap-1" href="/">
                <Image height={80} alt="logo" src={nobg} />
                {/* <p className="">CHAESTHETICS</p> */}
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
                        Interior Design
                    </div>
                    <div className="flex items-center hover:border-b-2 py-2 border-b-2 border-w`hite hover:border-black animation-300 duration-200 hover:cursor-pointer">
                        Gaming
                    </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                    <SearchDrawer />
                    <Link href={'/cart'} className="relative hover:cursor-pointer">
                        <BsCart size={20}/>
                        {
                            cartItems.length !== 0 &&
                            <div className="overflow-auto">
                                <div className="absolute z-50 top-[-11px] right-[-11px] px-[8px] py-[3px] rounded-full flex bg-red-600 text-white text-[9px]">{cartItems?.length}</div>
                            </div>
                        }  
                    </Link>
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
                                <div className="flex flex-col px-4 py-4 shadow w-[calc(100vw-10px)] md:w-[300px] min-width-[400px] overflow-w-hidden md:min-width-[400px] h-screen md:h-auto">
                                    <div className="px-2 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100">
                                        <img src={session?.user?.image} className="w-8 h-8 rounded-full"/>
                                        <p className="text-lg md:text-sm font-medium md:font-semibold">{session?.user?.name}</p>
                                    </div>
                                    <Link href={'/admin/dashboard'} className="px-2 py-2 rounded-md flex border-0 outline-none focus:outline-none active:outline-none items-center gap-2 hover:bg-gray-100">
                                        <CiShop size={32}/>
                                        <p className="text-lg md:text-sm font-medium md:font-semibold">View Shop</p>
                                    </Link>
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