"use client";
import React from "react";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const MyCarousel = () => {
  return (
    <Carousel className="rounded-sm max-h-[400px] h-[400px] max-w-screen">
      <img
        src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_484421656/carousel/image_1182337914_cop.casiocoreimg.jpeg/1722990357992/emi-top-pc-en-privia.jpeg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_1448162029/carousel_copy_copy_c/item_1657677372480_c_1131334841.casiocoreimg.jpeg/1711523653672/banner-edifice-efr-s108d-pc.jpeg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default MyCarousel;
