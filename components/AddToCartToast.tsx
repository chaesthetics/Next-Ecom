import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const AddToCartToast = () => {
    return(
        <div className="absolute w-screen top-0 left-0 h-screen z-50 bg-black bg-opacity-50">
            <div className="w-full h-full flex items-center justify-center">
                <div className="px-32 py-6 font-semibold text-white bg-green-600 items-center flex space-x-2">
                    <IoCheckmarkDoneSharp size={18}/>
                    <span>Added To Cart</span>
                </div>
            </div>
        </div>
    )
}

export default AddToCartToast;