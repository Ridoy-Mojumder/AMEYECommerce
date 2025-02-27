"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const WinterCollection = () => {
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
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 2,
      title: "Exclusive Winter Deals",
      description: "Get the warmest outfits at the best prices this season.",
    },
    {
      id: 3,
      title: "Stay Stylish This Winter",
      description: "Discover trendy winter wear collections now.",
    },
  ];

  return (
    <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
      <div className="relative bg-[#ECFEFF] rounded-lg shadow-lg w-[90%] md:w-[800px] h-auto md:h-[355px] flex items-center justify-between">
        {/* Text Slider */}
        <div className="w-full md:w-1/2 p-4 md:p-10 ">
          <Slider {...sliderSettings}>
            {slides.map((slide) => (
              <div key={slide.id} className="text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900">{slide.title}</h1>
                <p className="text-gray-600 text-sm md:text-lg mt-2 md:mt-4">{slide.description}</p>
                <button className="bg-black text-white px-6 py-2 mt-4 rounded">Shop Now</button>
              </div>
            ))}
          </Slider>
        </div>

        {/* Static Image */}
        <div className="hidden md:block bottom-0">
          <Image
            src="/banner/Group 1516.png"
            alt="Winter Collection"
            width={350}
            height={350}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WinterCollection;
