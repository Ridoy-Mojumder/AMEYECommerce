import React from "react";
import CollectionCards from "../CollectionCards/page";

const productsData = [
  {
    id: 1,
    imageUrl: "/TodayDeals/pngwing 12 (1).png",
    brand: "StylePro",
    title: "Men's Classic Formal Shirt",
    price: 45.0,
    discount: 15,
    reviewsCount: 78,
    rating: 4,
    originalPrice:50.5,
    description:
      "Upgrade your wardrobe with the Men's Classic Formal Shirt. Made from high-quality cotton fabric, this shirt offers a perfect blend of comfort and style. Featuring a modern fit with a sleek design, it's ideal for office wear, formal events, or casual outings. Available in multiple sizes and colors.",
  },
  {
    id: 2,
    imageUrl: "/TodayDeals/pngwing 12 (2).png",
    brand: "EleganceWear",
    title: "Women's Elegant Floral Dress",
    price: 80.0,
    newArrivals: true,
    reviewsCount: 56,
    rating: 5,
    description:
      "Step into elegance with the Women's Elegant Floral Dress. Designed with soft and breathable fabric, this dress offers ultimate comfort while keeping you stylish. Perfect for parties, evening gatherings, or casual outings, its floral patterns and flowy design make it a must-have for fashion enthusiasts.",
  },
  {
    id: 3,
    imageUrl: "/TodayDeals/pngwing 12 (3).png",
    brand: "Jord",
    title: "Jord Luxury Chronograph Watch",
    price: 250.0,
    newArrivals: true,
    reviewsCount: 89,
    rating: 5,
    description:
      "Enhance your style with the Jord Luxury Chronograph Watch. Crafted with a premium stainless steel case, a scratch-resistant sapphire crystal, and precision chronograph movement, this watch is designed for those who demand both luxury and performance. Water-resistant and suitable for all occasions.",
  },
  {
    id: 4,
    imageUrl: "/TodayDeals/pngwing 12.png",
    brand: "Jord",
    title: "Jord Elegant Leather Watch",
    price: 180.0,
    discount: 30,
    reviewsCount: 67,
    rating: 5,
    description:
      "The Jord Elegant Leather Watch is the perfect blend of sophistication and durability. Featuring a genuine leather strap, a sleek black dial, and a water-resistant stainless steel case, this watch is ideal for both casual and formal wear. Now available at a 30% discount!",
  },
];

const TodayDeals = () => {
  return (
    <div>
      <CollectionCards title="Today's Deal" products={productsData} />
    </div>
  );
};

export default TodayDeals;
