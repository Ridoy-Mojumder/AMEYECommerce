import Image from "next/image";
import React from "react";
import InputWithButton from "../Input/InputWithButton";
import HotLineSection from "./HotLineSection/HotLineSection";
import IconSection from "./IconSection/IconSection";

const Navbar = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-wrap gap-6 md:gap-10 lg:gap-16">
      {/* Logo Section */}
      <div className="h-8 w-28 md:h-12 md:w-44 ">
        <Image
          src="/navbar/Logo 1 1.png"
          alt="Logo"
          height={48}
          width={176}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-1">
        <InputWithButton />
      </div>

      {/* Hotline Section - Show in larger screens */}
      <div className="hidden md:block">
        <HotLineSection />
      </div>

      {/* Icons Section */}
      <div className="">
        <IconSection />
      </div>
    </div>
  );
};

export default Navbar;
