import Image from "next/image";
import React from "react";

const OfferCollectionContent = () => {
  return (
    <div className="flex justify-center items-center h-[347px] w-auto">
      <Image
        src="/banner/offerImage.svg"
        alt="Offer Collection"
        width={347}
        height={500}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default OfferCollectionContent;
