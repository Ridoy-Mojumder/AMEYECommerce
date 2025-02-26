import Image from "next/image";
import React from "react";

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
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="relative bg-[#ECFEFF] p-4 md:p-10 rounded-lg shadow-lg w-[90%] md:w-[800px] h-auto md:h-[355px] ">
          {/* Middle Image - Adjusted for proper positioning */}
          <div className="absolute flex justify-between w-1/2 top-10 right-10 transform translate-x-10 -translate-y-10">
            <Image
              src="/banner/Group 1516.png"
              alt="this is group image"
              width={380} 
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="">Best Winter <br /> Collection For You</h1>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
          </div>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="absolute top-1/2 right-4 md:right-20 transform -translate-y-1/2 w-[300px] md:w-[327px] h-auto">
        <div className="flex items-center justify-center">
          <Image
            src="/banner/Rectangle 338@3x.png"
            alt="this is rectangle image"
            width={400}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
