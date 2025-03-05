import React from "react";
import CollectionCards from "../CollectionCards";
import { getProducts } from "@/assets/product-data";


const MansCollection = () => {
  const productsData = getProducts({type: "Men’s Collection"})
  return (
    <div>
      <CollectionCards title="Men’s Collection" products={productsData} />
    </div>
  );
};

export default MansCollection;
