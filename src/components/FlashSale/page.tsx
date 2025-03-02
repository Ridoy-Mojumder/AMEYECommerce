"use client"
import React, { useEffect, useState } from "react";
import FlashSaleCard from "./FlashSaleCard";
import { Button } from "../ui/button";

const FlashSale = () => {
  const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 103); 
    targetDate.setHours(targetDate.getHours() + 22);
    targetDate.setMinutes(targetDate.getMinutes() + 56);
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
    <div className=" container mx-auto px-4 py-8  ">
      <div className="flex flex-wrap items-center justify-between gap-2 py-4">
        <div className="flex flex-wrap justify-between items-center gap-2 md:gap-5 lg:gap-10">
          <h1 className="text-3xl">Flash Sale</h1>
          <div className="flex justify-between items-center gap-2">
            <Button color="primary">{timeLeft.days}</Button>
            <h1>:</h1>
            <Button color="primary">{timeLeft.hours}</Button>
            <h1>:</h1>
            <Button color="primary">{timeLeft.minutes}</Button>
            <h1>:</h1>
            <Button color="primary">{timeLeft.seconds}</Button>
          </div>
        </div>
        <div className="flex gap-1">
          <Button
            variant="outline"
            className="bg-transparent rounded-none text-[#18181B] border-[#18181B]"
          >
            View more
          </Button>
        </div>
      </div>
      <hr className=" py-5" />
      <div className="grid md:grid-cols-2 grid-cols-1 justify-between gap-4">
        <FlashSaleCard
          imageUrl="/Card/FlashSaleCard/pngwing.com (4) 2 (1).png"
          brand="Smartwool"
          title="Smartwool Winter Cotton V Type Full Shirt"
          price={95.0}
          reviews={3435}
          rating={4}
          sold={7}
          stock={16}
        />
        <FlashSaleCard
          imageUrl="/Card/FlashSaleCard/pngwing.com (4) 2.png"
          brand="Smartwool"
          title="Smartwool Winter Cotton V Type Full Shirt"
          price={95.0}
          reviews={3435}
          rating={4}
          sold={7}
          stock={16}
        />
        <FlashSaleCard
          imageUrl="/Card/FlashSaleCard/pngwing.com (4) 3.png"
          brand="Smartwool"
          title="Smartwool Winter Cotton V Type Full Shirt"
          price={95.0}
          reviews={3435}
          rating={4}
          sold={7}
          stock={16}
        />
        <FlashSaleCard
          imageUrl="/Card/FlashSaleCard/pngwing.com (4) 2 (2).png"
          brand="Smartwool"
          title="Smartwool Winter Cotton V Type Full Shirt"
          price={95.0}
          reviews={3435}
          rating={4}
          sold={7}
          stock={16}
        />
      </div>
    </div>
  );
};

export default FlashSale;
