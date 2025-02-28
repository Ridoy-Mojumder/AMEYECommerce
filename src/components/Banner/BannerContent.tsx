import Image from "next/image";
import React from "react";
import WinterCollectionContent from "./WinterCollectionContent";
import OfferCollectionContent from "./OfferCollectionContent";

const BannerContent = () => {
  return (
    <div className="relative">
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
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          <WinterCollectionContent />
          <OfferCollectionContent />
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
