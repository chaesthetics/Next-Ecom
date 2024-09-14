'use client'

import React, { useState } from "react";

const addItem =  () => {

    const [quantity, setQuantity] = useState(0);
    
    const handleChangeQuantity = (event:any) => {
        setQuantity(event.target.value);
    }

    const handleIncrementQuantity = () => {
        const currentQuantity = quantity+1;
        setQuantity(currentQuantity);
    }

    const handleDecrementQuantity = () => {
        const currentQuantity = quantity;
        setQuantity(currentQuantity);
    }

return(
    <div className="flex flex-col px-3 md:px-10 py-2 md:py-4 h-full overflow-y-scroll">
        <div className="text-black text-lg">Add Item</div>
        <form className="bg-white px-2 md:px-8 py-1 space-y-4 divide-y-[2px] rounded-xl shadow">
            <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start pt-4 py-2 space-y-4 md:space-y-0 md:space-x-12">
                <div className="flex flex-col items-center md:items-start space-y-2 w-full md:w-auto">
                    <span className="hidden md:block">Item image</span>
                    <div className="flex items-center justify-start">
                        <label className="flex flex-col items-center justify-center px-4 h-32 border-2 border-blue-400 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-blue-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-4 pb-4">
                                <svg className="w-8 h-8 text-blue-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-blue-400 dark:text-gray-400"><span className="font-light">Click to upload</span></p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div> 
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col space-y-2">
                        <span>Item name</span>
                        <input className="border border-gray-300 w-full focus:outline-none px-2 py-2 rounded-md focus:border-blue-400"/>
                    </div>
                    <div className="flex flex-col pt-4 py-2 space-y-2 w-full">
                        <span>Category</span>
                        <select className="w-full outline-none border-gray-300 active:outline-none rounded-md focus:border-blue-400">
                            <option value="Shoe">Shoe</option>
                            <option value="Pouch">Pouch</option>
                            <option value="Interrior">Interrior</option>
                            <option value="Watch">Watch</option>
                            <option value="Light">Lights</option>
                            <option value="Adapter">Adapter</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Bag">Bag</option>
                        </select>
                    </div>
                </div>
            </div>  
           
            <div className="flex flex-col pt-4 py-2 space-y-2">
                <span>Description</span>
                <textarea id="comment" rows={4} className="w-full px-2 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-gray-300 dark:text-white dark:placeholder-gray-400" placeholder="Write description of item" required ></textarea>
            </div>
            <div className="flex flex-col pt-4 py-2 space-y-2">
                <span>Quantity</span>
                <div className="relative flex items-center max-w-[8rem]">
                    <button 
                        onClick={handleDecrementQuantity} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" 
                        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        disabled={quantity<=1}
                    >
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input value={quantity} onChange={handleChangeQuantity} type="number" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required />
                    <button 
                        onClick={handleIncrementQuantity} type="button" id="increment-button" data-input-counter-increment="quantity-input" 
                        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        disabled={quantity>=999}
                    >
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
                <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">(min)1 to 999(max)</p>
            </div>
        </form>
    </div>
)
}

export default addItem