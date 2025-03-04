"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import {
  Eye,
  Heart,
  Minus,
  Plus,
  RefreshCcw,
  ShoppingCart,
  Star,
} from "lucide-react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface IFlashSaleCardProps {
  imageUrl: string;
  brand: string;
  title: string;
  price: number;
  reviews: number;
  rating: number;
  sold: number;
  stock: number;
  description?: string;
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
  description,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("#F5F5F4"); 

  const handleWishlistClick = () => {
    setIsSelected(!isSelected);
    if (!isSelected) {
      toast.success(`${brand} is add to wishlist`);
    } else {
      toast.error(`${brand} removed from wishlist!`);
    }
  };

  const handleRefresh = () => {
    setIsSelected(false);
    setIsModalOpen(false);
    toast.success("Product refreshed!");
    setSelectedColor("#F5F5F4");
  };
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };
  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md p-4 flex flex-wrap gap-6 items-start  border"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <div className="relative w-full md:w-52 h-72 flex justify-start items-center bg-[#F5F5F4]" style={{ backgroundColor: selectedColor }}>
          <Image
            src={imageUrl}
            alt={title}
            width={192}
            height={242}
            className="object-cover "
          />
          {/* Wishlist Button */}
          <div
            className={`absolute top-2 right-2 grid grid-cols-1 gap-1 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              className={`  p-2 rounded-full shadow-md w-8 h-8 ${
                isSelected
                  ? "bg-primary text-white"
                  : "bg-white hover:bg-white text-gray-400 "
              }`}
              onClick={handleWishlistClick}
            >
              <Heart size={14} />
            </Button>
            <Button
              className=" text-gray-400 p-2 rounded-full shadow-md w-8 h-8 bg-white hover:bg-white"
              onClick={() => setIsModalOpen(true)}
            >
              <Eye size={14} />
            </Button>
            <Button
              className="text-gray-400 p-2 rounded-full shadow-md w-8 h-8 bg-white hover:bg-white"
              onClick={handleRefresh}
            >
              <RefreshCcw size={14} />
            </Button>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 gap-3 flex flex-col">
          <h5 className="text-red-500 text-sm font-normal">{brand}</h5>
          <h3 className="text-base font-normal text-gray-800">{title}</h3>
          <p className="text-xl font-normal text-red-500">
            ${price.toFixed(2)}
          </p>

          {/* Ratings & Reviews */}
          <div className="flex items-center space-x-2">
            <div className="flex justify-between items-center gap-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12.207571029663086}
                  className={
                    i < rating
                      ? "text-[#FBBF24] fill-[#FBBF24]"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">({reviews} reviews)</p>
          </div>

          {/* Color Selection */}
          <div className="flex gap-2 items-center">
            <div
              className="w-4 h-4 rounded-full bg-primary cursor-pointer shadow-sm"
              onClick={() => handleColorChange("#DC2626")} 
            ></div>
            <div
              className="w-4 h-4 rounded-full bg-[#FBBF24] cursor-pointer shadow-sm"
              onClick={() => handleColorChange("#FFEB3B")}
            ></div>
            <div
              className="w-4 h-4 rounded-full bg-[#F5F5F4] cursor-pointer shadow-sm"
              onClick={() => handleColorChange("#F5F5F4")}
            ></div>
            <div
              className="w-4 h-4 rounded-full bg-orange-400 cursor-pointer shadow-sm"
              onClick={() => handleColorChange("#FF9800")}
            ></div>
          </div>

          {/* Stock Progress */}
          <div className="w-full bg-gray-200 h-4 rounded-none overflow-hidden mt-2">
            <div
              className="bg-[#FBBF24] h-4"
              style={{ width: `${(sold / stock) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Sold: {sold}/{stock}
          </p>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center mt-3 gap-4">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <Button
                className="px-2 py-1 text-gray-600 bg-transparent hover:bg-transparent"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus />
              </Button>
              <span className="px-3 text-gray-800">{quantity}</span>
              <Button
                className="px-2 py-1 text-gray-600 bg-transparent hover:bg-transparent"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus />
              </Button>
            </div>
            <Button className="bg-black text-white px-5 py-2 rounded-lg ">
              <ShoppingCart /> Add
            </Button>
          </div>
        </div>
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-h-[80vh] overflow-y-auto p-6 md:max-w-lg bg-white rounded-xl shadow-lg">
          <DialogHeader className="border-b pb-3">
            <DialogTitle className="text-xl font-bold text-gray-900">
              {title}
            </DialogTitle>
            <DialogDescription className="text-gray-600 text-sm">
              {description}
            </DialogDescription>
          </DialogHeader>

          {/* Product Image */}
          <div className="flex bg-[#F5F5F4] rounded-xl justify-center h-60">
            <Image
              src={imageUrl}
              alt={title}
              width={150}
              height={150}
              className="object-none w-full h-full"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-3 mt-4">
            <p className="text-gray-700 text-lg font-semibold">
              Brand: {brand}
            </p>
            <p className="text-primary font-bold text-2xl">
              ${price.toFixed(2)}
            </p>

            {/* Ratings */}
            <div className="flex items-center gap-1 text-[#FBBF24] text-sm">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={
                    i < rating
                      ? "text-[#FBBF24] fill-[#FBBF24]"
                      : "text-gray-300"
                  }
                />
              ))}
              <span className="text-gray-500 text-xs">({reviews} reviews)</span>
            </div>
          </div>

          {/* Close Button */}
          <DialogFooter className="pt-4 border-t flex justify-between">
            <Button className="bg-black text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 transition-opacity duration-300">
              <ShoppingCart size={16} /> Add to Cart
            </Button>
            <Button
              onClick={() => setIsModalOpen(false)}
              className="bg-black text-white text-sm px-4 py-2 rounded-md"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FlashSaleCard;
