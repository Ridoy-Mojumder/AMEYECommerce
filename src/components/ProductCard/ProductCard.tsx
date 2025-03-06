"use client";
import { Heart, Star, ShoppingCart, Eye, RefreshCcw } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/store/features/WishlistProductCounter/WishlistProductCounterSlice";
import {
  toggleSelected,
  setSelectedFalse,
} from "@/store/features/selected/selectedSlice";
import {
  addToCart,
  removeFromCart,
} from "@/store/features/AddToCartCounter/AddToCartCounterSlice";

interface IProductCardProps {
  id?: number | string | null;
  imageUrl: string;
  brand: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  newArrivals?: boolean;
  upComing?: boolean;
  reviewsCount: number;
  rating: number;
  description?: string;
  onWishlistClick?: () => void;
}

const ProductCard: React.FC<IProductCardProps> = ({
  id,
  imageUrl,
  brand,
  title,
  price,
  originalPrice,
  discount,
  newArrivals,
  upComing,
  reviewsCount,
  rating,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const wishlistProducts = useAppSelector(
    (state) => state.wishlistProduct.items
  );
  const addToCartProducts = useAppSelector((state) => state.addToCart.items);
  const isWishlisted = wishlistProducts.some((item) => item.id === id);
  const isAddToCart = addToCartProducts.some((item) => item.id === id);
  const selectedItems = useAppSelector((state) => state.selected.selectedItems);
  const isSelected = selectedItems.includes(id?.toString());

  const handleWishlistClick = () => {
    if (!id) return;
    if (!isWishlisted) {
      const newItem = {
        id,
        imageUrl,
        brand,
        title,
        price,
        originalPrice,
        discount,
        rating,
        reviewsCount,
      };
      dispatch(addToWishlist(newItem));
      toast.success(`${brand} added to wishlist!`);
    } else {
      dispatch(removeFromWishlist(id));
      toast.error(`${brand} removed from wishlist!`);
    }
    dispatch(toggleSelected(id.toString()));
  };

  const handleAddToCartClick = () => {
    if (!id) return;
    if (!isAddToCart) {
      const newItem = {
        id,
        imageUrl,
        brand,
        title,
        price,
        originalPrice,
        discount,
        rating,
        reviewsCount,
      };
      dispatch(addToCart(newItem));
      toast.success(`${brand} added to Cart!`);
    } else {
      dispatch(removeFromCart(id));
      toast.error(`${brand} removed from Cart!`);
    }
  };

  const handleRefresh = () => {
    setIsModalOpen(false);
    toast.success("Product refreshed!");
    dispatch(setSelectedFalse(id.toString()));
    dispatch(removeFromWishlist(id));
    dispatch(removeFromCart(id));
    // dispatch(decrement());
  };

  return (
    <>
      <div
        className="relative border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300  w-full md:w-72 bg-white group"
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
        {upComing && (
          <div className="absolute bg-primary text-white text-xs px-2 py-1 rounded-sm top-6 left-6">
            Up Coming
          </div>
        )}

        <div className="flex bg-[#F5F5F4] rounded-xl justify-center h-60">
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
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2  text-sm px-4 py-2 rounded-md flex items-center gap-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          } `}
          onClick={() => handleAddToCartClick()}
        >
          <ShoppingCart size={16} /> Add to Cart
        </Button>

        <div
          className={`absolute text-white text-xs px-2 py-1 rounded-sm top-6 right-6 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            <Button
              className={`text-gray-400 bg-white p-2 rounded-full shadow-md w-8 h-8 hover:bg-white`}
              onClick={() => setIsModalOpen(true)}
            >
              <Eye size={14} />
            </Button>
            <Button
              className="text-gray-400 bg-white p-2 rounded-full shadow-md w-8 h-8 hover:bg-white"
              onClick={handleRefresh}
            >
              <RefreshCcw size={14} />
            </Button>
          </div>
        </div>

        {/* Product Details */}
        <div className="my-4 flex flex-col gap-3 text-left">
          <div className="flex justify-between items-center">
            <p className="text-primary text-sm">{brand}</p>
            <div className={` ${isHovered ? "opacity-100" : "opacity-0"}`}>
              <Button
                className={`p-2 rounded-full shadow-md w-8 h-8 ${
                  isSelected
                    ? "bg-primary text-white hover:bg-primary"
                    : "bg-white text-gray-400 hover:bg-white"
                }`}
                onClick={handleWishlistClick}
              >
                <Heart size={20} />
              </Button>
            </div>
          </div>
          <Link href={`/products/${id}`}>
            <h3 className="text-sm font-normal">{title}</h3>
          </Link>

          {/* Ratings */}
          <div className="flex items-center gap-1 text-[#FBBF24] text-sm mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={
                  i < rating ? "text-[#FBBF24] fill-[#FBBF24]" : "text-gray-300"
                }
              />
            ))}
            <span className="text-gray-500 text-xs">
              ({reviewsCount} reviews)
            </span>
          </div>

          <div className="flex justify-between items-center gap-4">
            {/* Price */}
            <div className="flex items-center gap-2 mt-2">
              <p className="text-primary font-normal text-lg">
                ${price.toFixed(2)}
              </p>
              {originalPrice && (
                <p className="text-gray-400 line-through text-sm">
                  ${originalPrice?.toFixed(2)}
                </p>
              )}
            </div>
            <div>
              <Link href={`/products/${id}`}>
                <Button>View Details</Button>
              </Link>
            </div>
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
              <span className="text-gray-500 text-xs">
                ({reviewsCount} reviews)
              </span>
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

export default ProductCard;
