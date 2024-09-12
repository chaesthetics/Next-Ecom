import React from "react";
import Image from "next/image";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { GoTag } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { BsTruck } from "react-icons/bs";
import Link from "next/link";

const AdminNav = () => {
    return(
        <aside className="bg-white sticky top-0 flex flex-col gap-8 h-full w-auto py-10 pl-6 pr-10 border-r-[1px]">
            <Image width={80} height={40} alt="logo"
                src="https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png"
                className="ml-4"
            />
            <div className="flex flex-col gap-2">
                <Link href={'/admin/dashboard'} className="pl-4 pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 animation-300 duration-200 hover:cursor-pointer">
                    <MdDashboard size={20}/>
                    <p className="text-md">Dashboard</p>
                </Link>
                <Link href={'/admin/products'}  className="pl-4 pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 animation-300 duration-200 hover:cursor-pointer">
                    <HiOutlineColorSwatch size={20}/>
                    <p className="text-md">Products</p>
                </Link>
                <Link href={'/admin/orders'}   className="pl-4 pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 animation-300 duration-200 hover:cursor-pointer">
                    <BsTruck size={20}/>
                    <p className="text-md">Orders</p>
                </Link>
                <Link href={'/admin/sales'}   className="pl-4 pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 animation-300 duration-200 hover:cursor-pointer">
                    <GoTag size={20}/>
                    <p className="text-md">Sales</p>
                </Link>
                <Link href={'/admin/customers'}   className="pl-4 pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 animation-300 duration-200 hover:cursor-pointer">
                    <IoPeopleOutline size={20}/>
                    <p className="text-md">Customers</p>
                </Link>
                <Link href={'/admin/analytics'}   className="pl-4 pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 animation-300 duration-200 hover:cursor-pointer">
                    <IoAnalytics size={20}/>
                    <p className="text-md">Analytics</p>
                </Link>
                <div className="pl-4 pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 animation-300 duration-200 hover:cursor-pointer">
                    <FiBell size={20}/>
                    <p className="text-md">Notifications</p>
                </div>
            </div>
        </aside>
    )
}


export default AdminNav;