import { auth } from "@/auth";
import MyCarousel from "@/components/MyCarousel";
import MyCarousel2 from "@/components/MyCarousel2";
import NewProduct from "@/components/NewProduct";
import Image from "next/image";
import Categories from "@/components/Caterogies";

export default async function Home() {  
  const session = await auth();
  return (
    <main className="flex justify-center flex-col lg:gap-20">
      <div className="w-full lg:px-10 mt-4 lg:mt-10">
        <MyCarousel />
      </div>
      <div className="w-full px-4 lg:px-10 space-y-8 md:space-y-12 mt-24 md:mt-16">
        <h2 className="font-bold text-xl md:text-3xl mb-18">New Products</h2>
        <NewProduct />
        <div className="w-full space-y-32 md:space-y-6">
          <hr className="w-full h-[2px] mx-auto mt-20 bg-gray-500 border-1 rounded dark:bg-gray-700"/>
          <button className="flex items-center text-white text-sm px-24 py-4 bg-black m-auto">View More</button>
        </div>
        <h2 className="font-bold text-xl md:text-3xl mb-18">All Categories</h2>
        <Categories />
        <div className="w-full space-y-32 md:space-y-6">
          <hr className="w-full h-[2px] mx-auto mt-20 bg-gray-500 border-1 rounded dark:bg-gray-700"/>
        </div>
      </div>
      <div className="w-full px-4 lg:px-14 mb-20">
        <MyCarousel2 />
      </div>
    </main>
  );
}
