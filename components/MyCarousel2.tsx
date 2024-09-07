"use client";
import React from "react";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const MyCarousel2 = () => {
  return (
    <Carousel className="rounded-sm max-h-[380px] h-[380px] max-w-screen">
      <img
        src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_1448162029/carousel_copy_copy_c/teaser_1775766670_co.casiocoreimg.jpeg/1724986332653/homepage-ga-700-1b-pc.jpeg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_1448162029/carousel_copy_copy_c/teaser_1775766670.casiocoreimg.jpeg/1720695569172/homepage-cordura-eco-fabric-pc-%281%29.jpeg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
       <img
        src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_1448162029/carousel_copy_copy_c/teaser_499017354.casiocoreimg.jpeg/1712302334184/homepage-itzy-pc.jpeg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
       <img
        src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_1448162029/carousel_copy_copy_c/teaser_1349148303.casiocoreimg.jpeg/1725249314613/homepage-gbm-2100a-pc.jpeg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
       <img
        src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_1448162029/carousel_copy_copy_c/item_1657677372480_c.casiocoreimg.jpeg/1722990457880/banner.jpeg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default MyCarousel2;
