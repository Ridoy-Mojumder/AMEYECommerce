"use client";

import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import {
  clearWishlist,
  removeFromWishlist,
} from "@/store/features/WishlistProductCounter/WishlistProductCounterSlice";
import { Button } from "../ui/button";
import { Heart, X } from "lucide-react";
import { toggleSelected } from "@/store/features/selected/selectedSlice";

export function WishlistDrawer() {
  const wishlistProduct = useAppSelector(
    (state) => state.wishlistProduct.items
  );
  const dispatch = useAppDispatch();

  const handleRemoveItemFromWishlist = (id: number) => {
    dispatch(removeFromWishlist(id));
    dispatch(toggleSelected(id.toString()));
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="bg-primary text-white rounded-none"
        >
          <Heart /> Wishlist ({wishlistProduct.length}){" "}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="ml-auto max-w-sm h-full bg-white shadow-lg rounded-none overflow-hidden">
        <div className="mx-auto w-full px-4 py-6">
          <DrawerHeader className="border-b pb-3 flex justify-between items-center">
            <DrawerTitle className="text-xl font-semibold text-gray-900">
              Your Wishlist Data
            </DrawerTitle>
            <DrawerClose asChild>
              <button className="text-gray-500 hover:text-gray-800 transition">
                <X className="w-6 h-6" />
              </button>
            </DrawerClose>
          </DrawerHeader>

          {wishlistProduct.length === 0 ? (
            <p className="text-center text-gray-500 mt-6">
              No items in wishlist
            </p>
          ) : (
            <div className="flex flex-col gap-4 mt-4">
              {wishlistProduct.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg shadow-sm"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={50}
                    height={50}
                    className=""
                  />
                  <div className="flex-grow">
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                  <button
                    className="text-red-500 font-medium hover:text-red-700 transition"
                    onClick={() => handleRemoveItemFromWishlist(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-md font-medium hover:bg-red-600 transition"
                onClick={() => dispatch(clearWishlist())}
              >
                Clear Wishlist
              </button>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
