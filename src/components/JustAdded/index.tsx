import React from "react";
import CollectionCards from "../CollectionCards/page";

const productsData = [
  {
    id: 1,
    imageUrl: "/JustAdded/pngwing 12 (21).png",
    brand: "Nike",
    title: "Nike Air Max Shoes",
    price: 180.0,
    reviewsCount: 34,
    description: "Comfortable and stylish running shoes for all-day wear.",
    rating: 3,
  },
  {
    id: 2,
    imageUrl: "/JustAdded/pngwing 12 (26).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    description: "Elegant and sophisticated round high-quality watch for all occasions.",
    rating: 5,
  },
  {
    id: 3,
    imageUrl: "/JustAdded/pngwing 12 (5).png",
    brand: "Puma",
    title: "Puma Full-Sleeve T-Shirt",
    price: 40.0,
    newArrivals: true,
    reviewsCount: 34,
    description: "Soft cotton full-sleeve t-shirt, perfect for cooler weather.",
    rating: 5,
  },
  {
    id: 4,
    imageUrl: "/JustAdded/pngwing 12 (6).png",
    brand: "Adidas",
    title: "Adidas Half-Sleeve T-Shirt",
    price: 30.0,
    newArrivals: true,
    reviewsCount: 34,
    description: "Breathable half-sleeve t-shirt ideal for summer days.",
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
