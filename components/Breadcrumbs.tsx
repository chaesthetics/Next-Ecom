'use client'
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { usePathname } from 'next/navigation';


const Breadcrumbs = () => {
    const paths = usePathname()
    const pathNames = paths.split('/admin/').filter( path => path );
return (
    <nav className="flex bg-white px-10 py-6 border-b-[1px]" aria-label="Breadcrumb">
    <ol className="inline-flex items-center text-black space-x-1 rtl:space-x-reverse">
        <li className="inline-flex items-center">
        <a href="#" className="inline-flex items-center text-xl font-medium hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            Admin
        </a>
        </li>
        <li aria-current="page">
        <div className="flex items-center text-xl font-medium text-black dark:text-gray-400">
            /
            <span className="ml-1">{pathNames}</span>
        </div>
        </li>
    </ol>
    </nav>
    )
}

export default Breadcrumbs;