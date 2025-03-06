"use client";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AddToCart } from ".";

const AddToCartDrawer = () => {
  const wishlistProduct = useAppSelector((state) => state.addToCart.items);

  return (
    <AnimatePresence>
      {wishlistProduct.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }} // Animation duration
          className="fixed top-2/3 right-0 transform -translate-y-1/2 z-50"
        >
          <AddToCart />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddToCartDrawer;
