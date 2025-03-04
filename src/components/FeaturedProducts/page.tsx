import React from "react";
import CollectionCards from "../CollectionCards/page";

const productsData = [
  {
    imageUrl: "/FeaturedProducts/pngwing 12 (27).png",
    brand: "Nike",
    title: "Nike Air Max 2023 Shoes",
    price: 150.0,
    reviewsCount: 150,
    rating: 4,
    description: "The Nike Air Max 2023 Shoes offer superior comfort, sleek design, and excellent durability.",
    newArrivals: true,
  },
  {
    imageUrl: "/FeaturedProducts/pngwing 12 (7).png",
    brand: "Rolex",
    title: "Rolex Submariner Watch",
    price: 9000.0,
    reviewsCount: 250,
    rating: 5,
    description: "The Rolex Submariner Watch is a perfect blend of luxury and performance, built for divers and adventurers.",
    upComing: true,
  },
  {
    imageUrl: "/FeaturedProducts/pngwing 12 (8).png",
    brand: "Adidas",
    title: "Adidas Baby Tracksuit",
    price: 60.0,
    reviewsCount: 120,
    rating: 5,
    description: "Soft, comfortable, and stylish, the Adidas Baby Tracksuit is designed for your little one’s active lifestyle.",
    newArrivals: true,
  },
  {
    imageUrl: "/FeaturedProducts/pngwing 12 (9).png",
    brand: "H&M",
    title: "H&M Summer Dress for Women",
    price: 40.0,
    reviewsCount: 200,
    rating: 4,
    description: "The H&M Summer Dress for Women combines comfort and style, perfect for any summer occasion.",
    upComing: true,
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
