"use client";
import { Heart, Star, ShoppingCart, Eye, RefreshCcw } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";

interface IProductCardProps {
  imageUrl: string;
  brand: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  newArrivals?: boolean;
  reviewsCount: number;
  rating: number;
  onWishlistClick?: () => void;
}

const ProductCard: React.FC<IProductCardProps> = ({
  imageUrl,
  brand,
  title,
  price,
  originalPrice,
  discount,
  newArrivals,
  reviewsCount,
  rating,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative border border-gray-300 rounded-sm p-4 shadow-sm hover:shadow-md transition duration-300  w-full md:w-72 bg-white group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount Badge */}
      {discount && (
        <div className="absolute bg-primary text-white text-xs px-2 py-1 rounded-sm top-6 left-6">
          -{discount}%
        </div>
      )}
      {newArrivals && (
        <div className="absolute bg-black text-white text-xs px-2 py-1 rounded-sm top-6 left-6">
          New
        </div>
      )}

      {/* Wishlist Icon */}

      {/* Product Image */}
      <div className="flex bg-[#F5F5F4] rounded-[5px] justify-center h-60">
        <Image
          src={imageUrl}
          alt={title}
          width={150}
          height={150}
          className="object-none w-full h-full"
        />
      </div>
      {/* Add to Cart Button */}
      <Button
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <ShoppingCart size={16} /> Add to Cart
      </Button>

      <div
        className={`absolute text-white text-xs px-2 py-1 rounded-sm top-6 right-6 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          <button className=" text-gray-400 p-2 rounded-full shadow-md">
            <Eye size={14} />
          </button>
          <button className="text-gray-400 p-2 rounded-full shadow-md">
            <RefreshCcw size={14} />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="my-4 flex flex-col gap-3 text-left">
        <div className="flex justify-between items-center">
          <p className="text-primary text-sm">{brand}</p>
          <div className=" text-gray-400 cursor-pointer hover:text-primary">
            <Heart size={20} />
          </div>
        </div>
        <h3 className="text-sm font-light">{title}</h3>

        {/* Ratings */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={i < rating ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-500 text-xs">
            ({reviewsCount} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <p className="text-primary font-bold text-lg">${price.toFixed(2)}</p>
          {originalPrice && (
            <p className="text-gray-400 line-through text-sm">
              ${originalPrice?.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
