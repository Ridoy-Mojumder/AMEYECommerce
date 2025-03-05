import React from "react";
import CollectionCards from "../CollectionCards";
import { getProducts } from "@/assets/product-data";

const FeaturedProductsSection = () => {
  const productsData = getProducts({ type: "Featured Products" });
  return (
    <div>
      <CollectionCards title="Featured Products" products={productsData} />
    </div>
  );
};

export default FeaturedProductsSection;
