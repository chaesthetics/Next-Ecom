'use client'

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
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react";

const AdminNav = () => {
    const paths = usePathname()
    const pathNames = paths.split('/admin/').filter( path => path );

    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <aside className="md:flex bg-white sticky flex flex-col gap-8 h-full w-auto py-14 md:py-10 pl-1 md:pl-6 pr-1 md:pr-10 border-r-[1px]">
            <Image width={80} height={40} alt="logo"
                src="https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png"
                className="hidden md:block ml-2 md:ml-4 w-14 md:w-20"
            />
            <div className="flex flex-col gap-4 md:gap-2">
                <Link href={'/admin/dashboard'} className={`pl-1 md:pl-4 pr-1 md:pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-yellow-50 hover:text-yellow-600 animation-300 duration-200 hover:cursor-pointer ` + (pathNames.includes('dashboard') ? 'bg-yellow-50 text-yellow-600' : '' )}>
                    { width >= 539 ? 
                    <MdDashboard size={20}/>:
                    <MdDashboard size={32}/>
                    }
                    <p className="hidden md:block text-md">Dashboard</p>
                </Link>
                <Link href={'/admin/products'}  className={`pl-1 md:pl-4 pr-1 md:pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-yellow-50 hover:text-yellow-600 animation-300 duration-200 hover:cursor-pointer ` + (pathNames.includes('products') ? 'bg-yellow-50 text-yellow-600' : '' )}>
                    { width >= 539 ? 
                    <HiOutlineColorSwatch size={20}/>:
                    <HiOutlineColorSwatch size={32}/>
                    }
                    <p className="hidden md:block text-md">Products</p>
                </Link>
                <Link href={'/admin/orders'}   className={`pl-1 md:pl-4 pr-1 md:pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-yellow-50 hover:text-yellow-600 animation-300 duration-200 hover:cursor-pointer ` + (pathNames.includes('orders') ? 'bg-yellow-50 text-yellow-600' : '' )}>
                    { width >= 539 ? 
                    <BsTruck size={20}/>:
                    <BsTruck size={32}/>
                    }
                    <p className="hidden md:block text-md">Orders</p>
                </Link>
                <Link href={'/admin/sales'}   className={`pl-1 md:pl-4 pr-1 md:pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-yellow-50 hover:text-yellow-600 animation-300 duration-200 hover:cursor-pointer ` + (pathNames.includes('sales') ? 'bg-yellow-50 text-yellow-600' : '' )}>
                    { width >= 539 ? 
                    <GoTag size={20}/>:
                    <GoTag size={32}/>
                    }
                    <p className="hidden md:block text-md">Sales</p>
                </Link>
                <Link href={'/admin/customers'}   className={`pl-1 md:pl-4 pr-1 md:pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-yellow-50 hover:text-yellow-600 animation-300 duration-200 hover:cursor-pointer ` + (pathNames.includes('customer') ? 'bg-yellow-50 text-yellow-600' : '' )}>
                    { width >= 539 ? 
                    <IoPeopleOutline size={20}/>:
                    <IoPeopleOutline size={32}/>
                    }
                    <p className="hidden md:block text-md">Customers</p>
                </Link>
                <Link href={'/admin/analytics'}   className={`pl-1 md:pl-4 pr-1 md:pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-yellow-50 hover:text-yellow-600 animation-300 duration-200 hover:cursor-pointer ` + (pathNames.includes('analytics') ? 'bg-yellow-50 text-yellow-600' : '' )}>
                    { width >= 539 ? 
                    <IoAnalytics size={20}/>:
                    <IoAnalytics size={32}/>
                    }
                    <p className="hidden md:block text-md">Analytics</p>
                </Link>
                <div className={`pl-1 md:pl-4 pr-1 md:pr-14 py-2 rounded-md flex items-center gap-2 hover:bg-yellow-50 hover:text-yellow-600 animation-300 duration-200 hover:cursor-pointer `}>
                    { width >= 539 ? 
                    <FiBell size={20}/>:
                    <FiBell size={32}/>
                    }
                    <p className="hidden md:block text-md">Notifications</p>
                </div>
            </div>
        </aside>
    )
}


export default AdminNav;