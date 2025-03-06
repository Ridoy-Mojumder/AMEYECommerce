"use client";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import { WishlistDrawer } from ".";
import { motion, AnimatePresence } from "framer-motion";

const Drawer = () => {
  const wishlistProduct = useAppSelector(
    (state) => state.wishlistProduct.items
  );

  return (
    <AnimatePresence>
      {wishlistProduct.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50"
        >
          <div>
            <WishlistDrawer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
