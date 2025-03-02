"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Button } from "../ui/button";

const WinterCollectionContent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      title: "Best Winter Collection For You",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      imageUrl: "/banner/Group 1516.png",
    },
    {
      id: 2,
      title: "Exclusive Winter Deals",
      description: "Get the warmest outfits at the best prices this season.",
      imageUrl: "/banner/banner-2.png",
    },
    {
      id: 3,
      title: "Stay Stylish This Winter",
      description: "Discover trendy winter wear collections now.",
      imageUrl: "/banner/banner-2.png",
    },
  ];

  return (
    <div className="bg-[#ECFEFF] relative lg:h-[347px] px-6">
      <div className="max-w-6xl mx-auto w-full">
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 md:px-8">
                {/* Left Content (Text) */}
                <div className="text-center md:text-left flex flex-col gap-4">
                  <h1 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-gray-600 text-base md:text-sm font-extralight">
                    {slide.description}
                  </p>
                  <div>
                    <Button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
                      Shop Now
                    </Button>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center items-center md:justify-end">
                  <Image
                    src={slide.imageUrl}
                    alt="Winter Collection"
                    width={350}
                    height={250}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WinterCollectionContent;
