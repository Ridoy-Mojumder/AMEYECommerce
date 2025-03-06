"use client";
import { RootState } from "@/store/store";
import { Heart, RefreshCcw, ShoppingCart } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const IconSection = () => {
  const wishlistCount = useSelector((state: RootState) =>
    state.wishlistProduct.count.valueOf()
  );
  const addToCartCount = useSelector((state: RootState) =>
    state.addToCart.count.valueOf()
  );

  return (
    <div className="md:justify-items-end">
      <div className="flex flex-wrap gap-8 text-[#71717A] ">
        <RefreshCcw size={32} className="cursor-pointer" />
        <div className="relative">
          <Heart size={32} className="cursor-pointer" />
          {wishlistCount > 0 && (
            <span className="absolute -top-5 -right-2 text-lg bg-primary text-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
              {wishlistCount}
            </span>
          )}
        </div>
        <div className="relative">
          <ShoppingCart size={32} className="cursor-pointer" />
          {addToCartCount > 0 && (
            <span className="absolute -top-5 -right-2 text-lg bg-primary text-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
              {addToCartCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default IconSection;
