import React from "react";
import { Button } from "../ui/button";

const OfferCollectionContent = () => {
  return (
    <div
      className="relative h-[357px] flex items-center px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/banner/offerImage.svg')" }}
    >
      <div className=" w-full  ">
        {/* Left Content (Text) */}
        <div className="text-center md:text-left flex flex-col justify-between ">
          <div className="absolute top-6 left-6 text-white">
            <h1 className="text-3xl md:text-4xl font-light text-white leading-tight">
              20% OFF
            </h1>
            <p className="text-white text-base md:text-lg font-extralight mt-2">
              Stylish Brand Watch
            </p>
            <p className="text-white text-sm font-light mt-1">
              Code: <span className="font-semibold">N02R5</span>
            </p>
          </div>
          <div className="absolute bottom-6 md:left-6 flex justify-center items-center">
            <Button className="bg-white text-black px-6 py-3 mt-5 rounded-none hover:bg-gray-200 transition">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCollectionContent;
