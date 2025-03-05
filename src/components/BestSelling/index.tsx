import React from "react";
import CollectionCards from "../CollectionCards";
import { getProducts } from "@/assets/product-data";

const BestSelling = () => {
  const productsData = getProducts({ type: "Best Selling" });
  return (
    <div>
      <CollectionCards title="Best Selling" products={productsData} />
    </div>
  );
};

export default BestSelling;
