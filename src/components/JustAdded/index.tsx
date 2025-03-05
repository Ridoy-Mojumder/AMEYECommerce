import React from "react";
import CollectionCards from "../CollectionCards";
import { getProducts } from "@/assets/product-data";



const JustAdded = () => {

  const productsData = getProducts({type: "Just Added"})
  return (
    <div>
      <CollectionCards title="Just Added" products={productsData} />
    </div>
  );
};

export default JustAdded;
