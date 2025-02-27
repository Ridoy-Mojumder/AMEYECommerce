import React from "react";
import FlashSaleCard from "./FlashSaleCard";
import { Button } from "../ui/button";

const FlashSale = () => {
  return (
    <div className=" container mx-auto px-4 py-8  ">
      <div className="flex flex-wrap items-center justify-between gap-2 py-4">
        <div className="flex flex-wrap justify-between items-center gap-2 md:gap-5 lg:gap-10">
          <h1 className="text-3xl">Flash Sale</h1>
          <div className="flex justify-between items-center gap-2">
            <Button color="primary">103</Button>
            <h1>:</h1>
            <Button color="primary">22</Button>
            <h1>:</h1>
            <Button color="primary">56</Button>
            <h1>:</h1>
            <Button color="primary">19</Button>
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
