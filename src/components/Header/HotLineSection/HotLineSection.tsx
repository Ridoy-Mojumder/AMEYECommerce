import Image from "next/image";
import React from "react";

const HotLineSection = () => {
  return (
    <div className="hidden md:block">
      <div className="flex items-center gap-3 ">
        {/* Hotline Icon */}
        <Image
          src="/banner/call-center 1.png"
          alt="Hotline Icon"
          width={48}
          height={53}
          className="object-cover"
        />

        {/* Hotline Text */}
        <div className="">
          <span className="block text-sm text-[#71717A] md:text-base">
            Hot Line
          </span>
          <p className="text-lg  font-normal text-[#18181B]">
            (+990) 123456789
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotLineSection;
