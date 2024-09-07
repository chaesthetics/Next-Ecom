import React from "react";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";

const Categories = () => {
return(
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:gap-y-10">
        <div className="flex justify-center hover:cursor-pointer group">
            <div className="relative group">
                <Image height={220} width={220} className="object-contain group-hover:brightness-50 hover:opacity-90 animation-300 duration-200 h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                <p className="group-hover:block animation-300 duration-200 hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold">SHOES</p>
            </div>
        </div>
        <div className="flex justify-center hover:cursor-pointer group">
            <div className="relative group">
                <Image height={220} width={220} className="object-contain group-hover:brightness-50 hover:opacity-90 animation-300 duration-200 h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                <p className="group-hover:block animation-300 duration-200 hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold">POUCH</p>
            </div>
        </div>
        <div className="flex justify-center hover:cursor-pointer group">
            <div className="relative group">
                <Image height={220} width={220} className="object-contain group-hover:brightness-50 hover:opacity-90 animation-300 duration-200 h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                <p className="group-hover:block animation-300 duration-200 hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold">VASE</p>
            </div>
        </div>
        <div className="flex justify-center hover:cursor-pointer group">
            <div className="relative group">
                <Image height={220} width={220} className="object-contain group-hover:brightness-50 hover:opacity-90 animation-300 duration-200 h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                <p className="group-hover:block animation-300 duration-200 hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold">WATCH</p>
            </div>
        </div>
        <div className="flex justify-center hover:cursor-pointer group">
            <div className="relative group">
                <Image height={220} width={220} className="object-contain group-hover:brightness-50 hover:opacity-90 animation-300 duration-200 h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" />
                <p className="group-hover:block animation-300 duration-200 hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold">LIGHTS</p>
            </div>
        </div>
        <div className="flex justify-center hover:cursor-pointer group">
            <div className="relative group">
                <Image height={220} width={220} className="object-contain group-hover:brightness-50 hover:opacity-90 animation-300 duration-200 h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="" />
                <p className="group-hover:block animation-300 duration-200 hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold">ADAPTER</p>
            </div>
        </div>
        <div className="flex justify-center hover:cursor-pointer group">
            <div className="relative group">
                <Image height={220} width={220} className="object-contain group-hover:brightness-50 hover:opacity-90 animation-300 duration-200 h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="" />
                <p className="group-hover:block animation-300 duration-200 hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold">CONSOLE</p>
            </div>
        </div>
        <div className="flex justify-center hover:cursor-pointer group">
            <div className="relative group">
                <Image height={220} width={220} className="object-contain group-hover:brightness-50 hover:opacity-90 animation-300 duration-200 h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="" />
                <p className="group-hover:block animation-300 duration-200 hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold">BAG</p>
            </div>
        </div>
    </div>
);
}

export default Categories;