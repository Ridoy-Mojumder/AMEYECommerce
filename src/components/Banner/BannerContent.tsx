import Image from "next/image";
import React from "react";
import WinterCollection from "./WinterCollection";
import { Button } from "../ui/button";

const BannerContent = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Background Image */}
      <div className="relative w-full h-[650px]">
        <Image
          src="/banner/Bg 1.png"
          alt="this is banner Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Left Side Content */}
      <WinterCollection />

      {/* Right Side Content */}
      <div className="absolute top-1/2 right-4 md:right-20 transform -translate-y-1/2 w-[300px] md:w-[327px] h-auto">
        {/* Image Container */}
        <div className="relative">
          <Image
            src="/banner/Rectangle 338@3x.png"
            alt="this is rectangle image"
            width={400}
            height={500}
            className="w-full h-auto"
          />
          {/* Overlay Content */}
          <div className="absolute top-4 left-4 text-white w-full">
            <h1 className="text-2xl md:text-4xl font-bold">20% OFF</h1>
            <p className="mt-1">Stylish Brand Watch</p>
            <p className="mt-1 text-sm font-extralight">
              Code: <span className="font-semibold">N02R5</span>
            </p>
          </div>
          {/* Button at the Bottom */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full flex justify-start p-4">
            <Button className="bg-transparent border border-white bg-white text-black rounded-sm hover:bg-[#e7e7ee] px-6 py-2">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
