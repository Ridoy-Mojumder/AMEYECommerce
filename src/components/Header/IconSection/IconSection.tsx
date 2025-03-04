import { Heart, RefreshCcw, ShoppingCart } from "lucide-react";
import React from "react";

const IconSection = () => {
  return (
    <div className="md:justify-items-end">
      <div className="flex flex-wrap gap-8 text-[#71717A] ">
        <RefreshCcw size={32} className="cursor-pointer" />
        <Heart size={32} className="cursor-pointer" />
        <div className="relative">
          <ShoppingCart size={32} className="cursor-pointer" />
          <span className="absolute -top-5 -right-2 text-lg bg-primary text-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default IconSection;
