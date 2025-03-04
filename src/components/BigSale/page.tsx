import Image from "next/image";
import React from "react";
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
          <div className="absolute inset-0 z-10 sm:w-2/3 flex flex-col items-start justify-center text-[#18181B] px-8">
            <div className="md:px-4 md:py-5 flex flex-col justify-start items-start gap-1 md:gap-3">
              <p className="text-primary ">Big Sale</p>
              <h1 className="text-sm md:text-3xl lg:text-5xl  font-normal ">
                Choose Your Favourite Watch
              </h1>
              <p className="text-[10px] md:text-sm  font-normal ">
                The most biggest sale event in this year you dont want to miss.
              </p>
              <a className="bg-transparent text-black rounded-none hover:bg-transparent border-0">
                <div className="flex flex-col">
                  <div className="flex justify-start items-center text-xs sm:text-sm md:text-base">
                    Explore Now{" "}
                    <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 ml-2" />
                  </div>
                  <div className="bg-black w-12 sm:w-16 h-[1px]"></div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Smart Watch Promo */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-auto">
          {/* Background Color Split */}
          <div className="absolute inset-0 flex">
            <div className="w-1/2 bg-[#ECFEFF] rounded-l-lg"></div>
            <div className="w-1/2 bg-[#FEF2F2] rounded-r-lg"></div>
          </div>

          {/* Absolute Positioned Text */}
          <div className="absolute top-6 left-2 md:left-4 w-full ">
            <h1 className="text-xl sm:text-2xl font-normal ">
              Smart Watch For Smart <br />
              Person
            </h1>
            <p className="text-[10px] md:text-sm mt-1">
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
