'use client'

import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { getCartItems } from "@/actions/cart";
import ContentLoader from "@/components/ContentLoader";

const Cart = () => {

    const handleChangeQuantity = (e: Event, event: any) => {
        e.preventDefault();
    }

    const handleDecrementQuantity = (e: Event) => {
        e.preventDefault();
    }

    const handleIncrementQuantity = (e: Event) => {
        e.preventDefault();
    }
    const [cartItems, setCartItems] = useState([{}]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=>{
        const getItems = async() => {
            const initItems = await getCartItems();
            setCartItems(initItems);
        }
        getItems();
        setIsLoaded(true);
    }, []);

    const numberWithCommas = (x: any) =>{
        return x?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        <div className="flex flex-col px-2 md:px-14 py-12 space-y-8 w-full">
            <span className="font-semibold text-xl">Shopping Cart</span>
            <div className="w-full flex flex-col space-y-1 overflow-x-hidden">
                {
                    !isLoaded ? 
                            
                    <div className='py-20 flex justify-center w-full items-center bg-white h-full dark:invert overflow-x-hidden'>
                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                    </div>
                    :
                    <table className="">
                        <thead>
                            <tr className="bg-gray-100 space-x-2 md:space-x-0">
                                <th className="px-2.5 py-2.5 text-start font-semibold w-[30%] md:w-[16%]">IMAGE</th>
                                <th className="px-2.5 py-2.5 text-start font-semibold w-[70%] md:w-[80%]">PRODUCT</th>
                                <th className="px-2.5 py-2.5 text-end font-semibold hidden md:block">TOTAL</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            {
                                cartItems.map((item)=>(
                                <tr className="border-t-[1px] border-gray-300">
                                    <td className="py-0 md:py-3 h-full">
                                        <div className="h-full vertical-top">
                                            <img 
                                                className="md:h-44 h-28 md:w-44 w-28 object-contain"
                                                src={item?.items?.image}
                                            />
                                        </div>
                                    </td>
                                    <td className="flex flex-col py-3 px-1 space-y-6">
                                        <div className="flex flex-col leading-4">
                                            <span className="text-lg font-normal">{item?.items?.name}</span>
                                            <span className="text-sm font-normal text-black">{item?.items?.description}</span>
                                            <span className="text-sm font-semibold text-black">{item?.items?.owner?.name}</span>
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <span className="text-sm font-light text-black">₱{numberWithCommas(item?.items?.price)}.00</span>
                                            <div className="flex flex-row space-x-2">
                                                <div className="relative w-[100px]">
                                                    <input name="quantity" onChange={handleChangeQuantity} value={1} type="number" className="focus:ring-black py-2.5 rounded-md focus:border-black active:border-black active:ring-black text-center border-none outline-none bg-gray-100 w-[100px] text-semibold text-lg"/>    
                                                    <button onClick={handleDecrementQuantity} className="h-full hover:text-yellow-500 absolute left-2 top-1/2 -translate-y-1/2"><FaMinus /></button>
                                                    <button onClick={handleIncrementQuantity} className="h-full hover:text-yellow-500 absolute right-2 top-1/2 -translate-y-1/2"><FaPlus /></button>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-xs underline hover:no-underline hover:cursor-pointer">UPDATE CART</span>
                                                    <span className="text-xs underline hover:no-underline text-yellow-500 hover:cursor-pointer">REMOVE</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-xl font-semibold align-top py-4">
                                        <span className="hidden md:block">₱{numberWithCommas(item?.items?.price)}.00</span>
                                    </td>
                                </tr>
                                ))
                            }
    
                        </tbody>
                    </table>
                }   
            </div>
        </div>
    )    
}

export default Cart;