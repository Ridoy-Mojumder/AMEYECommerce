"use client";
import React, { useRef } from "react";
import CategoryCard from "./CategoryCard";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";

const BrowseByCategory = () => {
  const sliderRef = useRef<Slider>(null);

  // Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center gap-2 pb-4">
        <h1 className="text-3xl font-bold">Browse By Category</h1>
        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
      <hr className="border-gray-300 mb-6" />
      {/* Category Cards Slider Section */}
      <Slider {...settings} ref={sliderRef}>
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 12 (2).png"
          title="Men Fashion"
        />
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 11 (2).png"
          title="Women Fashion"
        />
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 11 (3).png"
          title="Electronics"
        />
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 11 (4).png"
          title="Accessories"
        />
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 11 (5).png"
          title="Shoes"
        />
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 11.png"
          title="Beauty & Care"
        />
      </Slider>
    </div>
  );
};

export default BrowseByCategory;
