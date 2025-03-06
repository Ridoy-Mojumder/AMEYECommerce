"use client";

import { getProductById } from "@/assets/product-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toggleSelected } from "@/store/features/selected/selectedSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/store/features/WishlistProductCounter/WishlistProductCounterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

interface IProductDetailsByIdProps {
  params?: { id?: string };
}

const ProductDetailsById = ({ params }: IProductDetailsByIdProps) => {
  const productId = params?.id ? Number(params.id) : NaN;
  const [selectedColor, setSelectedColor] = useState<string>("#F5F5F4");
  const dispatch = useAppDispatch();

  const productData = getProductById(productId);
  const selectedItems = useAppSelector((state) => state.selected.selectedItems);
  const wishlistProducts = useAppSelector(
    (state) => state.wishlistProduct.items
  );
  const isSelected = selectedItems.includes(productId.toString());
  const isWishlisted = wishlistProducts.some((item) => item.id === productId);

  if (isNaN(productId)) {
    return (
      <div className="container mx-auto px-4 py-5">
        <Card className="text-center text-red-500 text-lg font-semibold">
          Invalid Product ID
        </Card>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="container mx-auto px-4 py-5">
        <Card className="text-center text-red-500 text-lg font-semibold">
          Product not found
        </Card>
      </div>
    );
  }

  const handleWishlistClick = () => {
    if (!isSelected || !isWishlisted) {
      toast.success(`${productData.brand} added to wishlist!`);
      // dispatch(increment());
      dispatch(addToWishlist(productData));
    } else {
      toast.error(`${productData.brand} removed from wishlist!`);
      // dispatch(decrement());
      dispatch(removeFromWishlist(productData.id));
    }

    dispatch(toggleSelected(productData.id.toString()));
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="container mx-auto px-4 py-5">
      <Card className="p-6 shadow-lg rounded-lg bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image Section */}
          <div
            className="flex justify-center items-center p-6 rounded-lg"
            style={{ backgroundColor: selectedColor }}
          >
            <Image
              src={productData.imageUrl}
              alt={productData.title}
              width={350}
              height={350}
              className="object-none w-full max-w-xs md:max-w-sm"
            />
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {productData.title}
              </h1>
              <p className="text-lg text-gray-500 mt-2">{productData.brand}</p>
            </div>

            {/* Pricing & Discount */}
            <div className="flex items-center gap-3">
              <p className="text-2xl md:text-3xl font-semibold text-green-600">
                ${productData.price}
              </p>
              {productData.originalPrice && (
                <p className="text-lg text-gray-400 line-through">
                  ${productData.originalPrice.toFixed(2)}
                </p>
              )}
              {productData.discount && (
                <span className="bg-red-500 text-white text-xs md:text-sm font-medium px-3 py-1 rounded-md">
                  {productData.discount}% OFF
                </span>
              )}
            </div>

            {/* Color Selection */}
            <div className="flex flex-wrap gap-2 items-center">
              {["#DC2626", "#FBBF24", "#F5F5F4", "#FF9800"].map((color) => (
                <div
                  key={color}
                  className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                    selectedColor === color
                      ? "border-gray-400"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                ></div>
              ))}
            </div>

            {/* Ratings & Reviews */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < productData.rating
                        ? "text-[#FBBF24] fill-[#FBBF24]"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                ({productData.reviewsCount} reviews)
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {productData.description}
            </p>

            {/* Product Badges */}
            <div className="flex flex-wrap gap-2">
              {productData.newArrivals && (
                <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-md">
                  New Arrival
                </span>
              )}
              {productData.upComing && (
                <span className="bg-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-md">
                  Coming Soon
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <Button className="bg-black text-white text-sm px-5 py-2 rounded-md font-medium hover:bg-gray-800 transition flex items-center gap-2">
                <ShoppingCart size={16} /> Add to Cart
              </Button>
              <Button
                className={`text-sm px-5 py-2 rounded-md font-medium transition flex items-center gap-2 ${
                  isSelected
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "border border-gray-300 text-white hover:text-gray-700 hover:bg-gray-100"
                }`}
                onClick={handleWishlistClick}
              >
                {isSelected ? "Wishlisted" : "Add to Wishlist"}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetailsById;
