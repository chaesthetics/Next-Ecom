'use client'

import React, { useEffect } from "react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import { IoBagHandleOutline } from "react-icons/io5";
import { getNewItems } from "@/actions/item";

const NewProduct = () => {
    const [newItems, setNewItems] = useState([{}]);
    useEffect(()=>{
        const getInitItems = async() => {
            const initItems = await getNewItems();
            setNewItems(initItems);
        }
        getInitItems();
    }, []);

    const numberWithCommas = (x: any) =>{
        return x?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

return(
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative">
        
        
        {
            newItems.length !== 4 ? 
            <div role="status" className="absolute left-1/2 top-1/2 w-full">
                <svg className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
            :
            newItems.map((item, key)=>(
                <div className="w-full col-span-1 flex flex-col hover:cursor-pointer" key={key}>
                    <div className="relative flex w-full items-start justify-center rounded-sm">
                        <img src={item?.image}
                            alt="watch"
                            className="w-[200px] h-[220px] md:min-w-[280px] md:w-[280px] md:min-h-[280px] md:h-[280px] aspect-square md:object-cover object-fill"
                        />
                        <div className="absolute flex justify-between md:top-3 top-2 gap-2 w-10/12">
                            <p className="bg-white rounded-sm px-1 py-1 text-[9px] md:text-xs font-semibold">
                                {item?.description}
                            </p>
                            <div className="text-gray-700 hover:text-black hover:cursor-pointer">
                                <FaRegHeart size={23}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full items-start flex-col px-2 md:px-4 py-2">
                        <p className="text-xs md:text-sm">{item?.category}</p>
                        <p className="text-md md:text-lg font-semibold">{item?.name}</p>
                    </div>
                    <div className="flex w-full items-start flex-col px-2 md:px-4 text-black font-semibold py-2 md:py-4 pt-2 md:pt-4">
                        <span className="text-[7px] md:text-[9px]">Olinestore Price</span>
                        <span className="text-sm md:text-medium">₱{numberWithCommas(item?.price)}.00</span>
                    </div>
                    <div className="px-2 md:px4 ">
                        <button className="flex items-center justify-center w-full py-2 md:py-3 md:px-4 bg-black text-white text-sm md:text-md rounded-md gap-2">
                            <IoBagHandleOutline size={20}/> Add To Cart
                        </button>
                    </div>
                </div>
            ))
        }
        {/* <div className="w-full col-span-1 flex flex-col hover:cursor-pointer">
            <div className="relative flex w-full items-start justify-center rounded-sm">
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35848a6a-4180-43b5-86a5-1caa7bf0c11b/NIKE+DUNK+LOW+RETRO.png"
                    alt="watch"
                    className="w-[200px] h-[220px] md:min-w-[280px] md:w-[280px] md:min-h-[280px] md:h-[280px] aspect-square md:object-cover object-fill"
                />
                <div className="absolute flex justify-between md:top-3 top-2 gap-2 w-10/12">
                    <p className="bg-white rounded-sm px-1 py-1 text-[9px] md:text-xs font-semibold">
                        International pro surfer Kanoa
                    </p>
                    <div className="text-gray-700 hover:text-black hover:cursor-pointer">
                        <FaRegHeart size={23}/>
                    </div>
                </div>
            </div>
            <div className="flex w-full items-start flex-col px-2 md:px-4 py-2">
                <p className="text-xs md:text-sm">G-SHOCK</p>
                <p className="text-md md:text-lg font-semibold">GLX-5600KB-1</p>
            </div>
            <div className="flex w-full items-start flex-col px-2 md:px-4 text-black font-semibold py-2 md:py-4 pt-2 md:pt-4">
                <span className="text-[7px] md:text-[9px]">Olinestore Price</span>
                <span className="text-sm md:text-medium">₱599.00</span>
            </div>
            <div className="px-2 md:px4 ">
                <button className="flex items-center justify-center w-full py-2 md:py-3 md:px-4 bg-black text-white text-sm md:text-md rounded-md gap-2">
                    <IoBagHandleOutline size={20}/> Add To Cart
                </button>
            </div>
        </div> */}
{/* 
        <div className="w-full col-span-1 flex flex-col hover:cursor-pointer">
            <div className="relative flex w-full items-start justify-center rounded-sm">
                <img src="https://thingsremembered.com.ph/cdn/shop/files/FullSizeRender_185bc4c2-a734-498f-ae50-f2d94cde7274.heic?v=1717393828"
                    alt="watch"
                    className="w-[200px] h-[220px] md:min-w-[280px] md:w-[280px] md:min-h-[280px] md:h-[280px] aspect-square md:object-cover object-fill"
                />
                <div className="absolute flex justify-between md:top-3 top-2 gap-2 w-10/12">
                    <p className="bg-white rounded-sm px-1 py-1 text-[9px] md:text-xs font-semibold">
                        International pro surfer Kanoa
                    </p>
                    <div className="text-gray-700 hover:text-black hover:cursor-pointer">
                        <FaRegHeart size={23}/>
                    </div>
                </div>
            </div>
            <div className="flex w-full items-start flex-col px-2 md:px-4 py-2">
                <p className="text-xs md:text-sm">G-SHOCK</p>
                <p className="text-md md:text-lg font-semibold">GLX-5600KB-1</p>
            </div>
            <div className="flex w-full items-start flex-col px-2 md:px-4 text-black font-semibold py-2 md:py-4 pt-2 md:pt-4">
                <span className="text-[7px] md:text-[9px]">Olinestore Price</span>
                <span className="text-sm md:text-medium">₱599.00</span>
            </div>
            <div className="px-2 md:px4 ">
                <button className="flex items-center justify-center w-full py-2 md:py-3 md:px-4 bg-black text-white text-sm md:text-md rounded-md gap-2">
                    <IoBagHandleOutline size={20}/> Add To Cart
                </button>
            </div>
        </div> */}
    </div>
);
}

export default NewProduct;