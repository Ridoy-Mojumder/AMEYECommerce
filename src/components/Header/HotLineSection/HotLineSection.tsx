import Image from "next/image";
import React from "react";

const HotLineSection = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 ">
      {/* Hotline Icon */}
      <Image
        src="/banner/call-center 1.png"
        alt="Hotline Icon"
        width={48}
        height={53}
        className="object-contain"
      />

      {/* Hotline Text */}
      <div className="">
        <span className="block text-sm text-[#71717A] md:text-base font-semibold">Hot Line</span>
        <p className="text-lg md:text-xl font-bold text-[#18181B]">(+990) 123456789</p>
      </div>
    </div>
  );
};

export default HotLineSection;
