import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const OfferCollection = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-[400px]">
      <div className="relative w-full max-w-sm">
        <div className="w-full flex justify-center">
          <Image
            src="/banner/Rectangle 338@3x.png"
            alt="Offer Image"
            width={300}
            height={400}
            className="object-contain w-auto h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Overlay Text */}
        <div className="absolute top-6 left-6 text-white">
          <h1 className="text-2xl md:text-4xl font-bold">20% OFF</h1>
          <p className="mt-1">Stylish Brand Watch</p>
          <p className="mt-1 text-sm font-light">
            Code: <span className="font-semibold">N02R5</span>
          </p>
        </div>
        {/* Button at the Bottom */}
        <div className="absolute bottom-6 left-6">
          <Button className="bg-white text-black border border-white rounded-sm hover:bg-[#e7e7ee] px-6 py-2">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OfferCollection;
