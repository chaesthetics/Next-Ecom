"use client";

import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const SearchDrawer = () => {
    
    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    
    return(
        <>
        {
            width >= 539 ? 
                    <div className="flex relative items-center">
                        <input className="hidden md:flex focus:outline-none bg-white/20 border-b text-xs pl-2 pr-6 py-3 placeholder-text-green" placeholder="Search..." />
                        <div className="hover:cursor-pointer absolute right-2 mb-1">
                            <IoIosSearch size={20}/>
                        </div>
                    </div>
                :
                    <div className="flex items-center top-0">
                        <div onClick={() => setIsOpen(true)}>
                            <IoIosSearch size={20}/>
                        </div>
                    </div>

        }
           
            {
                isOpen && 
                <div className="bg-white h-screen w-full absolute left-0 top-0">
                    <div className="flex w-full h-full flex-col px-4 mt-10 space-y-14">
                        <div className="flex justify-between items-center">
                            <p className="text-black font-semibold text-lg">Search</p>
                            <MdClose onClick={handleClose} size={30}/>
                        </div>
                        <div className="flex relative items-center">
                        <input placeholder="Search..." className="flex pb-2 focus:outline-none bg-white/20 border-b border-black text-sm pr-6 w-full"/>
                        <div className="hover:cursor-pointer absolute right-2 mb-1">
                            <IoIosSearch size={20}/>
                        </div>
                    </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SearchDrawer;
