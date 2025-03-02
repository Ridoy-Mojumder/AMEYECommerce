import Image from "next/image";
import React from "react";
import WinterCollectionContent from "./WinterCollectionContent";
import OfferCollectionContent from "./OfferCollectionContent";

const BannerContent = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/banner/Bg 1.png"
          alt="this is banner Image"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Wrapper */}
      <div className="w-full px-8 py-16">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 w-full">
          <div className="w-full lg:w-[65%]">
            <WinterCollectionContent />
          </div>
          <div className="w-full lg:w-[25%]">
            <OfferCollectionContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
