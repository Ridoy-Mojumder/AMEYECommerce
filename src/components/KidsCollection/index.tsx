import React from "react";
import CollectionCards from "../CollectionCards";
import { getProducts } from "@/assets/product-data";

const KidsCollection = () => {
  const productsData = getProducts({ type: "Kid’s Collection" });
  return (
    <div>
      <CollectionCards title="Kid’s Collection" products={productsData} />
    </div>
  );
};

export default KidsCollection;
