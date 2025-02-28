import React from "react";
import CollectionCards from "../CollectionCards/page";
const productsData = [
  {
    imageUrl: "/FeaturedProducts/pngwing 12 (27).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 3,
  },
  {
    imageUrl: "/FeaturedProducts/pngwing 12 (7).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    rating: 5,
  },
  {
    imageUrl: "/FeaturedProducts/pngwing 12 (8).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 5,
  },
  {
    imageUrl: "/FeaturedProducts/pngwing 12 (9).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 5,
  },
];
const FeaturedProductsSection = () => {
  return (
    <div>
      <CollectionCards title="Featured Products" products={productsData}/>
    </div>
  );
};

export default FeaturedProductsSection;
