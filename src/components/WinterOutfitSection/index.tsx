import Image from "next/image";
import React from "react";

const WinterOutfitSection = () => {
  return (
    <div className="container mx-auto px-4 py-5">
      <div className="bg-[#F5F5F4] rounded-lg shadow-sm p-6 flex flex-col md:flex-row items-center justify-between relative">
        {/* Left Content */}
        <div className="text-center md:text-left flex-1 flex flex-col justify-center items-center sm:items-start md:p-14">
          <p className="text-sm text-primary font-normal">Winter Is Coming</p>
          <h2 className="text-xl md:text-3xl font-normal mt-2 ">
            Choose Your Favourite Winter Best Outfit
          </h2>
            <a
              href="#"
              className="mt-3 text-gray-600 hover:underline font-normal text-sm flex items-center gap-1"
            >
              Shop Now →
            </a>
        </div>

        {/* Right Image (Aligned Bottom) */}
        <div className=" flex-1 flex justify-center">
          <div className="md:absolute bottom-0">
            <Image
              src="/WinterOutfit/WinterOutfitSection.png"
              alt="Winter Outfit"
              width={335}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterOutfitSection;
