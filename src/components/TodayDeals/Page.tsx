import React from "react";
import CollectionCards from "../CollectionCards/page";

const productsData = [
  {
    imageUrl: "/TodayDeals/pngwing 12 (1).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    reviewsCount: 34,
    rating: 3,
  },
  {
    imageUrl: "/TodayDeals/pngwing 12 (2).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    rating: 5,
  },
  {
    imageUrl: "/TodayDeals/pngwing 12 (3).png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    rating: 5,
  },
  {
    imageUrl: "/TodayDeals/pngwing 12.png",
    brand: "Jord",
    title: "Jord Round High Watch",
    price: 180.0,
    newArrivals: true,
    reviewsCount: 34,
    rating: 5,
  },
];

const TodayDeals = () => {
  return (
    <div>
      <CollectionCards title="Todays Deal" products={productsData}/>
    </div>
  );
};

export default TodayDeals;
