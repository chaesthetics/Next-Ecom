'use client' 

import { getItem } from "@/actions/item";
import { db } from "@/db"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import ModalClick from "@/components/ModalClick";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { addToCart } from "@/actions/cart";
import AddToCartToast from "@/components/AddToCartToast";

export default function ItemPage({ params }){
    
    const [item, setItem] = useState();
    const [quantity, setQuantity] = useState(1);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [toastAddToCart, setToastAddToCart] = useState(false);

    useEffect(()=>{
        const getInitItem = async() => {
            const initItem = await getItem(params?.id);
            setItem(initItem);
        }
        getInitItem();
    }, []);

    const numberWithCommas = (x: any) =>{
        return x?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    const handleChangeQuantity = (e: Event, event: any) => {
        e.preventDefault();
        setQuantity(event?.target?.value);
    }

    const handleDecrementQuantity = (e: Event) => {
        e.preventDefault();
        var currentQuantity = quantity;
        currentQuantity--;
        setQuantity(currentQuantity);
    }

    const handleIncrementQuantity = (e: Event) => {
        e.preventDefault();
        var currentQuantity = quantity;
        currentQuantity++;
        setQuantity(currentQuantity);
    }

    const handleAddToCartClick = async(formData: FormData) => {
        await addToCart(params?.id, formData);
        setToastAddToCart(true);
        setIsAddedToCart(false);
        setTimeout(()=>{
            setToastAddToCart(false);
        }, 3000);
    }

    const handleCartButton = () => {
        setIsAddedToCart(true);
    }

 return(
    <>
    { toastAddToCart && <AddToCartToast /> }
    <div className="flex flex-col">
        { !item ? 

    <div className="flex justify-center items-center w-full my-44">
        <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
    </div>

    :

    <div className="flex w-full md:flex-row flex-col justify-center py-12 md:py-12 px-6 space-x-0 md:space-x-4 space-y-4 md:space-x-8">
        <div className="flex flex-row w-full md:w-1/2 items-center justify-center md:justify-end">
            <img src={item?.image} className="h-[420px] w-[320px] md:h-[500px] md:w-[400px] object-cover"/>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
            <span className="text-3xl font-bold">{item?.name}</span>

            <div className="flex flex-col space-y-2 pt-2 pb-3">
                <span><b>Color:</b> Option Not Available</span>
                {/* <div className="flex gap-5">
                    <div className="hover:cursor-pointer flex justify-center items-center h-6 w-6 bg-black rounded-full text-white font-light text-xs">X</div>
                    <div className="hover:cursor-pointer flex justify-center items-center h-6 w-6 bg-red-700 rounded-full text-white font-light text-xs">X</div>
                    <div className="hover:cursor-pointer flex justify-center items-center h-6 w-6 bg-orange-600 rounded-full text-white font-light text-xs">X</div>
                    <div className="hover:cursor-pointer flex justify-center items-center h-6 w-6 bg-yellow-600 rounded-full text-white font-light text-xs">X</div>
                </div> */}
            </div>

            <div className="flex gap-2 pt-8 pb-3">
                <div className="line-through text-xl opacity-30">
                    ₱{numberWithCommas(Number(item?.price) + 1250)}.00
                </div>
                <div className="text-xl text-yellow-700 font-semibold">
                    ₱{numberWithCommas(item?.price)}.00
                </div>  
            </div>
            
            
            <div>
                <form action={handleAddToCartClick} className="flex pt-8 gap-4">
                    <div className="relative">
                        <input name="quantity" onChange={handleChangeQuantity} value={quantity} type="number" className="focus:ring-black py-2.5 rounded-md focus:border-black active:border-black active:ring-black text-center border-none outline-none bg-gray-100 w-[100px] text-semibold text-lg"/>    
                        <button disabled={quantity <= 0} onClick={handleDecrementQuantity} className="h-full hover:text-yellow-500 absolute left-2 top-1/2 -translate-y-1/2"><FaMinus /></button>
                        <button disabled={quantity >= item?.quantity} onClick={handleIncrementQuantity} className="h-full hover:text-yellow-500 absolute right-2 top-1/2 -translate-y-1/2"><FaPlus /></button>
                    </div>
                    <button onClick={handleCartButton} type="submit" className="flex font-semibold items-center justify-center gap-2 w-44 bg-black rounded-md text-white hover:bg-yellow-800 animation-400 transition-300 duration-300">
                        {
                            !isAddedToCart ?
                            <><BsCart size={20}/>Add To Cart</> 
                            :
                            <div className="flex gap-2 justify-center items-center w-full ">
                                <svg aria-hidden="true" className="inline text-gray-200 h-4 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span>Loading...</span>
                            </div>
                        }
                    </button>
                </form>
            </div>
           

            <div className="pt-4 w-[320px] space-y-4">
                
                {/* <div className="hover:cursor-pointer flex justify-center w-full gap-1 py-4 items-center bg-yellow-300 hover:bg-yellow-400 animation-300 transition-300 duration-300">
                    <p className="text-sm text-blue-800">Buy With</p>
                    <img src="https://static-00.iconduck.com/assets.00/paypal-icon-2048x547-tu0aql1a.png" className="h-4"/>
                </div> */}

                <ModalClick />

                <p className="hover:cursor-pointer text-black font-light text-sm underline text-center content-center">More payment options</p>
            </div>
            
            <div className="pt-14 text-sm font-light space-y-2 w-full">
                <div className="flex gap-4">
                    <p className="text-green-400"><b className="text-black">Availability:</b></p><p className="text-green-600 font-medium">  In Stock</p>
                </div>
                <div>
                    <p><b>Product type:</b></p>
                </div>
                <div className="flex gap-4">
                    <p ><b>Vendor:</b> </p> <p className="font-semibold">{item?.owner?.name}</p>
                </div>
                <div className="flex gap-4">
                    <p className=""><b>SKU:</b></p><p>  N/A</p>
                </div>
                <div className="flex items-center gap-4">
                    <p><b>Share:</b></p>
                    <div className="flex gap-2 text-gray-400 opacity-70"> 
                        <FaTwitter size={18}/>
                        <FaFacebookF size={18}/>
                        <FaLinkedinIn size={18}/>
                        <FaPinterestP size={18}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
    <Footer />
    </div>
    </>
 )
}