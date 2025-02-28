"use client"

import React, { useRef } from "react";
import Slider from "react-slick";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../ProductCard/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Product {
  imageUrl: string;
  brand: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  newArrivals?: boolean;
  reviewsCount: number;
  rating: number;
}

interface ICollectionCardsProps {
  title: string;
  products: Product[];
}

const CollectionCards: React.FC<ICollectionCardsProps> = ({ title, products }) => {
  const sliderRef = useRef<Slider>(null);

  // Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-5">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center gap-2 pb-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        {/* Navigation Buttons */}
        <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => sliderRef.current?.slickPrev()}>
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => sliderRef.current?.slickNext()}>
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
      </div>
      <hr className="border-gray-300 mb-6" />

      {/* Product Cards Slider */}
      <Slider ref={sliderRef} {...settings} className="py-4">
        {products.map((product, index) => (
          <div key={index} className="px-2">
            <ProductCard {...product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CollectionCards;
