"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const MyCarousel = () => { 
  
    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <Carousel className="rounded-sm md:max-h-[400px] max-h-[500px] h-[500px] md:h-[400px] max-w-screen">
      {
        width >= 539 ?   
          <img
          src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_484421656/carousel/image_1182337914_cop.casiocoreimg.jpeg/1722990357992/emi-top-pc-en-privia.jpeg"
          alt="image 1"
          className="h-full w-full object-cover"
          /> : 
          <img
          src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_484421656/carousel/image_1182337914_cop/spImage.casiocoreimg.jpeg/1722990357992/emi-top-sp-en-privia.jpeg"
          alt="image 1"
          className="h-full w-full object-contain"
          />
      }
      {
        width >= 539 ? 
        <img
        src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_1448162029/carousel_copy_copy_c/item_1657677372480_c_1131334841.casiocoreimg.jpeg/1711523653672/banner-edifice-efr-s108d-pc.jpeg"
        alt="image 2"
        className="h-full w-full object-contain"
        /> : 
        <img
        src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_1448162029/carousel_copy_copy_c/item_1657677372480_c_1131334841/spImage.casiocoreimg.jpeg/1711523653672/efr-s108-hero-sp-en.jpeg"
        alt="image 2"
        className="h-full w-full object-contain"
        />
      }
      
    </Carousel>
  );
};

export default MyCarousel;
function useWindowSize(): { innerWidth: any; innerHeight: any; outerHeight: any; outerWidth: any; } {
  throw new Error("Function not implemented.");
}

