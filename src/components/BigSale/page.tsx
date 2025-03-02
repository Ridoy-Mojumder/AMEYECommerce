import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const BigSale = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Section - Big Sale Banner */}
        <div className="relative lg:col-span-2">
          <Image
            src="/BigSale/bg-image.svg"
            alt="Big Sale Background"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
          />
          {/* Overlay Content */}
          <div className="absolute top-6 md:top-8 left-6 md:left-8 z-10 sm:w-1/2 flex flex-col items-start justify-start">
            <p className="text-primary ">Big Sale</p>
            <h1 className="text-lg md:text-3xl lg:text-5xl  font-extrabold ">
              Choose Your Favourite Watch
            </h1>
            <p className="mt-1 sm:mt-2 text-base sm:text-lg mb-8">
              The most biggest sale event in this year you dont want to miss.
            </p>
            <Button className="bg-transparent text-black rounded-none hover:bg-transparent border-0 ">
              <div className="flex flex-col gap-2">
                <div className="flex justify-center items-center gap-2">
                Explore Now <ArrowRight size={32} className="w-12 h-12" />
                </div>
                <div className="bg-black w-16 h-[1px]"></div>
              </div>
            </Button>
          </div>
          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
        </div>

        {/* Right Section - Smart Watch Promo */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-auto">
          {/* Background Color Split */}
          <div className="absolute inset-0 flex">
            <div className="w-1/2 bg-[#ECFEFF] rounded-l-lg"></div>
            <div className="w-1/2 bg-[#FEF2F2] rounded-r-lg"></div>
          </div>

          {/* Absolute Positioned Text */}
          <div className="absolute top-6 left-6 md:left-10 w-full pr-8">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-700">
              Smart Watch For Smart Person
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              The biggest sale event of the year.
            </p>
          </div>

          {/* Absolute Positioned Image */}
          <div className="absolute bottom-4  md:right-8 w-full top-1/2 flex justify-center">
            <Image
              src="/BigSale/smartWatch.svg"
              alt="Smart Watch"
              width={180}
              height={180}
              className="w-auto h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSale;
