import React from "react";
import CollectionCards from "../CollectionCards/page";
const productsData = [
  {
    imageUrl: "/JustAdded/pngwing 12 (21).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 3,
  },
  {
    imageUrl: "/JustAdded/pngwing 12 (26).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    rating: 5,
  },
  {
    imageUrl: "/JustAdded/pngwing 12 (5).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    rating: 5,
  },
  {
    imageUrl: "/JustAdded/pngwing 12 (6).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    rating: 5,
  },
];
const JustAdded = () => {
  return (
    <div>
      <CollectionCards title="Just Added" products={productsData} />
    </div>
  );
};

export default JustAdded;
