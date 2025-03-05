import React from "react";
import CollectionCards from "../CollectionCards";
import { getProducts } from "@/assets/product-data";

const WomansCollection = () => {
  const productsData = getProducts({ type: "Women’s Collection" });
  return (
    <div>
      <CollectionCards title="Women’s Collection" products={productsData} />
    </div>
  );
};

export default WomansCollection;
