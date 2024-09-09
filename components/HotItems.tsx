import React from "react";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";

const HotItems = () => {
return(
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 gap-y-10">
        <div className="col-span-1 flex flex-col justify-center hover:cursor-pointer space-y-6">
            <div className="w-full flex flex-col items-center">
                <Image src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_559207393_/content_panel_list/content_panel_202207261403215910/image.casiocoreimg.jpeg/1696576019798/thumb-gshock2-bg.jpeg" 
                    alt="watch"
                    width={180}
                    height={180}
                    className="h-[180px] w-[180px] md:h-[250px] md:w-[250px]"
                />
            </div>
            <div className="flex justify-center items-center flex-col">
                <p className="text-xs md:font-semibold md:text-sm">International pro surfer Kanoa</p>
            </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center hover:cursor-pointer space-y-6">
            <div className="w-full flex flex-col items-center">
                <Image src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_559207393_/content_panel_list/content_panel_202207261403215923/image.casiocoreimg.jpeg/1696576011595/thumb-standard-bg.jpeg" 
                    alt="watch"
                    width={180}
                    height={180}
                    className="h-[180px] w-[180px] md:h-[250px] md:w-[250px]"
                />
            </div>
            <div className="flex justify-center items-center flex-col">
                <p className="text-xs md:font-semibold md:text-sm">International pro surfer Kanoa</p>
            </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center hover:cursor-pointer space-y-6">
            <div className="w-full flex flex-col items-center">
                <Image src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_559207393_/content_panel_list/content_panel_202207261403215924/image.casiocoreimg.jpeg/1696576003889/thumb-emi-bg.jpeg" 
                    alt="watch"
                    width={180}
                    height={180}
                    className="h-[180px] w-[180px] md:h-[250px] md:w-[250px]"
                />
            </div>
            <div className="flex justify-center items-center flex-col">
                <p className="text-xs md:font-semibold md:text-sm">International pro surfer Kanoa</p>
            </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center hover:cursor-pointer space-y-6">
            <div className="w-full flex flex-col items-center">
                <Image src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_559207393_/content_panel_list/content_panel_202302151455393235/image.casiocoreimg.jpeg/1696575977041/kl-820-seq1.jpeg" 
                    alt="watch"
                    width={180}
                    height={180}
                    className="h-[180px] w-[180px] md:h-[250px] md:w-[250px]"
                />
            </div>
            <div className="flex justify-center items-center flex-col">
                <p className="text-xs md:font-semibold md:text-sm">International pro surfer Kanoa</p>
            </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center hover:cursor-pointer space-y-6">
            <div className="w-full flex flex-col items-center">
                <Image src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_559207393_/content_panel_list/content_panel_202207261403215922/image.casiocoreimg.jpeg/1696575996013/thumb-fx-bg.jpeg" 
                    alt="watch"
                    width={180}
                    height={180}
                    className="h-[180px] w-[180px] md:h-[250px] md:w-[250px]"
                />
            </div>
            <div className="flex justify-center items-center flex-col">
                <p className="text-xs md:font-semibold md:text-sm">International pro surfer Kanoa</p>
            </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center hover:cursor-pointer space-y-6">
            <div className="w-full flex flex-col items-center">
                <Image src="https://www.casio.com/content/casio/locales/ph/en/products/_jcr_content/root/responsivegrid/container_559207393_/content_panel_list/content_panel_202207261408078954/image.casiocoreimg.jpeg/1696575988808/thumb-s100-bg.jpeg" 
                    alt="watch"
                    width={180}
                    height={180}
                    className="h-[180px] w-[180px] md:h-[250px] md:w-[250px]"
                />
            </div>
            <div className="flex justify-center items-center flex-col">
                <p className="text-xs md:font-semibold md:text-sm">International pro surfer Kanoa</p>
            </div>
        </div>
    </div>
);
}

export default HotItems;