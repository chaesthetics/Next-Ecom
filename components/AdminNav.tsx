import React from "react";
import Image from "next/image";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { GoTag } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { FiBell } from "react-icons/fi";

const AdminNav = () => {
    return(
        <aside className="sticky top-0 bg-red-600 flex flex-col gap-8 h-full w-auto py-10 pl-6 pr-10 border-r-[1px]">
            <Image width={100} height={50} alt="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png"
            />
            <div className="flex flex-col gap-2">
                <div className="pl-4 pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 animation-300 duration-200 hover:cursor-pointer">
                    <MdDashboard size={20}/>
                    <p className="text-md">Dashboard</p>
                </div>
                <div className="pl-4 pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 animation-300 duration-200 hover:cursor-pointer">
                    <HiOutlineColorSwatch size={20}/>
                    <p className="text-md">Products</p>
                </div>
                <div className="pl-4 pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 animation-300 duration-200 hover:cursor-pointer">
                    <GoTag size={20}/>
                    <p className="text-md">Sales</p>
                </div>
                <div className="pl-4 pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 animation-300 duration-200 hover:cursor-pointer">
                    <IoPeopleOutline size={20}/>
                    <p className="text-md">Customers</p>
                </div>
                <div className="pl-4 pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 animation-300 duration-200 hover:cursor-pointer">
                    <IoAnalytics size={20}/>
                    <p className="text-md">Analytics</p>
                </div>
                <div className="pl-4 pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 animation-300 duration-200 hover:cursor-pointer">
                    <FiBell size={20}/>
                    <p className="text-md">Notifications</p>
                </div>
            </div>
        </aside>
    )
}


export default AdminNav;