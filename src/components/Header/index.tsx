"use client";
import Image from "next/image";
import React from "react";
import InputWithButton from "../Input/InputWithButton";
import HotLineSection from "./HotLineSection/HotLineSection";
import IconSection from "./IconSection/IconSection";

const Navbar = () => {
  return (
    <div className="border-b ">
      <div className="container mx-auto px-4 py-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto_1fr_auto_auto] items-center gap-4 sm:gap-6 md:gap-10 lg:gap-16">
          {/* Logo Section */}
          <div className="h-8 w-28 md:h-12 md:w-44">
            <a href="">
              <Image
                src="/navbar/Logo 1 1.png"
                alt="Logo"
                height={48}
                width={176}
                className="w-full h-full object-container"
              />
            </a>
          </div>

          {/* Search Bar - Takes full width on small screens */}
          <div className="">
            <InputWithButton />
          </div>

          {/* Hotline Section - Hidden on small screens */}
          <div className="">
            <HotLineSection />
          </div>

          {/* Icons Section - Right aligned */}
          <div className="">
            <IconSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
