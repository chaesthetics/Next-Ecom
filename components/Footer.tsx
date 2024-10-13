import React from "react";
import footer from "@/public/static/images/footer.png"
import footer2 from "@/public/static/images/footer2.png"
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
return (
    <div className="flex w-full px-6 md:px-24 py-12 bg-black flex-col space-y-20">
        <div className="flex w-full justify-start md:justify-between flex-col md:flex-row space-y-12 md:space-y-0">
            <div className="flex items-center flex-col space-y-2"> 
                <Image src={footer} alt="logo" height={60}/>
                <div className="flex items-center gap-4">
                    <div className="flex text-white gap-2 text-white opacity-70"> 
                        <FaTwitter size={16} className="hover:cursor-pointer"/>
                        <FaFacebookF size={16} className="hover:cursor-pointer"/>
                        <FaLinkedinIn size={16} className="hover:cursor-pointer"/>
                        <FaPinterestP size={16} className="hover:cursor-pointer"/>
                    </div>
                </div>
            </div>
            <div className="w-full text-white md:max-w-44 space-y-6 group hover:cursor-pointer md:hover:cursor-default">
                <div className="flex w-full justify-between items-center text-white">
                    <p className="font-semibold">More About Us</p>
                    <FaChevronDown className="md:hidden block group-hover:rotate-180"/>
                </div>
                <ul className="font-thin text-sm hidden md:block group-hover:block">
                    <li className="hover:cursor-pointer md:py-0 py-2 md:px-2 px-2 duration-30 animation-300 rounded-md md-hover:black hover:bg-gray-700">Our Company</li>
                    <li className="hover:cursor-pointer md:py-0 py-2 md:px-2 px-2 duration-30 animation-300 rounded-md md-hover:black hover:bg-gray-700">Terms and Conditions</li>
                    <li className="hover:cursor-pointer md:py-0 py-2 md:px-2 px-2 duration-30 animation-300 rounded-md md-hover:black hover:bg-gray-700">Payment Confirmation</li>
                    <li className="hover:cursor-pointer md:py-0 py-2 md:px-2 px-2 duration-30 animation-300 rounded-md md-hover:black hover:bg-gray-700">Contact Us</li>
                    <li className="hover:cursor-pointer md:py-0 py-2 md:px-2 px-2 duration-30 animation-300 rounded-md md-hover:black hover:bg-gray-700">Terms of Service</li>
                    <li className="hover:cursor-pointer md:py-0 py-2 md:px-2 px-2 duration-30 animation-300 rounded-md md-hover:black hover:bg-gray-700">Refund Policy</li>
                </ul>
            </div>
            <div className="w-full text-white md:max-w-44 space-y-6 group hover:cursor-pointer md:hover:cursor-default">
                <div className="flex w-full justify-between items-center text-white">    
                    <p className="font-semibold">Downloadables</p>
                    <FaChevronDown className="md:hidden block group-hover:rotate-180"/>
                </div>
                <ul className="font-thin text-sm hidden md:block group-hover:block">
                    <li className="hover:cursor-pointer md:py-0 py-2 md:px-2 px-2 duration-30 animation-300 rounded-md md-hover:black hover:bg-gray-700">Fonts</li>
                    <li className="hover:cursor-pointer md:py-0 py-2 md:px-2 px-2 duration-30 animation-300 rounded-md md-hover:black hover:bg-gray-700">Homeware Catalog</li>
                </ul>
            </div>
            <div className="text-white space-y-6">
                <div className="space-y-6">
                    <p className="font-semibold">Let’s Talk</p>
                    <ul className="font-thin text-sm space-y-4">
                        <div className="flex gap-2 text-white fill-white">
                            <FaHeadset size={20}/>
                            <li className="hover:cursor-pointer hover:underline">aurieljames11@gmail.com</li>
                        </div>
                        <li className="md:max-w-48">For faster communication, please send us a DM on Instagram or Facebook.</li>
                    </ul>
                </div>
                <div className="max-w-48  space-y-6">
                    <p className="font-semibold">Our Office</p>
                    <ul className="font-thin text-sm">
                        <p className="text-wrap">GA Tower 6 Forbeswood
                            Heights Condominium
                            26th Street Rizal Drive,
                            Crescent Park, Bonifacio
                            Global City, Taguig 1630
                        </p>
                    </ul>
                </div>
            </div>   
        </div>
        <div className="text-white flex justify-between items-center border-t-[1px] border-white pt-6">
            <div className="flex text-sm">
                Copyright © 2024 Things Remembered | All Rights Reserved | Powered by ORYEL Inc.
            </div>
            <Image src={footer2} alt="logo" height={40}/>
        </div>
    </div>
)
}

export default Footer;