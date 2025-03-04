"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

const SummerDeal = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 13);
  targetDate.setHours(targetDate.getHours() + 15);
  targetDate.setMinutes(targetDate.getMinutes() + 26);
  targetDate.setSeconds(targetDate.getSeconds() + 19);

  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="">
      <div className="bg-[#ECFEFF] h-[280px] md:h-[320px] lg:h-[400px] xl:h-[469px] container mx-auto flex justify-center items-center relative px-4 py-5">
        <div className="border-2 border-gray-300 w-full max-w-5xl p-6 md:p-10 flex  items-center text-center relative">
          <div className="flex flex-col justify-start items-center text-start  ">
            {/* Sale Text */}
            <h2 className="text-primary text-xl md:text-md font-normal tracking-wide">
              SUMMER DEAL 20% OFF
            </h2>

            {/* Main Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal mt-2">
              Best Deal For You
            </h1>

            {/* Countdown Timer */}
            <div className="flex items-center gap-1 md:gap-6 mt-4">
              <div className="text-center bg-white px-2 rounded-lg">
                <p className="text-xl md:text-2xl font-normal text-gray-800 ">
                  {timeLeft.days}
                </p>
                <p className="text-lg text-gray-500">Days</p>
              </div>
              <div className="text-center bg-white px-2 rounded-lg">
                <p className="text-xl md:text-2xl font-normal text-gray-800">
                  {timeLeft.hours}
                </p>
                <p className="text-lg text-gray-500">Hrs</p>
              </div>
              <div className="text-center bg-white px-2 rounded-lg">
                <p className="text-xl md:text-2xl font-normal text-gray-800">
                  {timeLeft.minutes}
                </p>
                <p className="text-sm text-gray-500">Mins</p>
              </div>
              <div className="text-center bg-white px-2 rounded-lg">
                <p className="text-xl md:text-2xl font-normal text-gray-800">
                  {timeLeft.seconds}
                </p>
                <p className="text-lg text-gray-500">Secs</p>
              </div>
            </div>

            {/* Explore Now Button */}
            <Button className="mt-6 border border-black text-black bg-transparent hover:bg-gray-200 px-6 py-2 rounded-none">
              Explore Now
            </Button>
          </div>
        </div>
        {/* Right-Side Image */}
        <div className="absolute right-20 bottom-0 hidden md:block  ">
          <Image
            src="/SummerDeal/pixlr-bg-result (1) 1.png"
            alt="Summer Sale"
            width={550}
            height={350}
            className="object-contain h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SummerDeal;
