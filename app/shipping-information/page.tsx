'use client'

import React from "react";
import { useState, useEffect } from "react";
import Select from 'react-select'
import { updateShippingAddress } from "@/actions/auth";

const shippingInformation = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});

    useEffect(() => {
        fetch(
          "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
          .then((response) => response.json())
          .then((data) => {
            setCountries(data.countries);
          });
      }, []);

    
    const handleSubmit = async(formData: FormData) => {
        await updateShippingAddress(formData, selectedCountry);
    }

    return (
        <form action={handleSubmit}>
            <div className="py-8 max-w-4xl mx-auto w-full px-4 space-y-4">
                <span className="text-xl font-semibold">Shipping Information</span>
                <div className="w-full flex flex-col space-y-1">
                    <span>Address line 1</span>
                    <input name="line1" type="text" className="border border-[1px] border-gray-500 text-lg px-4 py-2 rounded-md 
                        focus:border-blue-400 focus:border-[1px] focus:ring-0 focus:outline-none
                    "/>
                </div>
                <div className="w-full flex flex-col space-y-1">
                    <span>Address line 2</span>
                    <input name="line2" type="text" className="border border-[1px] border-gray-500 text-lg px-4 py-2 rounded-md 
                        focus:border-blue-400 focus:border-[1px] focus:ring-0 focus:outline-none
                    "/>
                </div>
                <div className="w-full flex justify-between">
                    <div className="flex w-5/12 flex-col">
                        <span>Postal code</span>
                        <input name="postal_code" type="text" className="border border-[1px] border-gray-500 text-lg px-4 py-2 rounded-md 
                            focus:border-blue-400 focus:border-[1px] focus:ring-0 focus:outline-none
                        "/>
                    </div>
                    <div className="flex w-5/12 flex-col">
                        <span>City</span>
                        <input name="city" type="text" className="border border-[1px] border-gray-500 text-lg px-4 py-2 rounded-md 
                            focus:border-blue-400 focus:border-[1px] focus:ring-0 focus:outline-none
                        "/>
                    </div>
                </div>
                <div className="w-full flex flex-col space-y-1">
                    <span>State/Region</span>
                    <input name="state" type="text" className="border border-[1px] border-gray-500 text-lg px-4 py-2 rounded-md 
                        focus:border-blue-400 focus:border-[1px] focus:ring-0 focus:outline-none
                    "/>
                </div>
                <Select name="country" options={countries} onChange={(choice)=>setSelectedCountry(choice?.label)} className="text-lg focus:outline-none"/>
                <button type="submit" className="w-full flex items-center justify-center bg-black text-white
                    py-2 text-lg font-semibold rounded-md
                ">Save Address</button>
            </div>
        </form>
    )
}

export default shippingInformation;