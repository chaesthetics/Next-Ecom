'use client'

import React, { useState } from "react";
import { createItem } from "@/actions/item";

const addItem =  () => {

    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState("");
    
    const handleChangeQuantity = (event:any) => {
        setQuantity(event.target.value);
    }

    const handleIncrementQuantity = () => {
        var currentQuantity = quantity;
        currentQuantity++;
        setQuantity(currentQuantity);
    }

    const handleDecrementQuantity = () => {
        var currentQuantity = quantity;
        currentQuantity--;
        setQuantity(currentQuantity);
    }

    const uploadImage = async (event:any) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        const newFile = base64 as string;
        setImage(newFile);
    };
    
    
    const convertBase64 = (file:any) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
      
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
      
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

    const submitHandler = async(formdata: FormData) =>{
        await createItem(formdata, image);
    }

return(
    <div className="flex flex-col px-3 md:px-10 py-8 md:py-4 h-full overflow-y-scroll">
        <div className="text-black text-lg">Add Item</div>
        <form action={submitHandler} className="bg-white px-6 md:px-8 py-8 space-y-1 md:space-y-2 md:space-y-4 rounded-xl shadow">
            <div className="flex flex-col md:flex-row items-start justify-center md:items-start md:justify-start py-2 space-y-4 md:space-y-0 md:space-x-12">
                <div className="flex flex-col items-start md:items-start space-y-1 md:space-y-2 w-full md:w-auto">
                    <span className="hidden md:block text-sm md:text-md text-black font-semibold">Item image</span>
                    <div className="flex items-center justify-start">
                        <label className="flex flex-col items-center justify-center px-4 h-24 md:h-32 border-2 border-blue-700 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-2 pb-2 md:pt-4 md:pb-4">
                                <svg className="h-6 h-6 md:w-8 md:h-8 text-blue-700 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-xs md:text-sm text-blue-700 dark:text-gray-400"><span className="font-light">Click to upload</span></p>
                            </div>
                            <input onChange={(e)=>uploadImage(e)} name="image" id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div> 
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col space-y-1 md:space-y-2">
                        <span className="text-sm md:text-md text-black font-semibold">Item name</span>
                        <input name="name" className="border text-sm md:text-md border-gray-300 w-full focus:outline-none px-2 py-2 rounded-md focus:border-blue-700"/>
                    </div>
                    <div className="flex flex-col pt-4 py-2 space-y-1 md:space-y-2 w-full">
                        <span className="text-sm md:text-md text-black font-semibold">Category</span>
                        <select name="category" className="text-xs md:text-sm w-full outline-none border-gray-300 active:outline-none rounded-md focus:border-blue-700">
                            <option className="text-sm md:text-md " value="Shoe">Shoe</option>
                            <option className="text-sm md:text-md " value="Pouch">Pouch</option>
                            <option className="text-sm md:text-md " value="Interrior">Interrior</option>
                            <option className="text-sm md:text-md " value="Watch">Watch</option>
                            <option className="text-sm md:text-md " value="Light">Lights</option>
                            <option className="text-sm md:text-md " value="Adapter">Adapter</option>
                            <option className="text-sm md:text-md " value="Gaming">Gaming</option>
                            <option className="text-sm md:text-md " value="Bag">Bag</option>
                        </select>
                    </div>
                </div>
            </div>  
           <hr />
            <div className="flex flex-col justify-start items-start md:justify-start md:items-start md:flex-row pt-4 py-2 space-x-0 md:space-x-12 w-full">
                <div className="flex flex-col py-2 space-y-1 md:space-y-2 w-full md:w-1/2">
                    <span className="text-sm md:text-md text-black font-semibold">Description</span>
                    <textarea name="description" id="comment" rows={6} className="w-full px-2 text-sm border-[1px] border-gray-400 rounded-lg text-gray-900 bg-white dark:bg-gray-800 focus:ring-gray-300 dark:text-white dark:placeholder-gray-400" placeholder="Write description of item" required ></textarea>
                </div>
                <div className="flex md:flex-col flex-row pt-2 py-2 md:w-auto w-full justify-between md:justify-start md:space-y-2">
                    <div className="flex flex-col space-y-1 md:space-y-2">
                        <span className="text-sm md:text-md text-black font-semibold">Price(PHP)</span>
                        <input name="price" type="number" className="border-[1px] border-gray-300 text-xs w-full focus:outline-none px-2 py-2 rounded-md focus:border-blue-700"/>
                    </div>
                    <div className="flex flex-col space-y-1 md:space-y-2">
                        <span className="text-sm md:text-md text-black font-semibold">Quantity</span>
                        <div className="relative flex items-center max-w-[8rem]">
                            <button 
                                onClick={handleDecrementQuantity} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" 
                                className="bg-gray-800 dark:bg-gray-700 dark:hover:bg-black dark:border-gray-600 hover:bg-black border rounded-s-md p-2 h-8 focus:ring-black dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                disabled={quantity<=1}
                            >
                                <svg className="w-3 h-3 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                </svg>
                            </button>
                            <input name="quantity" value={quantity} onChange={handleChangeQuantity} type="number" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-white  border-black h-8 focus:bg-none text-center text-gray-900 text-sm focus:outline-none block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="0" required />
                            <button 
                                onClick={handleIncrementQuantity} type="button" id="increment-button" data-input-counter-increment="quantity-input" 
                                className="bg-gray-800 dark:bg-gray-700 dark:hover:bg-black dark:border-gray-600 hover:bg-black border rounded-e-md p-2 h-8 focus:ring-black dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                disabled={quantity>=999}
                            >
                                <svg className="w-3 h-3 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                </svg>
                            </button>
                        </div>
                        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">(min)1 to 999(max)</p>
                    </div>
                </div>
            </div>
            <button type="submit" className="px-8 py-2 text-sm md:text-md text-white bg-blue-800 hover:bg-blue-700 hover:bg-blue-700 rounded">Add Item</button>
        </form>
    </div>
)
}

export default addItem