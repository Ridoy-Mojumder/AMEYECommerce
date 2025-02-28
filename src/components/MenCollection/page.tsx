import React from "react";
import CollectionCards from "../CollectionCards/page";

const productsData = [
  {
    imageUrl: "/MansCollection/pngwing 12 (15).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 3,
  },
  {
    imageUrl: "/MansCollection/pngwing 12 (16).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    rating: 5,
  },
  {
    imageUrl: "/MansCollection/pngwing 12 (17).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 5,
  },
  {
    imageUrl: "/MansCollection/pngwing 12 (18).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 5,
  },
];

const MansCollection = () => {
  return (
    <div>
      <CollectionCards title="Men’s Collection" products={productsData} />
    </div>
  );
};

export default MansCollection;
