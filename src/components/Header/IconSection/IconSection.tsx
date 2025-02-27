import { Heart, RefreshCcw, ShoppingCart } from "lucide-react";
import React from "react";

const IconSection = () => {
  return (
    <div className="flex flex-wrap gap-8 text-[#71717A] py-4">
      <RefreshCcw size={32} />
      <Heart size={32} />
      <div className="relative">
        <ShoppingCart size={32} />
        <span className="absolute -top-5 -right-2 text-lg bg-primary text-white rounded-full w-7 h-7 flex justify-center items-center">
          0
        </span>
      </div>
    </div>
  );
};

export default IconSection;
