'use client'

import React, { useState } from "react";
import { createItem } from "@/actions/item";

const addItem =  () => {

    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    
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
        console.log(newFile);
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

    
    const handleSubmitClick = () => {
        setIsSubmitted(true);
    }

    const submitHandler = async(formdata: FormData) => { 
        await createItem(formdata, image);
        setIsSubmitted(false);
    }


return(
    <div className="flex flex-col px-3 md:px-10 py-8 md:py-4 h-full overflow-y-scroll">
        <div className="text-black text-lg">Add Item</div>
        <form action={submitHandler} className="bg-white px-6 md:px-8 py-8 space-y-1 md:space-y-2 md:space-y-4 rounded-xl shadow">
            <div className="flex space-x-8 md:space-x-24">
                <div className="flex flex-col md:flex-row items-start justify-center md:items-start md:justify-start py-2 space-y-4 md:space-y-0 md:space-x-12">
                    <div className="flex flex-col items-start md:items-start space-y-1 md:space-y-2 w-full md:w-auto">
                        <span className="hidden md:block text-sm md:text-md text-black font-semibold">Item image</span>
                        <div className="flex items-center justify-start">
                            <label className="flex flex-col items-center justify-center px-4 h-24 md:h-32 border-2 border-yellow-700 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-2 pb-2 md:pt-4 md:pb-4">
                                    <svg className="h-6 h-6 md:w-8 md:h-8 text-yellow-700 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-xs md:text-sm text-yellow-700 dark:text-gray-400"><span className="font-light">Click to upload</span></p>
                                </div>
                                <input onChange={(e)=>uploadImage(e)} name="image" id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div> 
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col space-y-1 md:space-y-2">
                            <span className="text-sm md:text-md text-black font-semibold">Item name</span>
                            <input name="name" autoComplete="off" autoCorrect="off" autoCapitalize="off" className="border text-sm md:text-md border-gray-300 w-full focus:outline-none px-2 py-2 rounded-md focus:border-yellow-700"/>
                        </div>
                        <div className="flex flex-col pt-4 py-2 space-y-1 md:space-y-2 w-full">
                            <span className="text-sm md:text-md text-black font-semibold">Category</span>
                            <select name="category" className="text-xs md:text-sm w-full outline-none border-gray-300 active:outline-none rounded-md focus:border-yellow-700">
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
                {
                    image &&
                        <img src={`${image}`} className="rounded-md shadow-lg object-fill h-[120px] md:h-[140px] md:w-[120px] w-[100px]" alt="preview"/>
                }
            </div>  
           <hr />
            <div className="flex flex-col justify-start items-start md:justify-start md:items-start md:flex-row pt-4 py-2 space-x-0 md:space-x-12 w-full">
                <div className="flex flex-col py-2 space-y-1 md:space-y-2 w-full md:w-1/2">
                    <span className="text-sm md:text-md text-black font-semibold">Description</span>
                    <textarea name="description" id="comment" rows={6} className="w-full px-2 text-sm border-[1px] border-gray-400 rounded-lg text-gray-900 bg-white dark:bg-gray-800 focus:ring-gray-300 dark:text-white dark:placeholder-gray-400" placeholder="Write description of item"></textarea>
                </div>
                <div className="flex md:flex-col flex-row pt-2 py-2 md:w-auto w-full justify-between md:justify-start md:space-y-2">
                    <div className="flex flex-col space-y-1 md:space-y-2">
                        <span className="text-sm md:text-md text-black font-semibold">Price(PHP)</span>
                        <input name="price" type="number" className="border-[1px] border-gray-300 text-xs w-full focus:outline-none px-2 py-2 rounded-md focus:border-yellow-700"/>
                    </div>
                    <div className="flex flex-col space-y-1 md:space-y-2">
                        <span className="text-sm md:text-md text-black font-semibold">Quantity</span>
                        <div className="relative flex items-center max-w-[8rem]">
                            <button disabled={quantity<=1} onClick={handleDecrementQuantity} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                </svg>
                            </button>
                            <input type="text" name="quantity"  value={quantity} onChange={handleChangeQuantity} id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            <button disabled={quantity>=999} onClick={handleIncrementQuantity} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                </svg>
                            </button>
                        </div>
                        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">(min)1 to 999(max)</p>
                    </div>
                </div>
            </div>
            <button type="submit" onClick={handleSubmitClick} className={`w-40 py-2 text-sm md:text-md text-white bg-black rounded ` + (isSubmitted ?  'disabled ' : '' )}
            >
                {!isSubmitted ? 
                    <span>Add Item</span>
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
)
}

export default addItem