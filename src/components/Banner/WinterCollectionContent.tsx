import Image from "next/image";
import React from "react";

const WinterCollectionContent = () => {
  return (
    <div className="bg-[#ECFEFF] flex justify-center items-center h-[347px]">
      <div className="container mx-auto flex">
        {/* Left Content */}
        <div className="text-center md:text-left p-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Best Winter Collection <br className="hidden md:block" />
            For You
          </h1>
          <p className="text-gray-600 text-base md:text-lg mt-3 md:mt-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
          <button className="bg-black text-white px-6 py-3 mt-5 rounded-lg hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className=" flex justify-center items-center">
        <Image
          src="/banner/Group 1516.png"
          alt="Winter Collection"
          width={400}
          height={400}
          className="object-cover "
        />
      </div>
    </div>
  );
};

export default WinterCollectionContent;
