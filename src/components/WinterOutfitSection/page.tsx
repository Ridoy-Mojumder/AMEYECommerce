import Image from "next/image";
import React from "react";

const WinterOutfitSection = () => {
  return (
    <div className="container mx-auto px-4 py-5">
      <div className="bg-[#F5F5F4] rounded-lg shadow-sm p-6 flex flex-col md:flex-row items-center justify-between relative">
        {/* Left Content */}
        <div className="text-center md:text-left flex-1 flex flex-col justify-center p-12">
          <p className="text-sm text-primary font-medium">Winter Is Coming</p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2">
            Choose Your Favourite Winter Best Outfit
          </h2>
          <div className="">
            <a
              href="#"
              className="mt-3 text-gray-600 hover:underline font-medium text-sm flex items-center gap-1"
            >
              Shop Now →
            </a>
          </div>
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
