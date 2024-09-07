import React from "react";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";

const NewProduct = () => {
return(
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="col-span-1 flex flex-col hover:cursor-pointer">
            <div className="w-full flex flex-col items-center py-2 px-2 bg-[#007aff] hover:bg-opacity-[0.1] bg-opacity-[0.03] gap-2">
                <div className="w-full flex justify-between">
                    <p className="bg-white rounded-sm px-1 py-1 text-[9px] md:text-xs font-semibold">International pro surfer Kanoa</p>
                    <div className="text-gray-700 hover:text-black hover:cursor-pointer">
                        <FaRegHeart size={23}/>
                    </div>
                </div>
                <Image src="https://www.casio.com/content/dam/casio/product-info/locales/ph/en/timepiece/product/watch/G/GA/GA2/ga-2100tls-8a/assets/GA-2100TLS-8A.png.transform/product-panel/image.png" 
                    alt="watch"
                    width={220}
                    height={220}
                    className="h-[180px] w-[180px] md:h-[220px] md:w-[220px]"
                />
            </div>
            <div className="flex flex-col">
                <p className="text-xs md:text-sm">G-SHOCK</p>
                <p className="text-sm md:text-md font-semibold">GLX-5600KB-1</p>
            </div>
        </div>
        <div className="col-span-1 flex flex-col hover:cursor-pointer">
            <div className="w-full flex flex-col items-center py-2 px-2 bg-[#007aff] hover:bg-opacity-[0.1] bg-opacity-[0.03] gap-2">
                <div className="w-full flex justify-between">
                    <p className="bg-white rounded-sm px-1 py-1 text-[9px] md:text-xs font-semibold">International pro surfer Kanoa</p>
                    <div className="text-gray-700 hover:text-black hover:cursor-pointer">
                        <FaRegHeart size={23}/>
                    </div>
                </div>
                <Image src="https://www.casio.com/content/dam/casio/product-info/locales/ph/en/timepiece/product/watch/G/GB/gbm/gbm-2100a-1a2/assets/GBM-2100A-1A2.png.transform/product-panel/image.png" 
                    alt="watch"
                    width={220}
                    height={220}
                    className="h-[180px] w-[180px] md:h-[220px] md:w-[220px]"
                />
            </div>
            <div className="flex flex-col">
                <p className="text-xs md:text-sm">G-SHOCK</p>
                <p className="text-sm md:text-md font-semibold">GLX-5600KB-1</p>
            </div>
        </div>
        <div className="col-span-1 flex flex-col hover:cursor-pointer">
            <div className="w-full flex flex-col items-center py-2 px-2 bg-[#007aff] hover:bg-opacity-[0.1] bg-opacity-[0.03] gap-2">
                <div className="w-full flex justify-between">
                    <p className="bg-white rounded-sm px-1 py-1 text-[9px] md:text-xs font-semibold">International pro surfer Kanoa</p>
                    <div className="text-gray-700 hover:text-black hover:cursor-pointer">
                        <FaRegHeart size={23}/>
                    </div>
                </div>
                <Image src="https://www.casio.com/content/dam/casio/product-info/locales/ph/en/timepiece/product/watch/M/MR/MRG/mrg-b2100b-1a/assets/MRG-B2100B-1A.png.transform/product-panel/image.png" 
                    alt="watch"
                    width={220}
                    height={220}
                    className="h-[180px] w-[180px] md:h-[220px] md:w-[220px]"
                />
            </div>
            <div className="flex flex-col">
                <p className="text-xs md:text-sm">G-SHOCK</p>
                <p className="text-sm md:text-md font-semibold">GLX-5600KB-1</p>
            </div>
        </div>
        <div className="col-span-1 flex flex-col hover:cursor-pointer">
            <div className="w-full flex flex-col items-center py-2 px-2 bg-[#007aff] hover:bg-opacity-[0.1] bg-opacity-[0.03] gap-2">
                <div className="w-full flex justify-between">
                    <p className="bg-white rounded-sm px-1 py-1 text-[9px] md:text-xs font-semibold">International pro surfer Kanoa</p>
                    <div className="text-gray-700 hover:text-black hover:cursor-pointer">
                        <FaRegHeart size={23}/>
                    </div>
                </div>
                <Image src="https://www.casio.com/content/dam/casio/product-info/locales/ph/en/timepiece/product/watch/G/GL/GLX/glx-5600kb-1/assets/GLX-5600KB-1.png.transform/product-panel/image.png" 
                    alt="watch"
                    width={220}
                    height={220}
                    className="h-[180px] w-[180px] md:h-[220px] md:w-[220px]"
                />
            </div>
            <div className="flex flex-col">
                <p className="text-xs md:text-sm">G-SHOCK</p>
                <p className="text-sm md:text-md font-semibold">GLX-5600KB-1</p>
            </div>
        </div>
    </div>
);
}

export default NewProduct;