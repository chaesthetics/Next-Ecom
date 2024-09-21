'use client'

import React, { useEffect } from "react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
// import { IoBagHandleOutline } from "react-icons/io5";
import { TbShoppingBagSearch } from "react-icons/tb";
import { getNewItems } from "@/actions/item";
import ContentLoader from "./ContentLoader";
import Link from "next/link";

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
            <ContentLoader />
            :
            newItems.map((item, key)=>(
                <div className="w-full col-span-1 flex flex-col hover:cursor-pointer md:mb-0 mb-4" key={key}>
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
                        <span className="text-[7px] md:text-[9px] text-yellow-600">Olinestore Price</span>
                        <span className="text-sm md:text-medium text-yellow-600">₱{numberWithCommas(item?.price)}.00</span>
                    </div>
                    <div className="px-2 md:px4 ">
                        <Link href={`/${item?.id}`} className="flex items-center justify-center w-full py-2 md:py-3 md:px-4 bg-black text-white text-sm md:text-md rounded-md gap-2">
                            <TbShoppingBagSearch size={20}/> View Item
                        </Link>
                    </div>  
                </div>
            ))
        }
    </div>
);
}

export default NewProduct;