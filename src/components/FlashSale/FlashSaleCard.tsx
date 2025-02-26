"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { Eye, Heart, Minus, Plus, RefreshCcw, Star } from "lucide-react";

interface IFlashSaleCardProps {
  imageUrl: string;
  brand: string;
  title: string;
  price: number;
  reviews: number;
  rating: number;
  sold: number;
  stock: number;
}

const FlashSaleCard: React.FC<IFlashSaleCardProps> = ({
  imageUrl,
  brand,
  title,
  price,
  reviews,
  rating,
  sold,
  stock,
}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-wrap gap-6 items-center border">
      {/* Product Image */}
      <div className="relative w-52 h-72 flex justify-center items-center bg-[#F5F5F4]">
        <Image
          src={imageUrl}
          alt={title}
          width={192}
          height={242}
          className="object-cover "
        />
        {/* Wishlist Button */}
        <div className="absolute top-2 right-2 grid grid-cols-1">
          <button className=" bg-red-500 text-white p-2 rounded-full shadow-md">
            <Heart size={14} />
          </button>
          <button className=" text-gray-400 p-2 rounded-full shadow-md">
            <Eye size={14} />
          </button>
          <button className="text-gray-400 p-2 rounded-full shadow-md">
            <RefreshCcw size={14} />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h5 className="text-red-500 text-sm font-semibold">{brand}</h5>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-xl font-bold text-red-500">${price.toFixed(2)}</p>

        {/* Ratings & Reviews */}
        <div className="flex items-center space-x-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`text-lg ${
                  index < rating ? "text-yellow-500 bgy5" : "text-gray-300"
                }`}
              >
                <Star />
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600">({reviews} reviews)</p>
        </div>

        {/* Stock Progress */}
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-2">
          <div
            className="bg-yellow-500 h-2"
            style={{ width: `${(sold / stock) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Sold: {sold}/{stock}
        </p>

        {/* Quantity & Add to Cart */}
        <div className="flex items-center mt-3 gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              className="px-2 py-1 text-gray-600"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus />
            </button>
            <span className="px-3 text-gray-800">{quantity}</span>
            <button
              className="px-2 py-1 text-gray-600"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus />
            </button>
          </div>
          <button className="bg-black text-white px-5 py-2 rounded-lg">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCard;
